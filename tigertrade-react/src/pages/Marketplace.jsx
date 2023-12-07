import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BuyCard from '../components/BuyCard';
import NavBar from '../components/NavBar';
import { v4 as uuidv4 } from 'uuid';
import { FlexWrapContainer, PageContainer } from '../styles/styles';
import { apiLink } from '../data';

function Marketplace({ cart, setItems }) {
  const [items, setItems2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiLink}/items`);
        if (response.ok) {
          const data = await response.json();
          setItems2(data);
        } else {
          throw new Error('Failed to fetch items');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        alert('Failed to fetch items. Please try again later.');
      }
    };
  
    fetchData();
  }, []);
  const handleAddItem = (itemName, itemPrice, itemDescription, quantityToBuy) => {
    const existingItem = cart.find(item => item.itemName === itemName);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.itemName === itemName) {
          return { ...item, quantityToBuy: item.quantityToBuy + quantityToBuy };
        }
        return item;
      });
      setItems(updatedCart);
    } else {
      const newItem = {
        id: uuidv4(),
        itemName,
        itemPrice,
        itemDescription,
        quantityToBuy,
      };
      setItems([...cart, newItem]);
    }
  };

  const totalPrice = parseFloat(cart.reduce((acc, item) => acc + item.itemPrice * item.quantityToBuy, 0)).toFixed(2);

  return (
    <div>
      <NavBar />
      <PageContainer>

        <h1>Marketplace</h1>
        <p>You have {cart.reduce((acc, item) => acc + item.quantityToBuy, 0)} item(s) in your cart (${totalPrice})</p>

        <FlexWrapContainer>
          {items.map((item) => (
            <BuyCard item={item} onAdd={handleAddItem} />
          ))}
        </FlexWrapContainer>
      </PageContainer>
    </div>
  );
}

export default Marketplace;
