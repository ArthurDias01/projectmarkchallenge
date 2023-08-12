import Image from 'next/image'
import { NavButton } from '@/components/NavButton'
import { Button } from '@/components/Button'
import Logo from '../../../../public/logo.png'

export const Header = () => {


  return (
    <header className="flex w-full flex-row justify-between py-[21px] items-center px-[13px]">
      <Image
        src={Logo.src}
        alt='Project Mark Logo'
        className="h-[50px] w-[50px] -mt-2"
        width={50}
        height={50}
      />
      <nav className="flex flex-row gap-[42px]">
        <NavButton href="#" isActive title='1' text='Sales Pipeline Settings' />
        <NavButton href="#" title='2' text='Opportunity Details Settings' />
      </nav>
      <div className="mr-[9px]">
        <Button text="Next" />
      </div>
    </header>
  )
}
