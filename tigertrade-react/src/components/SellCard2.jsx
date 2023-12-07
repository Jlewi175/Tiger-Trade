import React from 'react';
import styled from 'styled-components';
import { BoldText2, SellItemContainer } from '../styles/styles';

function SellCard2({ item, onDelete }) {
  const { _id, itemName, itemDescription, itemPrice } = item;

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <SellItemContainer>
        <BoldText2>{itemName}</BoldText2>
        <p>${itemPrice}</p>
        <p>{itemDescription}</p>
        <button onClick={handleDelete}>Delete Item</button>
    </SellItemContainer>
  );
};

export default SellCard2;
