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
import GalleyWidget from '../src/components/GalleyWidget';

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

        <GalleyWidget playerName={name} />

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
