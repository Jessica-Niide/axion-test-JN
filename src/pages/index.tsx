import Head from "next/head";
import Image from "next/image";
import { EnvelopeSimple, Lock } from "phosphor-react";

export default function Home() {
  return (
    <>
    <Head>
      <title>Orange | login</title>
    </Head>
    <div className="flex w-full mt-[49px]">

      <div className="relative flex z-10 flex-col w-[430px] h-[746px] bg-white shadow-sm px-10 pt-[52px] left-[12.5%]">
        <Image
          className="absolute text-gray-900 text-4xl text-left leading-[43px] tracking-[14px] font-[Righteous] flex max-w-[216px] mt-[52px]"
          src="/images/logo.png"
          alt="ORANGE"
          width={216}
          height={36}
          layout='fixed'
          />
        <form 
          className="flex flex-col gap-2"
          action="">
          <label
          htmlFor="email"
          className="text-gray-900 font-semibold text-left mt-10"
          >
            Email
          </label>
          <div className="flex items-center justify-between border border-gray-900 px-5 py-2">
            <input type="text"
            id="email"
            className="placeholder:text-gray-300"
            placeholder='seunome@email.com'
            />
              <EnvelopeSimple className="text-gray-300 w-5"/>
          </div>
          <label
          htmlFor="password"
          className="text-gray-900 font-semibold text-left">
            Password
          </label>
          <div className="flex items-center justify-between border border-gray-900 px-5 py-2">
            <input type="text"
            id="password"
            className="placeholder:text-gray-300"
            placeholder='Password'
            />
              <Lock className="text-gray-300 w-5"/>
          </div>
          <div className="flex items-center gap-2">
            <input
            type="checkbox"
            className="text-gray-900 hover:cursor-pointer"
            id="showPassword"/>
            <label
            htmlFor="showPassword"
            className="text-gray-900 text-left"
            >
              Mostrar a senha.
            </label>
          </div>
          <a
            className="font-semibold text-sm text-left my-10 hover:brightness-0"
          href="">
            Problemas para acessar sua conta?
          </a>
          <button
            className="bg-linear p-2 text-white font-semibold h-14 w-full hover:brightness-90 hover:transition-colors"
            type="submit">
            Acessar
          </button>
        </form>
        <div className="flex flex-row justify-center items-center gap-2 my-5">
          <hr className="w-full h-[1px] bg-[#909090]"/>
          <span>
            ou
          </span>
          <hr className="w-full h-[1px] bg-[#909090]"/>
        </div>
        <button
          className="border border-gray-300 h-14 w-full font-semibold  hover:bg-gray-100 hover:transition-colors">
          Cadastrar
        </button>
        <div className="flex gap-3 my-5 text-sm">
          <a
            href=""
            className="hover:brightness-0">
            Termos de uso
          </a>
          <span>•</span>
          <a
            href=""
            className="hover:brightness-0">
            Política de privacidade
          </a>
        </div>
      </div>

      <div className="flex absolute right-0 top-[231px]">
        <Image
          src="/images/bg.jpg"
          alt=""
          width={860}
          height={444}
        />
      </div>
    </div>
    </>
  )
}
