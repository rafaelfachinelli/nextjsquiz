import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>007: Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={
              (e) => {
                e.preventDefault();
                router.push(`/quiz/nextjsquiz___rafaelfachinelli?name=${name}`);
              }
            }
            >
              <Input
                name="nomeDoUsuario"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <ul>
              {db.external.map((externalLink) => {
                const [projectName, gitHubUser] = externalLink
                  .replace('https://', '')
                  .replace('.vercel.app/', '')
                  .split('.');

                return (
                  <li key={externalLink}>
                    <Widget.Topic
                      as={Link}
                      href={name.length !== 0 ? `/quiz/${projectName}___${gitHubUser}?name=${name}` : ''}
                      data-disabled={name.length === 0}
                      title={
                        name.length !== 0
                          ? `Jogar este quiz como ${name}.`
                          : 'Você precisa digitar um nome para poder jogar.'
                      }
                    >
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafaelfachinelli/nextjsquiz" target="_blank" />
    </QuizBackground>
  );
}
