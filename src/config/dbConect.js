import mongoose from "mongoose";

mongoose.connect('mongodb+srv://alura:111@alura.gmj8wap.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;