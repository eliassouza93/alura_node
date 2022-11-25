import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://alura:111@alura.gmj8wap.mongodb.net/Node-express');

let db = mongoose.connection;

export default db;