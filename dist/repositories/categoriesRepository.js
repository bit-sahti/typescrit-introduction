"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRepository = void 0;
var Category_1 = require("../models/Category");
// like the controllers, it controls access to DB
var CategoriesRepository = /** @class */ (function () {
    function CategoriesRepository() {
        this.categories = [];
    }
    CategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var newCategory = new Category_1.Category();
        Object.assign(newCategory, {
            name: 1,
            description: description,
            created_at: new Date(),
        });
        console.log(newCategory);
        this.categories.push(newCategory);
    };
    CategoriesRepository.prototype.listAll = function () {
        return this.categories;
    };
    CategoriesRepository.prototype.findByName = function (name) {
        var foundCategory = this.categories.find(function (category) { return category.name === name; });
        return foundCategory;
    };
    return CategoriesRepository;
}());
var categoriesRepository = new CategoriesRepository();
exports.categoriesRepository = categoriesRepository;
