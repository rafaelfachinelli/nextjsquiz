/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

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

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmit(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmit(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative_${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
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
