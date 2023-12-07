import React from 'react';
import styled from 'styled-components';
import { BoldText2, BoldText3, FlexContainer, BuyItemContainer } from '../styles/styles';


function BuyCard({ item, onAdd }) {
  const { id, itemName, itemDescription, itemPrice } = item;

  const handleSellButtonClick = () => {
    onAdd(itemName, itemPrice, itemDescription, 1); // Pass the quantity (1) as the last argument
  };
  
  return (
    <BuyItemContainer>
        <FlexContainer>
          <BoldText2>{itemName}</BoldText2>
          <button onClick={handleSellButtonClick}>Add to Cart</button>
        </FlexContainer>
        <p>{itemDescription}</p>
        <BoldText3>${itemPrice.toFixed(2)}</BoldText3>
    </BuyItemContainer>
  );
}

export default BuyCard;
