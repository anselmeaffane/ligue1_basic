function sendMatchResults(omGoals, psgGoals) {
  const url = 'http://localhost:1743'; // Remplacez URL_DU_BACKEND par l'URL réelle de votre backend
  const data = {
    omGoals: omGoals,
    psgGoals: psgGoals
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log('Résultats du match envoyés avec succès.');
      } else {
        throw new Error('Erreur lors de l\'envoi des résultats du match.');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// Variable globale pour stocker les résultats des matchs
const matchResults = [];

// Route POST pour enregistrer les résultats d'un match
app.post('/match', (req, res) => {
  const { omGoals, psgGoals } = req.body;
  const matchResult = {
    omGoals: omGoals,
    psgGoals: psgGoals
  };
  matchResults.push(matchResult);
  res.sendStatus(200);
});
