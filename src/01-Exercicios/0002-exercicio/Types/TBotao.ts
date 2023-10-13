type TBotao = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};
