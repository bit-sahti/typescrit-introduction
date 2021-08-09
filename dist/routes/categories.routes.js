"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
var express_1 = require("express");
var categoriesRepository_1 = require("../repositories/categoriesRepository");
var categoriesRouter = express_1.Router();
exports.categoriesRouter = categoriesRouter;
categoriesRouter.post("/", function (req, res) {
    var _a = req.body, name = _a.name, description = _a.description;
    var existingCategory = categoriesRepository_1.categoriesRepository.findByName(name);
    if (existingCategory) {
        return res.status(400).json({ error: "Category already exists." });
    }
    categoriesRepository_1.categoriesRepository.create({ name: name, description: description });
    return res.status(201).send();
});
categoriesRouter.get("/", function (req, res) {
    var categories = categoriesRepository_1.categoriesRepository.listAll();
    return res.json(categories);
});
