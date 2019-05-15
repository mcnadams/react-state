import React from 'react';
import RandomColor from './RandomColor';

export default function App() {
  return (
    <>
      <RandomColor intervalLength={1000} />
      <RandomColor />
    </>
  );
}
