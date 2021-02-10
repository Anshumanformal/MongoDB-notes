const mongoose = require("mongoose");

//Connection creation and creating a new database.

// Here, connection is established.
// If the database is already present, mongoose will
// overrite to the database, else, it will create a new database.

mongoose
  .connect(
    "mongodb://localhost:27017/mynewdatabase",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(console.log("Connection Successful"))
  .catch((err) => {
    console.log("Error :", err);
  });

// A mongoose model is a wrapper on the
// Mongoose schema.

//A mongoose model provides an interface to the
// database for creating, querying, updating
// and deleting records etc.

// Mongoose schema defines the data structure
// for the documents which are going to be added.

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//Here, Playlist is a class created from mongoose.model.
//Collection creation.
const Playlist = new mongoose.model("Playlist", PlaylistSchema); //Playlist is in PascalCase/ UpperCamelCase.

// Here, the value Playlist passed into the mongoose.model() method is converted into
// 'Playlists' by some node_modules package. Basically, it converts the argument from
// singular to plural.

//Create a document or insert.
const createDocument = async () => {
  //Using error handling for creating/inserting the document.
  try {
    const reactPlaylist = new Playlist({
      name: "Node JS",
      ctype: "Back End",
      videos: 80,
      author: "XYZ",
      active: true,
    });

    const jsPlaylist = new Playlist({
      name: "JS",
      ctype: "Front End and Back End",
      videos: 80,
      author: "XYZ",
      active: true,
    });

    const MongoDBplaylist = new Playlist({
      name: "MongoDB",
      ctype: "Back End",
      videos: 80,
      author: "XYZ",
      active: true,
    });

    // Here, reactPlaylist.save() method returns a promise.
    // const result = await reactPlaylist.save();

    //To insert multiple Playlists, we use .insertMany([reactPlaylist,jsPlaylist,MongoDBplaylist]);
//     const result = await Playlist.insertMany([
//       reactPlaylist,
//       jsPlaylist,
//       MongoDBplaylist,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

//Function call to createDocument().
// createDocument();

//Main code sample to read data from database.
//-------------------------------------------
const getDocument = async () => {
  // const result = await Playlist.find();
//   console.log(result);

  //If we want to pass queries in the find() function.
  const result = await Playlist.find({ ctype: "Back End" }).select({name:1}).limit(1);
  console.log(result);
};

//Function call to createDocument().
getDocument();

//-------------------------------------------
