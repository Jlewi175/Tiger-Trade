import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import SellCard from '../components/SellCard';
import SellCard2 from '../components/SellCard2';
import { FlexWrapContainer, PageContainer } from '../styles/styles';
import { apiLink } from '../data';

function Seller() {
  const [account, setAccount] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      setAccount(JSON.parse(savedAccount));
    }
  }, []);

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`${apiLink}/items/${_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setItems(items.filter((item) => item._id !== _id));
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item. Please try again later.');
    }
  };
  

  const handleAddItem = (itemName, itemPrice, itemDescription) => {
    const newItem = {
      itemName,
      itemPrice,
      itemDescription,
    };
    setItems([...items, newItem]);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiLink}/items/owner/${account?._id}`);
        const data = await response.json();
        setItems(data); 
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    if (account) { 
      fetchItems();
    }
  }, [account]); // added account to dependencies

  return (
    <div>
      <NavBar />
      <PageContainer>
        <h1>Sell Items</h1>
        <p>You have {items.length} item(s) for sale</p>
        <FlexWrapContainer>
          <SellCard onAdd={handleAddItem} />
          {items.map((item) => (
            <SellCard2
              onDelete={handleDelete}
              item={item}
              key={item._id}
            />
          ))}
        </FlexWrapContainer>
      </PageContainer>
    </div>
  );
}

export default Seller;
