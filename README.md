# Atividade Pilhas e Filas em um Hospital 
## Hospital Simulator: Fila e Pilha
Este projeto tem como objetivo simular o atendimento hospitalar, organizando a fila de pacientes para o atendimento (FIFO) e gerenciando os prontuários empilhados ao final do dia (LIFO).

A atividade é dividida em dois fluxos principais:

- Fila de atendimento hospitalar: Simula a chegada e atendimento de pacientes em uma fila, seguindo a regra FIFO (First-In-First-Out).

- Pilha de prontuários: Após o atendimento, os prontuários dos pacientes são empilhados em ordem reversa para arquivamento, utilizando a regra LIFO (Last-In-First-Out).

## Estrutura do Projeto
### Classes Implementadas:
### Pilha (LIFO):

- Empilha os prontuários dos pacientes após o atendimento.

- Permite buscar um paciente específico dentro da pilha.

### Fila (FIFO):

- Organiza a chegada dos pacientes, atendendo-os na ordem em que chegam.

- Permite verificar o próximo paciente a ser atendido.

### Fluxos Implementados
- Adição de pacientes à fila: 5 pacientes fictícios são adicionados à fila de atendimento.

- Atendimento de pacientes: O próximo paciente é atendido (removido da fila) e seu nome é adicionado à pilha de prontuários.

## Como executar o arquivo hospital.js
Para rodar o arquivo no seu terminal, certifique-se de ter o Node.js instalado na sua máquina. No terminal, navegue até o diretório onde o arquivo hospital.js está localizado e execute o comando:

`
        node hospital.js
`

## Fluxo da Simulação
O sistema irá solicitar que você cadastre 5 pacientes fictícios. Você pode digitar o nome de cada paciente quando solicitado.

Após o cadastro, o sistema irá simular o atendimento dos pacientes e adicionar os prontuários à pilha.

O sistema irá mostrar a fila restante e a pilha de prontuários ao final do atendimento.

## Estrutura do Código

### Fila:

- Implementação da estrutura FIFO para a organização de pacientes.

- Métodos para adicionar pacientes (enfileirar), remover pacientes (desenfileirar), verificar a fila atual e outras operações úteis.

### Pilha:

- Implementação da estrutura LIFO para a organização dos prontuários.

- Métodos para empilhar prontuários (empilhar), desempilhar (desempilhar), e verificar o topo da pilha.

### Simulação:

Funções de simulação que gerenciam a entrada dos pacientes, o atendimento e o gerenciamento da fila e da pilha.

## Tecnologias Usadas

- Node.js: Para executar o código JavaScript no ambiente de servidor.

- JavaScript: Utilizado para a implementação das classes e simulação.

## Considerações Finais
Este projeto simula um cenário de atendimento hospitalar utilizando estruturas de dados fundamentais (Fila e Pilha). Ele foi desenvolvido para treinar o entendimento e a aplicação dessas estruturas.

Se tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou enviar um pull request.