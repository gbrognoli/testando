class Pessoa {
    constructor(nome, idade, sexo) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
    }
    
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`);
    }
  }
  
  let pessoa = new Pessoa("João", 30, "Masculino");
  pessoa.apresentar(); // Output: "Olá, meu nome é João, tenho 30 anos e sou do sexo Masculino."
  