export default function Botao({ children, onClick, type, className }: TBotao) {
  return (
    <div>
      <button onClick={onClick} type={type} className={className}>
        {children}
      </button>
    </div>
  );
}
