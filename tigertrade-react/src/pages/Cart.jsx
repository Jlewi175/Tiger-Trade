import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { CartContainer, PageContainer } from '../styles/styles';

const Subtotal = styled.p`
  font-size: 1.1rem;
  padding-bottom: 10px;
`;

const CartItemContainer = styled.div`
  width: 70%;
  min-width: 300px;
  max-width: 500px;
  padding-bottom: 4px;
`;

const CheckoutButton = styled.button`
  width: 200px; // Adjust the width as needed
`;

const ReturnToMarketText = styled.p`
  margin-top: 10px;
  a {
    color: #0077cc;
    text-decoration: none;
  }
`;

function Cart({ items, setItems }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleIncrease = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantityToBuy: item.quantityToBuy + 1 };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantityToBuy > 1) {
        return { ...item, quantityToBuy: item.quantityToBuy - 1 };
      }
      return item;
    });

    setItems(updatedItems);
  };
  const totalPrice = parseFloat(items.reduce((acc, item) => acc + item.itemPrice * item.quantityToBuy, 0)).toFixed(2);
  const isCartEmpty = items.length === 0;

  return (
    <div>
      <NavBar />
      <PageContainer>
        <h1>Cart</h1>
        {!isCartEmpty ? (
          <>
            <p>
              You have {items.reduce((acc, item) => acc + item.quantityToBuy, 0)} item(s) in your cart (${totalPrice})
            </p>
              {items.map((item) => (
                <CartItemContainer key={item.id}>
                  <CartItem
                    item={item}
                    onDelete={handleDelete}
                    quantity={item.quantityToBuy}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                  />
                </CartItemContainer>
              ))}
            <Subtotal>Subtotal: ${totalPrice}</Subtotal>
            <CheckoutButton>
            <Link to={{ pathname: '/checkout', state: { totalPrice: totalPrice } }}>Checkout</Link>
            </CheckoutButton>
            <ReturnToMarketText>
              <Link to="/market">Return to Marketplace</Link>
            </ReturnToMarketText>
          </>
        ) : (
          <h3>
            Your cart is empty. Browse the <Link to="/market">Marketplace.</Link>
          </h3>
        )}
      </PageContainer>
    </div>
  );
}

export default Cart;
