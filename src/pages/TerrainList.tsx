import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../../public/TerrainList.css';
// interface RouteParams {
//   userId: string;
//   idTerrain: string;
// }

const TerrainComponent: React.FC<{ terrains: any[] | undefined }> = ({ terrains }) => {
  const history = useHistory();
  console.log("param",useParams());
  // const { idTerrain } = useParams<RouteParams>();
  const redirectToTerrainDetails = (idTerrain: string) => {
    history.push(`/TerrainDetails/${idTerrain}`);
  };

  return (
    <div className="terrain-container">
      {Array.isArray(terrains) && terrains.map((terrain, index) => (
        <div key={index} className="terrain-item" onClick={() => redirectToTerrainDetails(terrain.id_terrain)}>
          <div className="terrain-info">
          <img className='sarykely' src="../../public/assets/img/logo192.png" alt="" />

            <h3>N°{terrain.id_terrain}</h3>
            <div className="info">
            <p><b>Longueur</b> <br />{terrain.longueur}</p>
            <p><b>Largeur </b> <br />{terrain.largeur}</p>
            </div>
            
            <button><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg></span></button>

          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default TerrainComponent;
