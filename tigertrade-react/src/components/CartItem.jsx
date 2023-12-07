import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../styles/styles';
import theme from '../styles/themes';

const ItemName = styled.span`
  font-size: 24px;
  font-weight: 700;
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  font-size: 18px;
`;

export const CartItemContainer = styled.div`
  background-color: #545454;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  overflow: hidden;
  padding: 6px;
`;

const QuantityControls = styled(FlexContainer)`
  width: 100px;
  margin-left: auto;
`;

function CartItem({ item, onDelete, quantity, onIncrease, onDecrease }) {
  const { id, itemName, itemDescription, itemPrice } = item;

  const handleDelete = () => {
    onDelete(id);
  };

  const handleIncrease = () => {
    onIncrease(id);
  };

  const handleDecrease = () => {
    if (quantity - 1 === 0) {
      handleDelete();
    } else {
      onDecrease(id);
    }
  };

  return (
    <CartItemContainer>
      <FlexContainer>
        <ItemName>{itemName}</ItemName>
        <ItemPrice>${(itemPrice * quantity).toFixed(2)}</ItemPrice>
      </FlexContainer>
      <FlexContainer>
      <p>{itemDescription}</p>
      <QuantityControls>
        <button onClick={handleDecrease}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrease}>+</button>
      </QuantityControls>
      </FlexContainer>

    </CartItemContainer>
  );
}

export default CartItem;
