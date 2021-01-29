import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>007: Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={
              (e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
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

        <Widget>
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
                    <Widget.Topic href={externalLink} target="_blank">
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafaelfachinelli/nextjsquiz" target="_blank" />
    </QuizBackground>
  );
}
