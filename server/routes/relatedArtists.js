const express = require('express');
const spotify = require('../spotifyController');

const router = express.Router();

router.param('artistID', async (req, res, next, artistID) => {
  const token = await spotify.getToken();
  const relatedArtists = await spotify.getRelatedArtists(artistID, token);

  if (relatedArtists == null) {
    req.relatedArtists = null;
    return next();
  }

  req.relatedArtists = relatedArtists;
  return next();
});

router.get('/:artistID', (req, res) => {
  if (req.relatedArtists == null) {
    res.status(400);
    res.send('Invalid ID');
    return;
  }

  res.send({
    related_artists: req.relatedArtists,
  });
});

module.exports = router;
