/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

import Widget from '../Widget';
import Link from '../Link';

import db from '../../../db.json';

export default function GalleyWidget({ playerName }) {
  return (
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
      <Widget.Header>
        <h1>Quiz da Galera</h1>
      </Widget.Header>
      <Widget.Content>
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
                  href={playerName.length !== 0 ? `/quiz/${projectName}___${gitHubUser}?name=${playerName}` : ''}
                  data-disabled={playerName.length === 0}
                  title={
                    playerName.length !== 0
                      ? `Jogar este quiz como ${playerName}.`
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
  );
}
