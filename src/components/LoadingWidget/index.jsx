/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

import Widget from '../Widget';

import animationLoaderData from './assets/animation/loader.json';

export default function LoadingWidget() {
  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoaderData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Lottie
          options={defaultAnimationOptions}
          height={200}
          width={200}
        />
      </Widget.Content>
    </Widget>
  );
}
