import { Specification } from "../models/Specification";
import {
  ISpecificationCreationDTO,
  ISpecificationRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationCreationDTO): void {
    const newSpecification = new Specification();

    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
    } as Partial<Specification>);

    this.specifications.push(newSpecification);
  }

  listAll(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepository };
