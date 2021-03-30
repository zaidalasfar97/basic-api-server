'use strict';

const Clothes = require('./../models/clothes');
const clothes = new Clothes();

function createHandler(req, res) {
    let clothesObj = req.body;
    res.status(201).json(clothes.create(clothesObj));
}

function getAllClothesHandler(req, res) {
    res.json(clothes.read());
}

function getOneClothesHandler(req, res) {
    let id = req.params.id;
    res.json(clothes.read(id));
}

function updateClothesHandler(req, res) {
    let clothesObj = req.body;
    let id = req.params.id;
    res.json(clothes.update(id, clothesObj));
}

function deleteClothesHandler(req, res) {
    let id = req.params.id;
    res.json(clothes.delete(id));
}

module.exports = {
    createHandler,
    getAllClothesHandler,
    getOneClothesHandler,
    updateClothesHandler,
    deleteClothesHandler,
};