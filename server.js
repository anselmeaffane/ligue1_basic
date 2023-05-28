const express = require('express');
const app = express();
const port = 1743;

app.get('/hello/:prenom', (req, res) => {
  const prenom = req.params.prenom;
  const message = `Hello ${prenom}`;
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Serveur web démarré sur le port ${port}`);
});


app.use(express.json());

// Route GET pour récupérer le nombre de victoires de l'OM ou du PSG
app.get('/victoire/:club', (req, res) => {
  const club = req.params.club.toLowerCase();
  const victoires = matchResults.filter(result => {
    if (club === 'om') {
      return result.omGoals > result.psgGoals;
    } else if (club === 'psg') {
      return result.psgGoals > result.omGoals;
    }
  }).length;
  res.json({ victoires });
});
