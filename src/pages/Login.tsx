import React, { useState } from 'react';
import '../../public/Login.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Importez axios pour effectuer des appels API

const Login: React.FC<{ objname: string }> = ({ objname }) => {
  const history = useHistory();
  const [email, setEmail] = useState(""); // état pour l'e-mail
  const [password, setPassword] = useState(""); // état pour le mot de passe

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Met à jour l'état de l'e-mail lorsque l'utilisateur tape dans le champ d'entrée
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // Met à jour l'état du mot de passe lorsque l'utilisateur tape dans le champ d'entrée
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
    // Vous pouvez maintenant utiliser 'email' et 'password' pour effectuer des opérations, telles que des appels API avec Axios
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Exemple d'appel API avec Axios
    try {
      // Appel de l'API pour se connecter avec l'email et le mot de passe
      const response = await axios.get("https://cropfarmback-production.up.railway.app/proprietaires/login", {
        params: {
          mail: email,
          mdp: password,
        },
      });
  
      // Gérer la réponse de l'API
      console.log("Réponse de l'API :", response.data);
      const userId = response.data.id;
      const username = response.data.nom;
      const usermail = response.data.mail;

      // Stocker des données dans le localStorage
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      localStorage.setItem('usermail', usermail);

      history.push('/TerrainDetails');
      // Rediriger vers le tableau de bord ou effectuer d'autres actions en fonction de la réponse
    } catch (error) {
      // Gérer les erreurs d'authentification
      alert("Erreur lors de la connexion veuillez réessayer ^^");
      console.log(error);
    }
  };

  const redirectToPage2 = () => {
    history.push('/Homepage');
  };
  

  return (
    <div className='login-page'>
      <div className="titre">
        <h2>Login</h2>
      </div>
      <div className="title" >Connectez vous à votre compte {objname}</div>

      <form onSubmit={handleSubmit} className='formulaire'>
        <div className="log">
          <label>
            Email :<br />
            <input type="email" placeholder='votre email' name="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Mot de passe :<br />
            <input type="password" placeholder='votre mot de passe' name="motDePasse" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <br />
        <button type="submit" className='btn1'>Se connecter</button>
      </form>
      <button type="button" className='btn2' onClick={redirectToPage2}>Retour</button>
    </div>
  );
};

export default Login;
