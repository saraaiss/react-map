import React from 'react';
import './Voiture.css'; 

function Voiture({ marque, model, couleur, annee }) {
    return (
        <div className="voiture-card">
            <h2>{marque} {model}</h2>
            <p><strong>Couleur :</strong> {couleur}</p>
            <p><strong>Année :</strong> {annee}</p>
        </div>
    );
}

export default Voiture;