import './App.css';
import voitures from './assets/voitures';
import Voiture from './components/Voiture';

// Syntaxe explicite (<React.Fragment>
//   Syntaxe courte (<> et </>)
//   Éviter d'ajouter des nœuds inutiles au DOM

function App() {

  const voituresElements = voitures.map(voiture => {
    return <Voiture
              key={voiture.id}
              marque={voiture.marque}
              model={voiture.model}
              couleur={voiture.couleur}
              annee={voiture.annee}
      />
  })

  return (
    <>
      <div className="app">
        <h1>Liste des voitures</h1>
        <div className="voiture-list">
          {voituresElements}
        </div>
      </div>
    </>
  )
}

export default App