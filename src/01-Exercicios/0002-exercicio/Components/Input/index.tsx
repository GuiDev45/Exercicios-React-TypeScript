import style from "./Input.module.scss";

export default function Input({ value, onChange }: TInput) {
  return (
    <input
      className={style.InputAdicionar}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
