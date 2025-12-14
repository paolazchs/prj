import { cva } from 'class-variance-authority';

const inputStyles = cva('w-full bg-[#EDEDED] h-13 border-2 border-black px-5 rounded-sm');

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return(
  <div>
    {label && <label>{label}</label>}

    <input className={inputStyles()} {...props} />
  </div>
  );
}
