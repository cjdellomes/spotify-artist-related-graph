const express = require('express');
const spotify = require('../spotifyController');

let router = express.Router();

router.param('artistID', async function (req, res, next, artistID) {
    const token = await spotify.getToken();
    const relatedArtists = await spotify.getRelatedArtists(artistID, token);

    if (relatedArtists === null || relatedArtists === undefined) {
        req.relatedArtists = null;
        return next();
    }

    req.relatedArtists = relatedArtists;
    return next();
  });
  
  router.get('/:artistID', function (req, res, next) {
    if (req.relatedArtists === undefined || req.relatedArtists === null) {
      res.status(400);
      res.send('Invalid ID');
      return;
    }
    
    res.send({
      'related_artists': req.relatedArtists
    });
  });
  
  module.exports = router;