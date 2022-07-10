import Image from 'next/image'

interface CardProps {
  name: string;
  imageLink: string;
}

export function Card({ name, imageLink }: CardProps) {
  return (
    <div className="relative flex flex-col w-[290px] h-[290px] overflow-clip shadow-sm z-0">
      <Image
        src={imageLink}
        alt={name}
        className="w-[290px] h-[290px] z-0"
        width={290}
        height={290} />
      <div className='absolute top-[160px] w-[290px] h-[130px] bg-gradient-to-b from-white/0 via-black/10 to-black/50'>
        
      </div>
      <div className="absolute top-[234px] left-[20px] text-[28px] text-white font-bold text-left z-20">
        {name}
      </div>
    </div>
  )
}