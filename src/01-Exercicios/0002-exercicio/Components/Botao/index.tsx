export default function Botao({ children, onClick }: TBotao) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
