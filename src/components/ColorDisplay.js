import React from 'react';
import RandomColor from './RandomColor';

//displays one RandomColor
//has a button that adds another RandomColor
//has an input field for interval

export default function ColorDisplay() {
  return (
    <>
      <RandomColor intervalLength={1000} />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
      <RandomColor />
    </>
  );
}
