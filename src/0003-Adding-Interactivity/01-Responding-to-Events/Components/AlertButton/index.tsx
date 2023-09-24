import { ReactNode } from "react";

type alertButtonProps = {
  message: string;
  children: ReactNode;
};

export default function AlertButton({ message, children }: alertButtonProps) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

/*
Isso permite que esses dois botões mostrem mensagens diferentes. Tente alterar as mensagens passadas para eles.
*/
