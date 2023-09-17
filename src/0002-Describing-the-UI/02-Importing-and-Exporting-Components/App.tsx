import { Gallery, SomeOtherComponent } from "./Components/Gallery";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <h1>Minha Página</h1>
      <Profile />
      <Gallery />
      <SomeOtherComponent />
    </div>
  );
}

export default App;

/*
Aqui, usamos as chaves {} para importar especificamente "Gallery" e "SomeOtherComponent" do módulo "Gallery". É importante notar que, neste caso, não estamos usando export default no módulo "Gallery".

Em resumo, a diferença entre as duas formas de importação torna-se mais aparente quando você lida com múltiplos exports de um módulo. Se você estiver exportando apenas um valor padrão, ambas as formas de importação são geralmente intercambiáveis.

Também é possível usar apenas o componente SomeOtherComponent que está em Gallery por exemplo, o import ficaria dessa forma:
import { SomeOtherComponent } from "./Components/Gallery";

Sintaxe	| Declaração de exportação | Declaração de importação
Padrão | export default function Button() {} | import Button from './Button.js';
Nomeado	| export function Button() {}	| import { Button } from './Button.js';
*/
