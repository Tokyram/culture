// TerrainPage.js
import React from 'react';
import TerrainList from './TerrainList';
import BurgerMenu from './BurgerMenu';
import '../../public/TerrainPage.css';
import { useHistory } from 'react-router';
const TerrainPage = () => {

  const history = useHistory();
  const redirectToPage2 = () => {
      history.push('/Home');
    };

  const terrains = [
    {
      id: 1,
      name: 'Terrain 1',
      backgroundImage: 'demar.jpg',
    },
    {
      id: 2,
      name: 'Terrain 2',
      backgroundImage: 'demar1.jpg',
    },
    {
      id: 3,
      name: 'Terrain 1',
      backgroundImage: 'demar.jpg',
    },
    {
      id: 4,
      name: 'Terrain 2',
      backgroundImage: 'demar1.jpg',
    },
    // ... autres terrains
  ];

  return (
    <div className="page">
      <BurgerMenu />
      <div className="terrainListe">
        <div className="titre">
          <h1>Liste des <br />Terrains</h1>
          <button onClick={redirectToPage2}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg></span></button>
        </div>
        <div className="list">
          <TerrainList terrains={terrains} />
        </div>
      </div>
      
    </div>
  );
};

export default TerrainPage;
