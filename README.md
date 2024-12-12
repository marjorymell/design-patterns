# Design Patterns e Refatoração

## Descrição do Projeto

Este projeto tem como objetivo implementar três padrões de projeto, abrangendo as três categorias principais: **criacional**, **estrutural** e **comportamental**. Além disso, três refatorações foram realizadas seguindo os princípios do **SOLID**. O projeto é baseado no [repositório template](https://github.com/watinha/es46a-2023-2/tree/strategy/01-design-patterns-template-strategy).

## Padrões de Projeto Utilizados

### **1. Padrão Command**

- **Definição**: Permite encapsular uma solicitação como um objeto, promovendo a parametrização de objetos com diferentes solicitações e o enfileiramento ou registro de operações.
- **Como foi implementado**:
  - A classe `Command` define uma interface base com o método `execute`, implementado pelas subclasses.
  - Os comandos concretos, como `GenerateHTMLReportCommand` e `GenerateTXTReportCommand`, encapsulam a lógica específica para gerar relatórios em diferentes formatos (HTML e TXT).
  - O `CommandInvoker` gerencia a fila de comandos e executa cada comando em sequência.
- **Benefícios**:
  - Segue o Princípio da Inversão de Dependência (DIP), desacoplando quem solicita a operação de quem a executa.
  - Facilita a extensibilidade para novos comandos.

### **2. Padrão Factory Method**

- **Definição**: Define uma interface para criar objetos em uma superclasse, permitindo que subclasses decidam quais objetos criar.
- **Como foi implementado**:
  - A classe `FormaterFactory` é usada para criar instâncias de formatadores (`FormaterHTML`, `FormaterTXT`) com base no tipo solicitado.
  - A classe `ReaderFactory` cria instâncias de leitores (`JSONReader`, `CSVReader`) com base na extensão do arquivo.
- **Benefícios**:
  - Segue o Princípio da Responsabilidade Única (SRP) ao centralizar a lógica de criação de objetos.
  - Evita o acoplamento direto entre o `ReportFacade` e implementações específicas.

### **3. Padrão Facade**

- **Definição**: Fornece uma interface simplificada para um conjunto de interfaces em um subsistema, reduzindo a complexidade para o cliente.
- **Como foi implementado**:
  - A classe `ReportFacade` atua como a interface principal para gerar relatórios, escondendo a complexidade de configuração e integração com formatadores e leitores.
  - Internamente, utiliza o `ReportConfigurator` para configurar as dependências necessárias.
- **Benefícios**:
  - Simplifica a interface para os usuários finais.
  - Segue o Princípio da Responsabilidade Única (SRP) ao delegar a configuração de dependências.

## Refatorações

### **1. Princípio da Responsabilidade Única (SRP)**

- Criada a classe `ReportConfigurator` para delegar a configuração de dependências, removendo essa lógica do `ReportFacade`.
- **Impacto**:
  - Melhor modularidade.
  - Facilita a manutenção e extensibilidade.

### **2. Princípio de Substituição de Liskov (LSP)**

- Garantido que todas as subclasses de `AbstractReader` retornem uma `Promise` no método `read`, permitindo comportamento consistente.
- **Impacto**:
  - Melhor consistência entre implementações.
  - Facilita a adição de novos tipos de leitores.

### **3. Princípio da Inversão de Dependência (DIP)**

- O `CommandInvoker` trabalha exclusivamente com a classe base `Command`, sem depender diretamente de comandos concretos.
- **Impacto**:

  - Aumenta a robustez do sistema.
  - Reforça o acoplamento com a abstração.

  ## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/marjorymell/design-patterns
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd design-patterns
   ```

3. Execute um dos dois scripts:

   ```bash
   node index.js
   ```

   ```bash
   npm start
   ```

4. O programa irá solicitar que você:

   - Escolha o arquivo de entrada (é possível selecionar entre `cidades-1.json`, `cidades-2.json` ou `cidades.csv`).
   - Escolha o formato de saída do relatório (`html` ou `txt`).

5. Após concluir as escolhas, o relatório será gerado e exibido no terminal.
