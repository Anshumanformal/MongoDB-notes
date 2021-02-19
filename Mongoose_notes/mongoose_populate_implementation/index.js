const {/*Post,*/User} = require('./schema');
const mongoose = require('mongoose');


function getUserWithPosts(username) {
  return User.findOne({ username: username })
    // .populate("posts")
    .exec((err, posts) => {
      console.log("Populated User " + posts);
    });
}

getUserWithPosts('ram');