import { Endereco } from "./Endereco";
import { Funcionario } from "./Funcionario";

export class Empresa {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  endereco: Endereco;
  funcionarios: Funcionario[];

  constructor(funcionarios: Funcionario[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string) {
    this.funcionarios = funcionarios;
    this.endereco = endereco;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
  }
}
