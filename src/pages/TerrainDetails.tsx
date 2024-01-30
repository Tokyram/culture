import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../../public/TerrainDetails.css';
import BurgerMenu from './BurgerMenu';
import TerrainMap from './TerrainMap';
import ParcelleComponent from './ParcelleList';

const TerrainDetails = () => {
  const [photos, setPhotos] = useState(['demar.jpg', 'demar1.jpg', 'demar1.jpg', 'demar.jpg','demar1.jpg',]);
  const [newPhoto, setNewPhoto] = useState('');
  const [isEditMode, setIsEditMode] = useState(false); // Nouvel état pour gérer le mode de modification du paragraphe
  const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,");

  const [style, set] = useSpring(() => ({
    transform: 'translateX(0%)',
  }));

  const handleAddPhoto = () => {
    if (newPhoto.trim() !== '') {
      setPhotos([...photos, newPhoto]);
      setNewPhoto('');
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  const handleEditDescription = () => {
    setIsEditMode(!isEditMode);
  };

  const handleValidateEdit = () => {
    // Sauvegarder les modifications (par exemple, mettre à jour la valeur de `description`)
    // Vous pouvez également implémenter une logique de sauvegarde côté serveur si nécessaire.
    setIsEditMode(false); // Sortir du mode édition après validation
  };

  const terrains = [
    {
      id: 1,
      name: 'Parcelle 1',
      backgroundImage: 'demar.jpg',
    },
    {
      id: 2,
      name: 'Parcelle 2',
      backgroundImage: 'demar1.jpg',
    },
    {
      id: 3,
      name: 'Parcelle 3',
      backgroundImage: 'demar.jpg',
    },
    {
      id: 4,
      name: 'Parcelle 4',
      backgroundImage: 'demar1.jpg',
    },
    // ... autres terrains
  ];

  return (
    <div className="pagedetail">
      <BurgerMenu />
      <div className="pageDetails">
        <div className="photo-form">
          <div className="photo-container">
            <animated.div style={style} className="photo-list">
              {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img src={photo} alt={`Photo ${index + 1}`} />
                  <button onClick={() => handleRemovePhoto(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                  </button>
                </div>
              ))}
            </animated.div>
          </div>

          <div className="controls">
            <br />
            <input
              type="file"
              placeholder="Nouvelle photo URL"
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
            />
            <button onClick={handleAddPhoto}>Ajouter</button>
          </div>

            <div className="description">
                <div className="titre">

                    <div className="titremodif">
                        <h2>Nom du terrain</h2>
                            <button onClick={handleEditDescription}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>
                    </div>

                    <div className="textmodif">
                        {isEditMode ? (
                            <>
                                <textarea
                                    rows={5}
                                    cols={40}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <br />
                                <button className='descr' onClick={handleValidateEdit}>Valider</button>
                            </>
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>

                    <div className="taille">
                        <h2>Taille</h2>
                        <div className="dim">
                            <div className="lo">
                                <h4>Longueur</h4>
                                <p>150m</p>
                            </div>
                            <div className="la">
                                <h4>Largeur</h4>
                                <p>50m</p>

                            </div>
                        </div>
                    </div>

                    <div className="geo">
                        <h2>Longitude et Latiude</h2>
                        <div className="map">
                            <TerrainMap />
                        </div>
                    </div>

                    <div className="parcelle">
                            <div className="pa">
                                <h2>Vos Parcelles</h2>

                                <p>21 </p>
                            </div>
                      <ParcelleComponent  terrains={terrains} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TerrainDetails;
