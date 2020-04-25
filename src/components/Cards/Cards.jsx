import React from 'react';

const Cards = ({ data }) => {
  return (
    <>
      <h1>Cards</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Cards;
