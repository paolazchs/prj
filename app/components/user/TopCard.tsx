 import Image from "next/image"
import CarB from '@/public/CarB.jpeg';
import { useRouter } from "next/navigation";
export default function TopCard() {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6 flex gap-6 items-start justify-center">
     <div className="col-span-2 bg-white rounded-lg border p-6 shadow-sm w-full flex">
      <div className="flex flex-col items-between w-full">
        <h3 className="text-lg font-bold mb-2">Seu Corolla Altis</h3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <Image

             src={CarB}
             alt=""

             className="w-full md:w-70 rounded-lg object-cover shadow-md"
          />
          <div>
              <div className="flex-100"></div>
              <p className="text-sm text-gray-600">Toyota Corolla Altis<br/>Hybrid 2025<br/>Branco Perolado</p>
            <div className="mt-4 flex gap-3"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-red-600 text-white px-4 py-4 rounded h-[8vh]"  onClick={() => router.push('/user/gestao')}>Gestão</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded h-[8vh]"  onClick={() => router.push('/user/financiamento')}>Financiamento</button>
        </div>

      </div>
        <aside className="bg-white rounded-lg border p-4 shadow-sm w-[40vw]">
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-18 bg-green-400 rounded-full mr-2" />
                  <div>
                    <div className="text-gray-400">pintura</div>
                  </div>
                </li>
                <li className="text-gray-800 font-semibold">Aguardando o embarque</li>
                <li className="text-gray-400">Pintura</li>
                <li className="text-gray-400">Processo de montagem</li>


              </ul>
          </aside>
      </div>
    </div>
  );
}
