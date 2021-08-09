import { Category } from "../models/Category";
import {
  ICategoryCreationDTO,
  ICategoriesRepository,
} from "./ICategoriesRepository";

// DTO = Data Transfer Object, used to pass data between layers;

// like the controllers, it controls access to DB
class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICategoryCreationDTO): void {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    } as Partial<Category>);

    this.categories.push(newCategory);
  }

  listAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
