"use client"

import Image from "next/image"
import CarV from '@/public/CarV.jpeg';
import CarC from '@/public/CarC.jpeg';
import CarB from '@/public/CarB.jpeg';
import CarV4 from '@/public/CarV4.jpg';
import CarV5 from '@/public/CarV5.webp';

import {useState} from "react"

export default function Carrossel() {

  const carros = [
    { Imagem: CarV },
    { Imagem: CarB },
    { Imagem: CarC }
  ]

  const [contagem, setContagem] = useState(0)
  const [carroEscolhido, setCarroEscolhido] = useState(null)

  const trocaImagem = (sinal:any) => {

    let proximaContagem = 0
    if(sinal === '>'){
       proximaContagem = (contagem + 1) % carros.length
    }
    else{
       proximaContagem = (contagem - 1) % carros.length
    }



    setContagem(proximaContagem)
  }

  const carroAtual = carros[contagem].Imagem;


  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <div className="bg-white rounded shadow overflow-hidden">
       <Image
          src={carroAtual}
          alt=" "
          className="w-full h-full object-cover"
        />
        <div className="flex justify-center">
         <input
        type="button"
        value="<"
        onClick={()=>{trocaImagem('<')}}
        className="bg-black-500 p-8"
        />
        <input
        type="button"
        value=">"
        onClick={()=>{trocaImagem('>')}}
        className="bg-black-500 p-8"

        />
       </div>
        <div className="p-6 text-center">
          <h2 className="font-semibold">Verifique nossas Novidades Toyota</h2>
          <div className="flex justify-center mt-3 gap-2">
            <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
