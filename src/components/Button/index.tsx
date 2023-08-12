import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...rest }: Props) => {
  return (
    <button
      className="bg-accent text-white text-[14px] font-medium flex flex-row items-center justify-center w-fit h-fit py-[13px] px-[21px] rounded-full text-sm" {...rest}>
      {text}
    </button>
  )
}
