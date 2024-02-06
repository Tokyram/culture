import React, { useState } from 'react';
import '../../public/Home.css';
import BurgerMenu from './BurgerMenu';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Importez axios pour effectuer des appels API

const Home = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    coordone: '',
    longueur: '',
    largeur: '',
    description: '',
  });

  let userId = localStorage.getItem('userId'); // Récupérer l'ID de l'utilisateur connecté depuis le localStorage

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
    
    try {
      // Appel de l'API pour créer un nouveau terrain
      const response = await axios.post("https://cropfarmback-production.up.railway.app/terrains", {
        id_proprietaire: userId, // Utilisez l'ID de l'utilisateur connecté
        desc_terrain: formData.description,
        coord_location: formData.coordone,
        longueur: formData.longueur,
        largeur: formData.largeur,
        corbeille: 0
      });

      // Gérer la réponse de l'API
      console.log("Réponse de l'API :", response.data);
      
      // Rediriger vers la page appropriée après la création du terrain
      history.push('/Home');
    } catch (error) {
      // Gérer les erreurs lors de la création du terrain
      console.error("Erreur lors de la création du terrain :", error);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
    }
  };

  const redirectToPage2 = () => {
    history.push(`/TerrainPage/${userId}`);
  };
  

  return (
    <div className="page">
      <BurgerMenu />
      <div className="page-container">
        <div className="titre">
          <h1>Nouveau terrain</h1>
        </div>

        <form onSubmit={handleSubmit} className='formulaire'>
          <label>
            Coordonnée Localisation :<br />
            <input type="text" placeholder='votre coordonnée' name="coordone" value={formData.coordone} onChange={handleChange} />
          </label>

          <br />
          <label>
            Longueur :<br />
            <input type="number" placeholder='longueur du terrain' name="longueur" value={formData.longueur} onChange={handleChange} />
          </label>
          <br />
          <label>
            Largeur :<br />
            <input type="number" placeholder='largeur du terrain' name="largeur" value={formData.largeur} onChange={handleChange} />
          </label>
          <br />
          <label>
            Description du terrain :<br />
            <textarea placeholder='description du terrain' name="description" value={formData.description} onChange={handleChange} />
          </label>
          <br />

          <button type="submit" className='btn1'>Valider</button>
        </form>
        <button type="button" className='btn2' onClick={redirectToPage2}>Voir Mes terrains</button>
      </div>
    </div>
  );
};

export default Home;
