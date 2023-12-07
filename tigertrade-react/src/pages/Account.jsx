import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { BoldText2, BoldText3, PageContainer, AccountContainer } from '../styles/styles';
import defaultProfileLogo from '../assets/default-profile-picture.png';

const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  float: right;
`;

function Account() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const savedAccount = localStorage.getItem('account');
    if (savedAccount) {
      setAccount(JSON.parse(savedAccount));
    }
  }, []);


  const handleAccountTypeChange = () => {
    const newAccountType = account.accountType === 'Buyer' ? 'Seller' : 'Buyer';
    const newAccount = { ...account, accountType: newAccountType };
    setAccount(newAccount);
  }

  if (!account) { // if account is null or undefined, render a loading message
    return (
      <div>
      <NavBar />
      <PageContainer>
        <h1>Account</h1>
        <AccountContainer>
          <ProfilePicture src={defaultProfileLogo} alt="" />
          <BoldText3>Error loading account</BoldText3>
        </AccountContainer>
      </PageContainer>
    </div>
    );
  }

  return (
    <div>
      <NavBar />
      <PageContainer>
        <h1>Account</h1>

        <AccountContainer>
          <ProfilePicture src={defaultProfileLogo} alt="" />
          <BoldText3>Username:</BoldText3>
          <p>{account.username}</p>
          <BoldText3>Email:</BoldText3>
          <p>{account.email}</p>
          <BoldText3>Account Type:</BoldText3>
          <p>{account.accountType}</p>
          <BoldText3>ID:</BoldText3>
          <p>{account._id}</p>
          <button onClick={handleAccountTypeChange}>Switch to {account.accountType === 'Buyer' ? 'Seller' : 'Buyer'} account</button>
        </AccountContainer>
      </PageContainer>
    </div>
  );
}

export default Account;
