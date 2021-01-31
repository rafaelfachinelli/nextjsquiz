/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';

import correctAnimationData from './assets/animations/correct.json';
import wrongAnimationData from './assets/animations/wrong.json';

export default function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmit] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const defaultCorrectAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: correctAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultWrongAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: wrongAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <motion.img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
        animate={isQuestionSubmited ? 'hidden' : 'visible'}
        initial="hidden"
        variants={{
          visible: {
            x: '0',
            transition: {
              duration: 0.2,
            },
          },
          hidden: {
            x: '100%',
            transition: {
              delay: 0.5,
              duration: 0.2,
            },
          },
        }}
      />
      <Widget.Content>
        <motion.h2
          animate={isQuestionSubmited ? 'hidden' : 'visible'}
          initial="hidden"
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            hidden: {
              x: '100%',
              opacity: 0,
              transition: {
                delay: 0.5,
                duration: 0.2,
              },
            },
          }}
        >
          {question.title}
        </motion.h2>
        <motion.p
          animate={isQuestionSubmited ? 'hidden' : 'visible'}
          initial="hidden"
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            hidden: {
              x: '100%',
              opacity: 0,
              transition: {
                delay: 0.5,
                duration: 0.2,
              },
            },
          }}
        >
          {question.description}
        </motion.p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmit(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmit(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative_${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                as={motion.label}
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                animate={isQuestionSubmited ? 'hidden' : 'visible'}
                custom={index}
                variants={{
                  visible: (i) => ({
                    x: '0',
                    opacity: 1,
                    transition: {
                      delay: (i + 0.5) * 0.2,
                    },
                  }),
                  hidden: (i) => ({
                    x: '100%',
                    opacity: 0,
                    transition: {
                      delay: (i + 3) * 0.1,
                      duration: 0.5,
                    },
                  }),
                }}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(index)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
            style={{ position: 'relative' }}
            data-status={isQuestionSubmited && (isCorrect ? 'CORRECT' : 'WRONG')}
          >
            {!isQuestionSubmited && 'Confirmar'}
            {isQuestionSubmited && isCorrect && 'Acertou!'}
            {isQuestionSubmited && !isCorrect && 'Errou!'}

            {isQuestionSubmited && isCorrect && (
              <Lottie
                options={defaultCorrectAnimationOptions}
                height={70}
                width={70}
                style={{ position: 'absolute', bottom: '-.5rem', right: 0 }}
              />
            )}
            {isQuestionSubmited && !isCorrect && (
              <Lottie
                options={defaultWrongAnimationOptions}
                height={70}
                width={70}
                style={{ position: 'absolute', bottom: '-.5rem', right: 0 }}
              />
            )}
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
