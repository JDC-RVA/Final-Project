import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Saves items to cart model
  createCart: function(id, cartData) {
    return axios.post("/api/users/" + id, cartData);
  },
  getCart: function(id) {
    return axios.get("/api/users/cart/" + id);
  }
};
