/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  span {
    font-weight: 700;
  }

  .result-correct {
    color: ${({ theme }) => theme.colors.success};
  }

  .result-wrong {
    color: ${({ theme }) => theme.colors.wrong};
  }
`;

export default function ResultItem({ result, index }) {
  return (
    <Container>
      <span className="result-index">
        #
        {`${index + 1} `}
      </span>
      Pergunta:
      <span className={result === true ? 'result-correct' : 'result-wrong'}>
        {result === true ? ' Acertou' : ' Errou'}
      </span>
    </Container>
  );
}
