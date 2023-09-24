---Thinking in React---

O React pode mudar a forma como você pensa sobre os designs que observa e os aplicativos que cria. Ao construir uma interface de usuário com React

- Pimeiro você a dividirá em partes chamadas componentes.
- Segundo descreva  os diferentes estados visuais de cada um dos seus componentes. 
- Terceiro você conectará seus componentes para que os dados fluam através deles.

---Comece com a maquete---

Imagine que você já possui uma API JSON e um mockup de um designer.

A API JSON retorna alguns dados semelhantes a estes:
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

A maquete fica assim:
URL DA MAQUETE

IMPORTANTE: Para implementar uma UI no React, você normalmente seguirá as mesmas cinco etapas.

---Etapa 1: dividir a IU em uma hierarquia de componentes---

Comece desenhando caixas ao redor de cada componente e subcomponente da maquete e nomeando-os.

- Programação — use as mesmas técnicas para decidir se você deve criar uma nova função ou objeto. Uma dessas técnicas é o (SOLID - princípio da responsabilidade única ) ou seja, idealmente, um componente deve fazer apenas uma coisa. Se acabar crescendo, deverá ser decomposto em subcomponentes menores.
- CSS — considere para que você criaria seletores de classe. (No entanto, os componentes são um pouco menos granulares.)
- Design — considere como você organizaria as camadas do design.

IMPORTANTE: Resumo sobre SOLID
Princípio da Responsabilidade Única — Uma classe deve ter um, e somente um, motivo para mudar.

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo — God Class*. Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema — principalmente se não existirem testes automatizados!

*God Class — Classe Deus: Na programação orientada a objetos, é uma classe que sabe demais ou faz demais.

Se o seu JSON estiver bem estruturado, muitas vezes você descobrirá que ele mapeia naturalmente para a estrutura do componente da sua UI. Isso ocorre porque os modelos de UI e de dados geralmente têm a mesma arquitetura de informações, ou seja, o mesmo formato. Separe sua UI em componentes, onde cada componente corresponde a uma parte do seu modelo de dados.

Existem cinco componentes nesta tela:
URL DA MAQUETE-COMPONENTS

1 - FilterableProductTable(cinza) contém o aplicativo inteiro.
2 - SearchBar(azul) recebe a entrada do usuário.
3 - ProductTable(lavanda) exibe e filtra a lista de acordo com a entrada do usuário.
4 - ProductCategoryRow(verde) exibe um título para cada categoria.
5 - ProductRow (amarelo) exibe uma linha para cada produto.

Se você olhar ProductTable(lavanda), verá que o cabeçalho da tabela (contendo os rótulos “Name” e “Price”) não é um componente próprio. Isso é uma questão de preferência e você pode escolher de qualquer maneira. Neste exemplo, faz parte ProductTable porque aparece dentro da ProductTable lista 's. Entretanto, se esse cabeçalho se tornar complexo (por exemplo, se você adicionar "classificação"), poderá movê-lo para seu próprio ProductTableHeader componente.

Agora que você identificou os componentes na maquete, organize-os em uma hierarquia. Os componentes que aparecem dentro de outro componente no modelo devem aparecer como filhos na hierarquia:

* FilterableProductTable
    * SearchBar
    * ProductTable
        * ProductCategoryRow
        * ProductRow

---Etapa 2: construir uma versão estática no React---

Agora que você tem sua hierarquia de componentes, é hora de implementar seu aplicativo. A abordagem mais direta é construir uma versão que renderize a UI a partir do seu modelo de dados sem adicionar qualquer interatividade... ainda! Muitas vezes é mais fácil construir primeiro a versão estática e adicionar interatividade depois. Construir uma versão estática requer muita digitação e nenhuma reflexão, mas adicionar interatividade requer muita reflexão e pouca digitação.

Para criar uma versão estática do seu aplicativo que renderize seu modelo de dados, você desejará criar componentes que reutilizem outros componentes e passem dados usando Props. Props são uma forma de passar dados de pai para filho. (Se você estiver familiarizado com o conceito de state , não use state para construir esta versão estática. State é reservado apenas para interatividade, ou seja, dados que mudam com o tempo. Como esta é uma versão estática do aplicativo , você não precisa disso.)
        
Você pode construir “de cima para baixo”, começando com a construção dos componentes mais acima na hierarquia (como FilterableProductTable) ou “de baixo para cima”, trabalhando a partir dos componentes mais abaixo (como ProductRow). Em exemplos mais simples, geralmente é mais fácil ir de cima para baixo e, em projetos maiores, é mais fácil ir de baixo para cima.

