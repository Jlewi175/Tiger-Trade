import styled from 'styled-components';
import theme from './themes';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  gap: 20px; /* set the desired padding between items */
`;

export const FlexWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px; /* set the desired padding between items */
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountContainer = styled.div`
  display: inline-block;
  min-width: 400px;
  padding: 10px;
  border-radius: 0.25rem;
  background-color: ${theme.bgSecondary};
`;

export const CartContainer = styled.div`
  display: inline-block;
  min-width: 400px;
  padding: 10px;
  border-radius: 0.25rem;
  background-color: ${theme.bgSecondary};
`;

export const CheckoutFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const BuyItemContainer = styled.div`
  background-color: ${theme.bgSecondary};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  overflow: hidden;
  width: 300px;
  padding: 10px
`;

export const SellItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.bgSecondary};
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  width: 200px;
  min-height: 200px;
  padding: 10px;
`;

export const BoldText2 = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const BoldText3 = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const FullWidthButton = styled.button`
  width: 100%;
`;

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${theme.bgSecondary};
  border-radius: 10px;
  margin-top: 40px; /* add margin-top here and adjust value */
`;