// HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/HomePage.css';

const HomePage: React.FC = () => {
  console.log('HomePage rendered');
  const history = useHistory();

  const redirectToPage1 = () => {
    history.push('/Inscription');
  };

  const redirectToPage2 = () => {
    history.push('/Login');
  };

  return (
    <div className="home-page">
      <img src="../../public/assets/img/logo.png" alt="" />
      
      <button className='btn1' onClick={redirectToPage1}>Créer un compte</button>
      <button className='btn2' onClick={redirectToPage2}>Se connecter</button>
      <p>Un terrain optimal associé à une <span>culture exceptionnelle.</span></p>
    </div>
  );
};

export default HomePage;
