/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Widget from '../Widget';
import ResultItem from './ResultItem';
import GalleyWidget from '../GalleyWidget';

export default function ResultWidget({ results }) {
  const router = useRouter();

  return (
    <>
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
          <h1>Resultados</h1>
        </Widget.Header>

        <Widget.Content>
          <h1>
            {`Parabéns ${router.query.name}! Você finalizou o quiz.`}
          </h1>
          <p>
            Acertou
            <b>{` ${results.filter((result) => result).length} `}</b>
            {results.filter((result) => result).length > 1 ? 'perguntas.' : 'pergunta.'}
          </p>
          <ul>
            {results.map((result, index) => (
              <ResultItem key={`result__${result}`} result={result} index={index} />
            ))}
          </ul>
        </Widget.Content>

      </Widget>

      <GalleyWidget playerName={router.query.name} />
    </>
  );
}
