/*
File name : contact.ts
Student’s Name : Irin Nahar
StudentID: 301173198
Date: 16/06/2021
course : COMP 229
lab: Assignment 2 
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    name: String,
    email: String,
    phone: String,
    message: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;