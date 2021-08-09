import { Specification } from "../models/Specification";

interface ISpecificationCreationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ISpecificationCreationDTO): void;

  listAll(): Specification[];

  findByName(name: string): Specification;
}

export { ISpecificationCreationDTO, ISpecificationRepository };
