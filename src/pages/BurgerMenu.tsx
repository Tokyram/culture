// BurgerMenu.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import '../../public/BurgerMenu.css';
import { LocationDescriptor } from 'history';
import { IonIcon } from '@ionic/react';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleLinkClick = (link: LocationDescriptor<unknown>) => {
    console.log(`Navigating to ${link}`);
    if (link === '/HomePage') {
      handleLogout();
    } else {
      history.push(link);
      toggleMenu();
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Efface toutes les données du localStorage
    history.push('/Homepage'); // Redirige vers la page de connexion
  };

  return (
    <div className={`burger-menu-container ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">Crop Farm</div>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {menuOpen && (
        <div className="menu">
          <div className="menu-item" onClick={() => handleLinkClick('/HomePage')}>
            <IonIcon icon={logOutOutline} />
            Déconnexion
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
