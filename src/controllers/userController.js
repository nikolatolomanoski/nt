const User = require('../models/userModel');

// Get all user
exports.readAllUser = (req, res) => {
    User.find({}, (error, users) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({
                count : users.length,
                users
            });
        }
    });
}

// Create a user
exports.createAUser = (req, res) => {
    // {
    //     title: "User",
    //     content: "toto"
    // }
    let newUser = new User(req.body);

    newUser.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json();
        }
    });
}




//Get a user
 exports.readAUser = (req, res) => {
     User.findById(req.params.post_id, (error, post) => {
         if (error) {
             res.status(500);
             console.log(error);
             res.end({ message: "Erreur serveur." });
         }
         else {
             res.status(200);
             res.json(post);
         }
     });
 }

 // Update a user
 exports.updateAUser = (req, res) => {
     User.findByIdAndUpdate(req.params.post_id, req.body, {new: true}, (error, post) => {
         if (error) {
             res.status(500);
             console.log(error);
             res.end({ message: "Erreur serveur." });
         }
         else {
             res.status(200);
             res.json(post);
         }
     });
 }

 // Delete a user
 exports.deleteAUser = (req, res) => {
     Comments.findByIdAndDelete(req.params.post_id, (error) => {
         if (error) {
             res.status(500);
             console.log(error);
             res.end({ message: "Erreur serveur." });
         }
         else {
             res.status(200);
             res.json({message: "Utilisateur supprimé"});
         }
     });
 }




















