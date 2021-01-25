import styled from 'styled-components';

import db from '../db.json';
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
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pokémon</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
