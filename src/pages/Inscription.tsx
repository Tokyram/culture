import React, { useState } from 'react';
import '../../public/Inscription.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Importez axios pour effectuer des appels API

const Inscription : React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmationMotDePasse: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://cropfarmback-production.up.railway.app/proprietaires", {
        nom: formData.nom,
        mail: formData.email,
        mdp: formData.motDePasse,
        dtn: Date.now(), // C'est une date fictive, à remplacer par la vraie date si nécessaire
        corbeille: 0
      });
      console.log("Réponse de l'API :", response.data);
      console.log("ok");
      // Rediriger vers la page d'accueil ou effectuer d'autres actions en fonction de la réponse
      history.push('/Home');
    } catch (error) {
      // Gérer les erreurs d'inscription
      alert("Erreur lors de l'inscription, veuillez réessayer ^^");
      console.error(error);
    }
  };

  const redirectToPage2 = () => {
    history.push('/Homepage');
  };

  return (
    <div className='inscription-page'>
      <div className="titre">
        <h2>Inscription</h2>
      </div>
      <form onSubmit={handleSubmit} className='formulaire'>
        <label>
          Nom : <br />
          <input type="text" placeholder='votre nom' name="nom" value={formData.nom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Prénom :<br />
          <input type="text" placeholder='votre Prénom' name="prenom" value={formData.prenom} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email :<br />
          <input type="email" placeholder='votre email' name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mot de passe :<br />
          <input type="password" placeholder='votre mot de passe' name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirmation du mot de passe :<br />
          <input
            type="password"
            placeholder='Confirmation mot de passe'
            name="confirmationMotDePasse"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className='btn1'>S'inscrire</button>
      </form>
      <button type="button" className='btn2' onClick={redirectToPage2}>Retour</button>
    </div>
  );
};

export default Inscription;
