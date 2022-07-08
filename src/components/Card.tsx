import Image from 'next/image'

export function Card() {
  return (
    <div className="flex flex-col w-72 h-72 overflow-clip shadow-sm my-4">
      <Image
        src="/images/bg.jpg"
        alt=""
        className="w-72 h-72 z-0"
        width={290}
        height={290} />
      <div className="-mt-20 ml-5 z-10 text-[28px] text-white font-bold text-left">
        Logo
      </div>
    </div>
  )
}