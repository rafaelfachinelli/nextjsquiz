/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDBQuiz }) {
  console.log(externalDBQuiz);
  return (
    <ThemeProvider theme={externalDBQuiz.theme}>
      <QuizScreen externalDBQuiz={externalDBQuiz} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const externalDBQuiz = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Falha em pagar os dados');
    })
    .then((responseInJSON) => responseInJSON)
    .catch((error) => {
      console.error(error);
    });

  return {
    props: {
      externalDBQuiz,
    },
  };
}
