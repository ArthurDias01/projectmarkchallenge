import clsx from "clsx";
import Link from "next/link";


interface Props {
  href: string;
  isActive?: boolean;
  title: string;
  text: string;
}

export const NavButton = ({ href, isActive = false, title, text }: Props) => {

  return (
    <Link href={href} className="flex flex-col items-center justify-center">
      <div className={clsx("flex flex-row items-center justify-center w-[50px] h-[50px] rounded-2xl font-bold", {
        "bg-strong text-white": isActive,
        "bg-white text-strong border border-1 border-gray-300": !isActive
      })}>
        {title}
      </div>
      <p className="font-bold text-strong text-custom-sm mt-[3px]">{text}</p>
    </Link>
  )
}
