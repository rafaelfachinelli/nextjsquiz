import styled from 'styled-components';

import db from '../db.json';

import Head from 'next/head';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

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
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="icon" href="https://www.drupal.org/files/project-images/Pokeball.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="PokéQuiz - Prove que você é um verdadeiro mestre Pokémon" />
        <meta name="description" content={db.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="PokéQuiz - Prove que você é um verdadeiro mestre Pokémon" />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
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
    </>
  );
}
