import React from 'react';
import { Puff } from 'react-loader-spinner';
import { PuffContainer } from './styles';

const Spinner = () => {
  return (
    <PuffContainer>
      <Puff
        height={30}
        width={30}
        radius={1}
        color='#4fa94d'
        ariaLabel='puff-loading'
        visible={true}
      />
    </PuffContainer>
  );
};

export default Spinner;
