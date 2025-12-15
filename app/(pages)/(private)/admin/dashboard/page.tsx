'use client';
import Header from '@/app/components/admin/Header';
import clientes from '@/public/clientes-adm.png';
import compras from '@/public/compras-adm.png';
import desempenho from '@/public/desempenho-adm.png';
import usuarios from '@/public/usuarios-adm.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function AdminDashboard() {
  const router = useRouter();

  const handleNav = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header variant="secondary" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* CARD 1 */}
        <div className="bg-white border border-black shadow-md rounded-lg p-10 text-center cursor-pointer hover:shadow-xl transition-all">
          <Image src={compras} width={80} height={80} alt="Status Geral" className="mx-auto mb-6" />
          <p className="text-lg font-semibold text-red-600">1. Status Geral das Compras</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white border border-black shadow-md rounded-lg p-10 text-center cursor-pointer hover:shadow-xl transition-all">
          <Image
            src={clientes}
            width={80}
            height={80}
            alt="Ficha dos Clientes"
            className="mx-auto mb-6"
          />
          <p className="text-lg font-semibold">2. Ficha dos Clientes</p>
        </div>

        {/* CARD 3 */}
        <div
          onClick={() => router.push('/admin/controle')}
          className="bg-white border border-black shadow-md rounded-lg p-10 text-center cursor-pointer hover:shadow-xl transition-all"
        >
          <Image
            src={desempenho}
            width={80}
            height={80}
            alt="Indicadores"
            className="mx-auto mb-6"
          />
          <p className="text-lg font-semibold">3. Indicadores de Desempenho</p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white border border-black shadow-md rounded-lg p-10 text-center cursor-pointer hover:shadow-xl transition-all">
          <Image
            src={usuarios}
            width={80}
            height={80}
            alt="Gestão dos Usuários"
            className="mx-auto mb-6"
          />
          <p className="text-lg font-semibold text-red-600">4. Gestão dos Usuários</p>
        </div>
      </div>
    </div>
  );
}
