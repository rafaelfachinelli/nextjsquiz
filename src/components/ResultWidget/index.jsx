/* eslint-disable react/prop-types */
import React from 'react';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Resultados
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {` ${results.filter((result) => result).length} `}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {`${index + 1} `}
              Resultado:
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
