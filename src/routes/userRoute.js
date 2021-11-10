const userController = require('../controllers/userController');

module.exports = (server) => {
    server.route("/user")
    .get(userController.readAllUser) // Get all user
    .post(userController.createAUser); // Create a user
    
    server.route("/users/:user_id") // req.params.user_id
    // .get(userController.readAUser) // Get one user
    // .put(userController.updateAUser) // Update one user
    // .delete(userController.deleteAUser); // Delete one user
}