import { Category } from "../models/Category";

interface ICategoryCreationDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  listAll(): Category[];

  findByName(name: string): Category;

  create({ name, description }: ICategoryCreationDTO): void;
}

export { ICategoryCreationDTO, ICategoriesRepository };
