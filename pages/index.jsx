import React from 'react';
import styled from 'styled-components';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 1%;
  padding-top: 45px;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>PokéQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Prove que você é um mestre Pokémon.</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/rafaelfachinelli" />
    </QuizBackground>
  );
}
