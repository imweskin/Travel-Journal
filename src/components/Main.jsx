import React from 'react';
import Articles from '../data';
import Article from './Article';

function Main() {
  return (
    <main>
      {Articles.map((article, index) => (
        <Article {...article} key={index} />
      ))}
    </main>
  )
};

export default Main;