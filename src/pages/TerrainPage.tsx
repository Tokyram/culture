import React, { useState, useEffect } from 'react';
import TerrainList from './TerrainList';
import BurgerMenu from './BurgerMenu';
import '../../public/TerrainPage.css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

interface RouteParams {
  userId: string;
}
const TerrainPage = () => {
  const history = useHistory();
  console.log("param",useParams());

  const { userId } = useParams<RouteParams>(); // Utilisez useParams pour récupérer les paramètres d'URL
  const [terrains, setTerrains] = useState([]); // État pour stocker les données des terrains
  useEffect(() => {
    // Fonction pour récupérer la liste des terrains de l'utilisateur depuis l'API
    const fetchUserTerrains = async () => {
      try {
        const response = await axios.get(`https://cropfarmback-production.up.railway.app/terrains/proprietaire/valid/${userId}`);
        console.log(response.data);
        
       
          setTerrains(response.data);
        
         // Met à jour l'état avec les données des terrains récupérées depuis l'API
      } catch (error) {
        console.error("Erreur lors de la récupération de la liste des terrains de l'utilisateur :", error);
        // Gérer les erreurs de récupération des données des terrains ici
      }
    };

    fetchUserTerrains(); // Appel de la fonction pour récupérer les données des terrains lors du chargement du composant
  }, [userId]); // Utilisez userId comme dépendance pour effectuer la requête chaque fois que l'userId change

  const redirectToPage2 = () => {
    history.push(`/Home/${userId}`);
  };
  

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
          <TerrainList terrains={terrains} /> {/* Passez les données des terrains au composant TerrainList */}
        </div>
      </div>
    </div>
  );
};

export default TerrainPage;
