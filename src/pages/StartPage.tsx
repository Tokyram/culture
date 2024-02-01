import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/StartPage.css';

const StartPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('StartPage rendered');
      history.push('/HomePage');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [history]);

  return (
    <div className="start-page">
      <img src="../../public/assets/img/logo.png" alt="" />
      <h1 className="titre">Bienvenu</h1>
      <div className="fire">
      <div className="fire-left">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-center">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-right">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-bottom">
        <div className="main-fire"></div>
      </div>
    </div>

      <p>Un terrain optimal associé à une <span>culture exceptionnelle.</span></p>
    </div>
  );
};

export default StartPage;
