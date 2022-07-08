import  Head  from "next/head";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function Lists() {
  return (
    <>
    <Head>
      <title>List of foods</title>
    </Head>
    <Header />
    <div className="w-full h-full flex justify-start">
      <div className="mx-auto max-w-[960px] my-10">
        <span className="font-semibold text-lg text-left uppercase">
          List of foods
        </span>
        <div className="block my-5">
          <hr className="h-[5px] bg-gradient-to-r from-pink-500 to-red-500 "/>
          <div className="flex flex-wrap justify-start gap-[45px] my-2">
            <Card />
            <Card />
            <Card />
            <Card />
 
          </div>
        </div>

      </div>
    </div>
    </>
  )
}