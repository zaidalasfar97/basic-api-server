'use strict';

const Food = require('./../models/food');
const food = new Food();

function createHandler(req, res) {
    let foodObj = req.body;
    res.status(201).json(food.create(foodObj));
}

function getAllFoodHandler(req, res) {
    res.json(food.read());
}

function getOneFoodHandler(req, res) {
    let id = req.params.id;
    res.json(food.read(id));
}

function updateFoodHandler(req, res) {
    let foodObj = req.body;
    let id = req.params.id;
    res.json(food.update(id, foodObj));
}

function deleteFoodHandler(req, res) {
    let id = req.params.id;
    res.json(food.delete(id));
}

module.exports = {
    createHandler,
    getAllFoodHandler,
    getOneFoodHandler,
    updateFoodHandler,
    deleteFoodHandler,
};