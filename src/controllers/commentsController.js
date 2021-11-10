const Comments = require('../models/commentsModel');

// Get all posts
exports.readAllComments = (req, res) => {
    Comments.find({}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({
                count : posts.length,
                comments
            });
        }
    });
}

// Create a comments
exports.createAComments = (req, res) => {
    // {
    //     title: "Mon premeir article",
    //     content: "toto"
    // }
    let newComments = new Post(req.body);

    newComments.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(post);
        }
    });
}


// Get a comments
exports.readAComments = (req, res) => {
    Comments.findById(req.params.post_id, (error, post) => {
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

// Update a comments
exports.updateAComments = (req, res) => {
    Comments.findByIdAndUpdate(req.params.post_id, req.body, {new: true}, (error, post) => {
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

// Delete a comments
exports.deleteAComments = (req, res) => {
    Comments.findByIdAndDelete(req.params.comments_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Article supprimé"});
        }
    });
}