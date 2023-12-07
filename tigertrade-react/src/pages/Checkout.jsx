import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { PageContainer, CheckoutFormContainer, CheckoutFlexContainer } from '../styles/styles';
import StripeCheckout from 'react-stripe-checkout';
import { useLocation } from 'react-router-dom'; 

function Checkout({ cart }) {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('');

  function handlePlaceOrder(total) {
    // Send payment details to server
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart, total }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Redirect to order confirmation page
        navigate(`/confirmation/${data.orderId}`);
      })
      .catch((error) => console.error('Error placing order:', error));
  }

  // Calculate total price of items in cart
  const total = cart.reduce((acc, item) => acc + item.itemPrice, 0).toFixed(2);

  function onToken(token) {
    console.log('Token:', token);

    // Send payment details to server
    fetch('/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        amount: total * 100,
        currency: 'USD',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Set payment status to success
        setPaymentStatus('success');
        // Redirect to order confirmation page after 3 seconds
        setTimeout(() => {
          navigate(`/confirmation/${data.orderId}`);
        }, 3000);
      })
      .catch((error) => console.error('Error processing payment:', error));
  }
  const totalPrice = cart.reduce((acc, item) => acc + item.itemPrice * item.quantityToBuy, 0);

  return (
    <div>
      <NavBar />
      <PageContainer>
        <CheckoutFlexContainer>
          <CheckoutFormContainer>
            <h2>Checkout</h2>
            <p>Total: ${totalPrice}</p>
            {paymentStatus === 'success' ? (
alert("  Payment success! Redirecting to confirmation page...")
) : (
              <StripeCheckout
                stripeKey="pk_test_51N7ZFoSFgH5Qp7nL2hSJaI9QRNrWOhFVcGt4eIEzi3uxk58qeEHpl1sjdCUMV3hHm9s5Tm3Z8xQgEvkfQYqQJnLF00H6tVgBkc"
                token={onToken}
                amount={total * 100}
                currency="USD"
              />
            )}
          </CheckoutFormContainer>
        </CheckoutFlexContainer>
      </PageContainer>
    </div>
  );
}


export default Checkout;
