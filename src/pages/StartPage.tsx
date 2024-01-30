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
      <h1 className="titre">Bienvenu</h1>
      <p>Un terrain optimal associé à une culture exceptionnelle.</p>
    </div>
  );
};

export default StartPage;
