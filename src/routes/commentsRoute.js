const commentsController = require('../controllers/commentsController');

module.exports = (server) => {
    server.route("/comments")
    .get(commentsController.readAllComments) // Get all comments
    .post(commentsController.createAComments); // Create a comments
    
    server.route("/comments/:comments_id") // req.params.comments_id
    .get(commentsController.readAComments) // Get one comments
    .put(commentsController.updateAComments) // Update one comments
    .delete(commentsController.deleteAComments); // Delete one comments
}