import { v4 as uuidv4 } from "uuid";

// embora ela tenha exatamente as mesmas propriedades que Categoria, isso pode mudar um dia, então não é recomendado unificar em um macrotipo
class Specification {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Specification };
