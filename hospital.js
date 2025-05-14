//Permite capturar as entradas do usuário no terminal
const readline = require('readline');

//Função que faz o programa esperar um pouco antes de continuar
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//Pilha de prontuários (LIFO)

// Classe Pilha
class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(item) {
    this.itens.push(item);
  }

  desempilhar() {
    if (this.estaVazia()) {
      console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`❌ Elemento '${removido}' desempilhado.`);
    return removido;
  }

  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  limpar() {
    this.itens = [];
    console.log('🧹 Pilha esvaziada.');
  }

  imprimir() {
    console.log('📦 Pilha de prontuários atual:', this.itens.slice().reverse().join(' <- topo'));
  }
}

//Fila de atendimento (FIFO):

// Classe Fila (FIFO)
class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um item ao final da fila
  enfileirar(item) {
    this.itens.push(item);
    console.log(`📥 '${item}' entrou na fila.`);
  }

  // Remove o item do início da fila
  desenfileirar() {
    if (this.estaVazia()) {
      console.log('⚠️ A fila está vazia. Nenhum item para remover.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`🚪 '${removido}' saiu da fila.`);
    return removido;
  }

  // Mostra o primeiro da fila
  frente() {
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Tamanho da fila
  tamanho() {
    return this.itens.length;
  }

  // Limpa a fila
  limpar() {
    this.itens = [];
    console.log('🧹 Fila esvaziada.');
  }

  // Imprime a fila atual
  imprimir() {
    console.log('🚶‍♂️  Fila atual de pacientes:', this.itens.join(' -> ') || 'vazia');
  }
}

// ========== Fluxo hospitalar ==========

// Criando a fila de pacientes
const filaPacientes = new Fila();

// Criando a pilha de pacientes
const pilhaPacientes = new Pilha();

// Interface para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

console.log("👩‍⚕️ Cadastro de pacientes - Digite o nome de 5 pacientes: ");

function cadastrarPaciente() {
  if (contador < 5) {
    rl.question(`Nome do paciente ${contador + 1}: `, (nome) => {
      filaPacientes.enfileirar(nome);
      contador++;
      cadastrarPaciente(); // chama novamente até completar os 5
    });
  } else {
    // Quando terminar de cadastrar os 5
    console.log("\n📝 Fila de pacientes:");
    filaPacientes.imprimir();

    console.log(`\n👨‍⚕️ O próximo paciente a ser atendido será: ${filaPacientes.frente()}`);
    
    //Simulando o atendimento de um paciente
    console.log(`O paciente ${filaPacientes.frente()} foi atendido.`)
    //Adicionando o nome do paciente a lista de prontuários
    pilhaPacientes.empilhar(filaPacientes.frente())
    console.log(`✔️ '${filaPacientes.frente()}' adicionado à pilha de prontuários`);
    filaPacientes.desenfileirar(filaPacientes.frente())
    
    //Simulando o atendimento de um paciente
    console.log(`O paciente ${filaPacientes.frente()} foi atendido.`)
    //Adicionando o nome do paciente a lista de prontuários
    pilhaPacientes.empilhar(filaPacientes.frente())
    console.log(`✔️ '${filaPacientes.frente()}' adicionado à pilha de prontuários`);
    filaPacientes.desenfileirar(filaPacientes.frente())
    filaPacientes.imprimir()
    pilhaPacientes.imprimir()

    // Finaliza o input
    rl.close();
  }
}

// Inicia o processo
cadastrarPaciente();

