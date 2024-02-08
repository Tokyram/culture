// TerrainComponent.tsx
// TerrainComponent.tsx
import React, { useState } from 'react';
import '../../public/ParcelleList.css';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

const ParcelleComponent: React.FC<{ parcelles: any[] | undefined}> = ({ parcelles }) => {
  const history = useHistory();
  // const [photos, setPhotos] = useState(['demar.jpg', 'demar1.jpg', 'demar1.jpg', 'demar.jpg','demar1.jpg',]);
  const { idParcelle } = useParams<{ idParcelle: string }>();
  console.log("param",useParams());
  console.log(parcelles);

  // const handleDeleteParcelle = async (idParcelle: string) => {
  //   try {
  //     await axios.put(`https://cropfarmback-production.up.railway.app/parcelles/${idParcelle}`, {
  //       corbeille: 1
  //     });
  //     // Si la suppression réussit, vous pouvez effectuer une action supplémentaire, comme mettre à jour l'état des parcelles
  //     // par exemple en rechargeant les données ou en supprimant la parcelle du tableau parcelles si vous stockez les données localement
  //     console.log('Parcelle supprimée avec succès');
  //   } catch (error) {
  //     console.error('Erreur lors de la suppression de la parcelle:', error);
  //   }
  // };

  const redirectToPage2 = (idParcelle: string) => {
    history.push(`/ParcelleDetails/${idParcelle}`);
  };

  return (
    <div className="parcelle-container">
      { Array.isArray(parcelles) && parcelles.map((parcelle, index) => (
        <div key={index} className="parcelle-item" onClick={() => redirectToPage2(parcelle.id_parcelle)}>
          {/* <img src={parcelle.backgroundImage} alt={`parcelle ${index}`} /> */}
          <div className="parcelle-info">
            <h3>{parcelle.nom_plantes}</h3>
            {/* <button onClick={() => handleDetailsClick(terrain.id)} ><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg></span></button> */}
            <button><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg></span></button>

            
          </div>
          {/* <button onClick={() => handleDeleteParcelle(parcelle.id_parcelle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
            </button> */}
        </div>
      ))}
    </div>
  );
};

export default ParcelleComponent;

