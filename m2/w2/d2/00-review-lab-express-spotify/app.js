require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

// require spotify-web-api-node package here:
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Our routes go here:
// GET /  - Renders the search form
app.get("/", (req, res) => {
  res.render("index");
});

// GET /artist-search - Receives the request from the GET form
app.get("/artist-search", (req, res) => {
  // Use `req.query` to access data sent from the GET forms  -> values that come after ? -> ?key=value&key2=value
  const artistName = req.query.artistName;

  spotifyApi
    .searchArtists(artistName)
    .then((data) => {
      const artistsArray = data.body.artists.items;
      console.log("artistsArray[0].images ->", artistsArray[0].images);

      res.render("artist-search-results", { artistsList: artistsArray });
    })
    .catch((err) => console.log(err));
});

// GET
app.get("/albums/:artistId", (req, res, next) => {
  // To capture value from dynamic endpoint we use req.params
  console.log(`req.params`, req.params);
  const artistId = req.params.artistId;

  spotifyApi
    .getArtistAlbums(artistId)
    .then((data) => {
      const albumsArray = data.body.items;
      console.log(`albumsArray`, albumsArray);
      res.render("albums", { albumsArray });
    })
    .catch((err) => console.log(err));
});

// GET /tracks/123abc
app.get("/tracks/:albumId", (req, res) => {
  const albumId = req.params.albumId;

  spotifyApi
    .getAlbumTracks(albumId)
    .then((data) => {
      const tracksArray = data.body.items;

      console.log(`tracksArray[4].artists`, tracksArray[4].artists);

      res.render("tracks", { tracksArray: tracksArray });
      // res.render("tracks", { tracksArray });
    })
    .catch((err) => console.log(err));
});

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
