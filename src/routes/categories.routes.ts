import { Router } from "express";

import {
  createCategoryController,
  categoriesRepository,
} from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();

// O Router já sabe automaticamente quais são os tipos
categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", (req, res) => {
  const categories = categoriesRepository.listAll();

  return res.json(categories);
});

export { categoriesRouter };
