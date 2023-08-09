/*
    Database Setup
*/

require('dotenv').config();
const mongoose = require("mongoose");

const db = {};

// Establish new connection with MongoDB Instance

db.connect = async() => {

    return new Promise(async(resolve, reject) => {

        try {

            await mongoose.connect(process.env.MONGODB_SRV);
            resolve();


        } catch (e) {

            console.error(e);
            reject();
        }

    });
}


// Schemas & Models

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cooking_time: {
        type: Number,
        required: true
    },
    diet: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: false
    },
    veggies: {
        type: Array,
        required: false
    },
    meat: {
        type: Array,
        required: false
    },
    dairy: {
        type: Array,
        required: false
    },
    other: {
        type: Array,
        required: false
    },
    steps: {
        type: Array,
        required: true
    },
    allergies: {
        type: Array,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    health_score: {
        type: Number,
        required: true
    },
    health_reason: {
        type: String,
        required: true
    }
});

db.Recipe = mongoose.model("Recipe", recipeSchema);

const pendingSubmissionSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: false,
        unique: true
    },
    img_url: {
        type: String,
        required: true
    },
    is_published: {
        type: Boolean,
        required: true
    }
});

db.PendingSubmission = mongoose.model("PendingSubmission", pendingSubmissionSchema);

// Export

module.exports = db;