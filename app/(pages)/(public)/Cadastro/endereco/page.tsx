"use client";

import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import { cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';

const mainContainer = cva(
  'flex flex-col gap-5 justify-start items-center min-h-screen bg-[#FAFAFA] w-full py-10',
);

const formContainer = cva(
  'bg-white shadow-lg shadow-black/20 w-[95%] sm:w-[90%] max-w-3xl rounded-lg py-10 px-6 sm:px-12 flex flex-col items-center',
);

const textStyle = cva('text-[1.7rem] sm:text-[2rem] font-bold text-black');

export default function SignUp() {
  const router = useRouter();

  return (
    <main className={mainContainer()}>
      <h1 className={textStyle()}>
        <span className="text-[#FF0404]">Toyota</span>Tech
      </h1>

      <div className={formContainer()}>
        <h2 className="font-bold text-xl sm:text-2xl mb-10">Bem vindo!</h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 w-full">
          <div>
            <label className="text-sm mb-1 block">CEP:</label>
            <Input />
          </div>

          <div>
            <label className="text-sm mb-1 block">Bairro:</label>
            <Input />
          </div>

          <div className="flex w-full gap-4 col-span-1 sm:col-span-2">
            <div className="flex flex-col flex-3">
              <label className="mb-1 font-medium">Rua:</label>
              <input
                type="text"
                className="w-full rounded-md border-2 border-black bg-gray-200 p-3"
              />
            </div>

            <div className="flex flex-col flex-1 max-w-[120px]">
              <label className="mb-1 font-medium">Nº:</label>
              <input
                type="text"
                className="w-full rounded-md border-2 border-black bg-gray-200 p-3"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">Cidade:</label>
            <Input />
          </div>

          <div>
            <label className="text-sm mb-1 block">Estado:</label>
            <Input />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="text-sm mb-1 block">Complemento:</label>
            <Input />
          </div>
        </form>

        <div className="w-full flex justify-center mt-10">
          <div className="w-44 sm:w-48">
            <Button onClick={() => alert('Cadastro concluído com sucesso!')}>Cadastre-se!</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
