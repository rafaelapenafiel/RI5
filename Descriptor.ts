import { Empresa } from "./Empresa";

export class Descriptor {
  descrever(empresa: Empresa): void {
    console.log("=== Dados da Empresa ===");
    console.log("Razão Social: " + empresa.razaoSocial);
    console.log("Nome Fantasia: " + empresa.nomeFantasia);
    console.log("CNPJ: " + empresa.cnpj);
    console.log(
      "Endereço: " +
        empresa.endereco.rua +
        ", " +
        empresa.endereco.numero +
        " - " +
        empresa.endereco.bairro +
        " - " +
        empresa.endereco.cidade
    );

    console.log("\n--- Funcionários ---");
    empresa.funcionarios.forEach((f) => {
      console.log("Nome: " + f.nome);
      console.log("Matrícula: " + f.matricula);
      console.log("CPF: " + f.cpf);
      console.log(
        "Endereço: " +
          f.endereco.rua +
          ", " +
          f.endereco.numero +
          " - " +
          f.endereco.bairro +
          " - " +
          f.endereco.cidade
      );
      console.log("Telefone: (" + f.telefone.ddd + ") " + f.telefone.numero);
      console.log("---------------------------");
    });
  }
}
