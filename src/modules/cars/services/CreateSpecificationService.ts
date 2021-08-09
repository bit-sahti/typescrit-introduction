import {
  ISpecificationCreationDTO,
  ISpecificationRepository,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: ISpecificationCreationDTO): void {
    const existingSpecification =
      this.specificationsRepository.findByName(name);

    if (existingSpecification) {
      throw new Error("Specification category already exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
