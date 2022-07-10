import Image from "next/image";
import Link from "next/link";
const isActive = true;

interface HeaderProp {
  'listType'?: string | string[];
}

export function Header({ listType }: HeaderProp) {
  return (
    <header className="flex w-full bg-white h-[100px] shadow-sm">
      <div className="flex justify-between m-auto w-full max-w-[940px]">
        <Image
          className="text-gray-900 text-4xl text-left leading-[43px] tracking-[14px] font-[Righteous] flex max-w-[216px]"
          src="/images/logo.png"
          alt="ORANGE"
          width={216}
          height={36}
          layout='fixed'
          />
        <div className="flex">
          <nav className="flex gap-4 mx-1">
            <Link href="/lists/foods">
              <a
                className={`${listType === 'foods' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}>
                FOODS
              </a>
            </Link>
            <Link href="/lists/people">
              <a
                className={`${listType === 'people' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}>
                PEOPLE
              </a>
            </Link>
            <Link href="/lists/places">
              <a className={`${listType === 'places' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}
                >
                PLACES
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
