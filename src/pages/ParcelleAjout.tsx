import React, { useState } from 'react';
import '../../public/Home.css';
import BurgerMenu from './BurgerMenu';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

interface RouteParams {
    userId: string;
    idTerrain: string;
}

const ParcelleAjout = () => {
    const history = useHistory();
    const { idTerrain } = useParams<RouteParams>();
    const [formData, setFormData] = useState({
        id_terrain: idTerrain,
        rendement: '',
        longueur: '',
        largeur: '',
        corbeille: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Données soumises :', formData);

        try {
            const response = await axios.post("https://cropfarmback-production.up.railway.app/parcelles", formData);
            console.log("Réponse de l'API :", response.data);
            history.push(`/TerrainDetails/${idTerrain}`); // Redirection après la création de la parcelle
        } catch (error) {
            console.error("Erreur lors de la création de la parcelle :", error);
        }
    };

    const redirectToPage2 = () => {
        history.push(`/TerrainDetails/${idTerrain}`);
    };

    return (
        <div className="page">
            <BurgerMenu />
            <div className="page-container">
                <div className="titre">
                    <h1>Nouvelle Parcelle</h1>
                </div>

                <form onSubmit={handleSubmit} className='formulaire'>
                    <br />
                    <label>
                        ID du terrain :<br />
                        <input type="number" placeholder='ID du terrain' name="id_terrain" value={formData.id_terrain} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Rendement :<br />
                        <input type="number" placeholder='Rendement' name="rendement" value={formData.rendement} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Longueur :<br />
                        <input type="number" placeholder='Longueur' name="longueur" value={formData.longueur} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Largeur :<br />
                        <input type="number" placeholder='Largeur' name="largeur" value={formData.largeur} onChange={handleChange} />
                    </label>
                    <br />
                    <button type="submit" className='btn1'>Valider</button>
                </form>
                <button type="button" className='btn2' onClick={redirectToPage2}>Retour sur mon Terrain</button>
            </div>
        </div>
    );
};

export default ParcelleAjout;
