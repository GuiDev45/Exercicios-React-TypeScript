# Thinking in React

O React pode mudar a forma como você pensa sobre os designs que observa e os aplicativos que cria. Ao construir uma interface de usuário com React, você pode seguir um processo que envolve as seguintes etapas:

## Comece com a Maquete

Antes de começar a escrever código, é importante ter uma visão clara do que você deseja criar. Comece com uma maquete que representa a aparência e a estrutura da sua interface de usuário. Isso pode ser feito com a ajuda de um designer ou utilizando ferramentas de design gráfico.

![Maquete](https://github.com/GuiDev45/Exercicios-React-TypeScript/blob/master/prints/maquete.png)

## Dividir em Componentes

A primeira etapa ao construir uma interface de usuário em React é dividir o seu design em partes menores chamadas de componentes. Cada componente deve representar uma parte isolada da interface, como um botão, uma caixa de texto, ou até mesmo uma seção completa da página.

## Descrever Estados Visuais

Para cada um dos seus componentes, descreva os diferentes estados visuais que podem existir. Isso inclui quais informações ou propriedades podem variar e influenciar a aparência do componente. Pense em como o componente se comportará quando esses estados mudarem.

## Conectar Componentes

A próxima etapa é conectar seus componentes para que os dados fluam através deles. Isso é feito utilizando props para passar informações de um componente pai para um componente filho. Certifique-se de que a hierarquia de componentes está correta e que os dados são passados de forma eficiente.

## Implementar uma UI

Com os componentes definidos e conectados, você pode começar a implementar a interface do usuário. Utilize o React para criar os componentes e renderizá-los na tela de acordo com os estados visuais definidos anteriormente. Certifique-se de que a interface reaja às interações do usuário e aos dados que estão sendo passados.

Lembre-se de que o React é uma biblioteca poderosa para a construção de interfaces de usuário interativas e reativas. Ao seguir essas etapas e pensar em React, você pode criar aplicativos web mais eficientes e organizados.

## Etapa 1: Dividir a IU em uma Hierarquia de Componentes

Comece desenhando caixas ao redor de cada componente e subcomponente da maquete e nomeando-os.

- **Programação** — use as mesmas técnicas para decidir se você deve criar uma nova função ou objeto. Uma dessas técnicas é o [princípio da responsabilidade única (SOLID)](https://en.wikipedia.org/wiki/SOLID) ou seja, idealmente, um componente deve fazer apenas uma coisa. Se acabar crescendo, deverá ser decomposto em subcomponentes menores.
- **CSS** — considere para que você criaria seletores de classe. (No entanto, os componentes são um pouco menos granulares.)
- **Design** — considere como você organizaria as camadas do design.

### Princípio da Responsabilidade Única

O [Princípio da Responsabilidade Única](https://en.wikipedia.org/wiki/Single-responsibility_principle) afirma que uma classe deve ter um, e somente um, motivo para mudar.

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo — God Class\*. Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema — principalmente se não existirem testes automatizados!

\*God Class — Classe Deus: Na programação orientada a objetos, é uma classe que sabe demais ou faz demais.

Se o seu JSON estiver bem estruturado, muitas vezes você descobrirá que ele mapeia naturalmente para a estrutura do componente da sua UI. Isso ocorre porque os modelos de UI e de dados geralmente têm a mesma arquitetura de informações, ou seja, o mesmo formato.

### Componentes na Maquete

![Componentes na Maquete](https://github.com/GuiDev45/Exercicios-React-TypeScript/blob/master/prints/maquete-components.png)

- **FilterableProductTable (cinza)** contém o aplicativo inteiro.
- **SearchBar (azul)** recebe a entrada do usuário.
- **ProductTable (lavanda)** exibe e filtra a lista de acordo com a entrada do usuário.
- **ProductCategoryRow (verde)** exibe um título para cada categoria.
- **ProductRow (amarelo)** exibe uma linha para cada produto.

Se você olhar **ProductTable (lavanda)**, verá que o cabeçalho da tabela (contendo os rótulos “Name” e “Price”) não é um componente próprio. Isso é uma questão de preferência e você pode escolher de qualquer maneira. Neste exemplo, faz parte de ProductTable porque aparece dentro da lista de ProductTable. Entretanto, se esse cabeçalho se tornar complexo (por exemplo, se você adicionar "classificação"), poderá movê-lo para seu próprio componente chamado ProductTableHeader.

Agora que você identificou os componentes na maquete, organize-os em uma hierarquia. Os componentes que aparecem dentro de outro componente no modelo devem aparecer como filhos na hierarquia:

- **FilterableProductTable**
  - **SearchBar**
  - **ProductTable**
    - **ProductCategoryRow**
    - **ProductRow**

## Etapa 2: Construir uma Versão Estática no React

Agora que você tem sua hierarquia de componentes, é hora de implementar seu aplicativo. A abordagem mais direta é construir uma versão que renderize a UI a partir do seu modelo de dados sem adicionar qualquer interatividade... ainda! Muitas vezes é mais fácil construir primeiro a versão estática e adicionar interatividade depois. Construir uma versão estática requer muita digitação e nenhuma reflexão, mas adicionar interatividade requer muita reflexão e pouca digitação.

Para criar uma versão estática do seu aplicativo que renderize seu modelo de dados, você desejará criar componentes que reutilizem outros componentes e passem dados usando Props. Props são uma forma de passar dados de pai para filho. (Se você estiver familiarizado com o conceito de state, não use state para construir esta versão estática. State é reservado apenas para interatividade, ou seja, dados que mudam com o tempo. Como esta é uma versão estática do aplicativo, você não precisa disso.)

Você pode construir “de cima para baixo”, começando com a construção dos componentes mais acima na hierarquia (como FilterableProductTable) ou “de baixo para cima”, trabalhando a partir dos componentes mais abaixo (como ProductRow). Em exemplos mais simples, geralmente é mais fácil ir de cima para baixo e, em projetos maiores, é mais fácil ir de baixo para cima.

Após construir seus componentes, você terá uma biblioteca de componentes reutilizáveis ​​que renderizam seu modelo de dados. Por se tratar de um aplicativo estático, os componentes retornarão apenas JSX. O componente no topo da hierarquia (FilterableProductTable) usará seu modelo de dados como suporte. Isso é chamado de fluxo de dados unidirecional porque os dados fluem do componente de nível superior para aqueles na parte inferior da árvore.

**Armadilha:** Neste ponto, você não deve usar nenhum valor de estado. Isso fica para o próximo passo!

## Etapa 3: Encontre a Representação Mínima, mas Completa, do Estado da IU

Para tornar a IU interativa, você precisa permitir que os usuários alterem seu data model. Você usará o estado/state para isso.

Pense no estado como o conjunto mínimo de dados variáveis ​​que seu aplicativo precisa lembrar. O princípio mais importante para estruturar o estado é mantê-lo SECO (Não se repita). Descubra a representação mínima absoluta do estado que seu aplicativo precisa e calcule todo o resto sob demanda. Por exemplo, se você estiver criando uma lista de compras, poderá armazenar os itens como uma matriz no estado. Se você quiser exibir também o número de itens na lista, não armazene o número de itens como outro valor de estado; em vez disso, leia o comprimento do seu array.

Agora pense em todos os dados deste aplicativo de exemplo:

1. A lista original de produtos
2. O texto de pesquisa que o usuário inseriu
3. O valor da caixa de seleção
4. A lista filtrada de produtos

Quais destes são estaduais? Identifique aqueles que não são:

- Permanece inalterado ao longo do tempo? Se sim, não é estatal.
- É transmitido de um pai por meio de Props? Se sim, não é estatal.
- Você pode calculá-lo com base no estado/state ou Props existentes em seu componente? Se sim, definitivamente não é estado!

O que resta provavelmente é o estado.

1. A lista original de produtos é passada como Props, portanto não é um estado.
2. O texto de pesquisa parece ser um estado, pois muda com o tempo e não pode ser calculado a partir de nada.
3. O valor da caixa de seleção parece ser um estado, pois muda com o tempo e não pode ser calculado a partir de nada.
4. A lista filtrada de produtos não é um estado porque pode ser calculada pegando a lista original de produtos e filtrando-a de acordo com o texto de pesquisa e o valor da caixa de seleção.

Isso significa que apenas o texto da pesquisa e o valor da caixa de seleção são estados! Bem feito!

**MERGULHO PROFUNDO: Props vs Estado**

- Props são como argumentos que você passa para uma função. Eles permitem que um componente pai passe dados para um componente filho e personalize sua aparência. Por exemplo, a Form pode passar uma color propriedade para a Button.

- O estado é como a memória de um componente. Ele permite que um componente acompanhe algumas informações e as altere em resposta às interações. Por exemplo, a Button pode acompanhar o isHovered estado.

Props e estado são diferentes, mas funcionam juntos. Um componente pai geralmente manterá algumas informações no estado (para que possa alterá-las) e as transmitirá aos componentes filhos como seus Props. Não há problema se a diferença ainda parecer confusa na primeira leitura. É preciso um pouco de prática para realmente pegar!

## Etapa 4: Identifique Onde Seu Estado Deve Morar

Depois de identificar os dados de estado mínimo do seu aplicativo, você precisa identificar qual componente é responsável por alterar esse estado ou é o proprietário do estado. Lembre-se: o React usa fluxo de dados unidirecional, passando os dados pela hierarquia de componentes do componente pai para o componente filho. Pode não ficar imediatamente claro qual componente deve possuir qual estado. Isso pode ser um desafio se você for novo nesse conceito, mas você pode descobrir seguindo estas etapas!

Para cada parte do estado em seu aplicativo:

1. Identifique cada componente que renderiza algo com base nesse estado.
2. Encontre o componente pai comum mais próximo – um componente acima de todos eles na hierarquia.
3. Decida onde o estado deve morar:
4. Freqüentemente, você pode colocar o estado diretamente no pai comum.
5. Você também pode colocar o estado em algum componente acima do pai comum.
6. Se você não conseguir encontrar um componente onde faça sentido possuir o estado, crie um novo componente exclusivamente para manter o estado e adicione-o em algum lugar na hierarquia acima do componente pai comum.

Na etapa anterior, você encontrou dois estados neste aplicativo: o texto de entrada da pesquisa e o valor da caixa de seleção. Neste exemplo, eles aparecem sempre juntos, por isso faz sentido colocá-los no mesmo lugar.

Agora vamos analisar nossa estratégia para eles:

1. Identifique os componentes que usam estado:

- ProductTable precisa filtrar a lista de produtos com base nesse estado (texto de pesquisa e valor da caixa de seleção).
- SearchBar precisa exibir esse estado (texto de pesquisa e valor da caixa de seleção).

2. Encontre seu pai comum: o primeiro componente pai que ambos os componentes compartilham é FilterableProductTable.
3. Decida onde fica o estado : manteremos o texto do filtro e os valores de estado verificados em FilterableProductTable.

Portanto, os valores do estado permanecerão em FilterableProductTable.

Adicione estado ao componente com o useState()Hook. Ganchos são funções especiais que permitem “conectar-se” ao React. Adicione duas variáveis ​​de estado no topo de FilterableProductTable e especifique seu estado inicial:

```bash
function FilterableProductTable({ products }) {
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);
```

### Então, passe filterTexte inStockOnly para ProductTable e SearchBar como props:

```bash
<div>
  <SearchBar
    filterText={filterText}
    inStockOnly={inStockOnly} />
  <ProductTable
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>
```

Você pode começar a ver como seu aplicativo se comportará. Edite o filterText valor inicial de useState('')para useState('fruit') no código.
Você verá o texto de entrada da pesquisa e a atualização da tabela:

No entanto, você ainda não adicionou nenhum código para responder às ações do usuário, como digitação. Esta será sua etapa final.

## Etapa 5: Adicionar Fluxo de Dados Inverso

Atualmente, seu aplicativo é renderizado corretamente com adereços e estados descendo na hierarquia. Mas para alterar o estado de acordo com a entrada do usuário, você precisará oferecer suporte ao fluxo de dados no sentido contrário: os componentes do formulário na hierarquia precisam atualizar o estado no FilterableProductTable.

O React torna esse fluxo de dados explícito, mas requer um pouco mais de digitação do que a ligação de dados bidirecional. Se você tentar digitar ou marcar a caixa no exemplo acima, verá que o React ignora sua entrada. Isso é intencional. Ao escrever `<input value={filterText} />`, você definiu a propriedade `value` do input para ser sempre igual ao estado `filterText` passado de `FilterableProductTable`. Como o estado `filterText` nunca é definido, a entrada nunca muda.

Você deseja que sempre que o usuário alterar as entradas do formulário, o estado seja atualizado para refletir essas alterações. O estado é propriedade de `FilterableProductTable`, portanto, só ele pode ligar `setFilterText` e `setInStockOnly`. Para permitir que `SearchBar` atualize o estado de `FilterableProductTable`, você precisa passar essas funções para `SearchBar`:

```bash
function FilterableProductTable({ products }) {
const [filterText, setFilterText] = useState(''); // Aqui
const [inStockOnly, setInStockOnly] = useState(false); // Aqui

return (
<div>
<SearchBar
filterText={filterText}
inStockOnly={inStockOnly}
onFilterTextChange={setFilterText} // Aqui
onInStockOnlyChange={setInStockOnly} /> // Aqui
```

### Dentro do SearchBar, você adicionará os onChange manipuladores de eventos e definirá o estado pai deles:

```bash
<input
type="text"
value={filterText}
placeholder="Search..."
onChange={(e) => onFilterTextChange(e.target.value)} /> // Aqui
```

Agora o aplicativo funciona totalmente!
