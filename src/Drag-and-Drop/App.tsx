// Importação dos componentes necessários.
import DraggableCard from "./DraggableCard";
import DropZone from "./DropZone";

function App() {
  // Função que será chamada quando um card for solto na zona de drop.
  const handleCardDropped = (text: string) => {
    console.log(`Card dropped with text: ${text}`);
  };

  // Componente principal da aplicação.
  return (
    <div className="App">
      <h1>teste</h1>
      {/* Renderiza três DraggableCards diferentes */}
      <DraggableCard id="card1" text="Card 1" />
      <DraggableCard id="card2" text="Card 2" />
      <DraggableCard id="card3" text="Card 3" />
      {/* Renderiza a zona de drop onde os cards podem ser soltos */}
      <DropZone onCardDropped={handleCardDropped} />
    </div>
  );
}

export default App;
