import Image from "next/image";
const isActive = true;
export function Header() {
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
          <nav className="flex gap-2">
            <a
              className={`${isActive ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`} 
            href="">
              FOODS
            </a>
            <a className="w-28 text-lg leading-[22px] text-right" 
            href="">
              PEOPLE
            </a>
            <a className="w-28 text-lg leading-[22px] text-right" 
            href="">
              PLACES
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

// color: #4A4A4A;
// font-family: OpenSans;
// font-size: 18px;
// letter-spacing: 1px;
// line-height: 22px;
// width: 116px;
// text-align: right;