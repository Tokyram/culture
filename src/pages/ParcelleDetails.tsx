import React, { useState, useEffect } from 'react';
import '../../public/ParcelleDetails.css';
import { useHistory, useParams } from 'react-router-dom';
import ParcelleCategorie from './ParcelleCategorie';
import BurgerMenu from './BurgerMenu';
import axios from 'axios'; // Importez axios ou une autre bibliothèque de requêtes HTTP

function ParcelleDetails() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [parcelleDetails, setParcelleDetails] = useState<any>(null); // État pour stocker les détails de la parcelle
  const { idParcelle } = useParams<{ idParcelle: string }>(); // Récupérez l'ID de la parcelle dans les paramètres de l'URL
  const history = useHistory();

  useEffect(() => {
    // Effectuez la requête pour récupérer les détails de la parcelle
    axios.get(`https://cropfarmback-production.up.railway.app/parcelles/${idParcelle}`)
      .then(response => {
        // Mettez à jour l'état avec les détails de la parcelle récupérés depuis l'API
        console.log(response.data);
        setParcelleDetails(response.data);
        // Mettez à jour la description si elle est disponible dans les données récupérées
        // if (response.data && response.data.description) {
        //   setDescription(response.data.description);
        // }
      })
      .catch(error => console.error('Error fetching parcelle details:', error));
  }, [idParcelle]);

  const handleEditDescription = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="parcelle-details">
      <BurgerMenu />
      <ParcelleCategorie />

      <div className="taille-parcelle">
        <h2>Taille</h2>
        <div className="dim-parcelle">
          <div className="lo">
            <h3>Longueur</h3>
            <p>{parcelleDetails?.longueur || 'Chargement en cours...'} m</p>
          </div>
          <div className="la">
            <h3>Largeur</h3>
            <p>{parcelleDetails?.largeur || 'Chargement en cours...'} m</p>
          </div>
        </div>
      </div>

      <div className="taille-parcelle">
        <h2>Rendement</h2>
        <div className="dim-parcelle">
          <div className="lo">
            <h3>Rendement</h3>
            <p>{parcelleDetails?.rendement || 'Chargement en cours...'} </p>
          </div>
          {/* <div className="la">
            <h3>Largeur</h3>
            <p>{parcelleDetails && parcelleDetails.largeur} m</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ParcelleDetails;
