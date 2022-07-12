import  Head  from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSwr from 'swr';
import { Key, useContext } from "react";
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";

const fetcher = (url: string, token: string) => fetch(url, {
    method: "GET",
      headers: {
        'Content-type': "application/json",
        'Authorization': `Bearer ${token}`
      }
    },
  ).then((res) => res.json());


export default function Lists() {
  const router = useRouter()
  const { types } = router.query
  const { token } = useContext(AuthContext);
  
  
  const { data, error } = useSwr(
    [`http://localhost:1337/${types}`, token],
    fetcher
    );
    
  if (!data) return (<Loading />);
  if (!token) return (<Loading />);
  if (error) return "An error has occurred.";
    
  return (
    <>
    <Head>
      <title>List of {types}</title>
    </Head>
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
                className={`${types === 'foods' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}
                >
                FOODS
              </a>
            </Link>
            <Link href="/lists/people">
              <a
                className={`${types === 'people' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}
                >
                PEOPLE
              </a>
            </Link>
            <Link href="/lists/places">
              <a
                className={`${types === 'places' ? 'font-bold' : 'hover:font-bold hover:text-gray-900 hover:transition-colors'} 'w-28 text-lg leading-[22px] text-right'`}
                >
                PLACES
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
    <div className="w-full h-full flex justify-start">
      <div className="mx-auto max-w-[960px] my-10">
        <span className="font-semibold text-lg text-left uppercase">
          List of {types}
        </span>
        <div className="block my-5">
          <hr className="h-[5px] bg-linear shadow-sm"/>
          <div className="flex flex-wrap justify-start gap-[45px] mt-10">
            {data.map((item: { id: Key | null | undefined; name: string; link: string; }) => {
              return <Card key={item.id} name={item.name} imageLink={item.link}/>
            })}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}