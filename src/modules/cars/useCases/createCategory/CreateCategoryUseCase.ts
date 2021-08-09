import {
  ICategoriesRepository,
  ICategoryCreationDTO,
} from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICategoryCreationDTO): void {
    const existingCategory = this.categoriesRepository.findByName(name);

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
