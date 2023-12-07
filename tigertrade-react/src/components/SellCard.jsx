import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SellItemContainer, FullWidthButton } from '../styles/styles';
import { apiLink } from '../data';

const CardLabel = styled.label`
  width: 100%;
`;

function SellCard({ onAdd }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      setAccount(JSON.parse(savedAccount));
    }
  }, []);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleItemDescriptionChange = (event) => {
    setItemDescription(event.target.value);
  };

  const handleSellButtonClick = async () => {
    const newItem = {
      itemName: itemName,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      owner: account._id
    };
  
    try {
      const response = await fetch(`${apiLink}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
  
      if (response.ok) {
        onAdd(itemName, itemPrice, itemDescription);
      } else {
        throw new Error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item. Please try again later.');
    }
  
    // Reset the input fields
    setItemName('');
    setItemPrice('');
    setItemDescription('');
  };
  

  return (
    <SellItemContainer>
      <CardLabel>Item Name:</CardLabel>
      <input type="text" value={itemName} onChange={handleItemNameChange} />

      <CardLabel>Item Price:</CardLabel>
      <input type="number" value={itemPrice} onChange={handleItemPriceChange} />

      <CardLabel>Item Description:</CardLabel>
      <input value={itemDescription} onChange={handleItemDescriptionChange} />

      <FullWidthButton onClick={handleSellButtonClick}>Add Item to Sell</FullWidthButton>
    </SellItemContainer>
  );
}

export default SellCard;
