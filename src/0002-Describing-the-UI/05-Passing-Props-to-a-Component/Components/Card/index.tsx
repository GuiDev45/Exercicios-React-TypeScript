import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

/*
Quando você aninha conteúdo dentro de uma tag JSX, o componente pai receberá esse conteúdo em uma propriedade chamada children. Por exemplo, o Cardcomponente abaixo receberá um childrenconjunto de prop <Avatar />e o renderizará em uma div wrapper:
*/
