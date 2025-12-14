
export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">

          <div>
            <h3 className="text-red-600 font-bold mb-3">ToyotaTech</h3>
            <p className="text-sm text-gray-400">
              O seu portal de acompanhamento e gestão de veículos Toyota.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/gestao" className="text-gray-400 hover:text-white transition">Gestão do Carro</a></li>
              <li><a href="/financiamento" className="text-gray-400 hover:text-white transition">Financiamento</a></li>
              <li><a href="/novidades" className="text-gray-400 hover:text-white transition">Novidades</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="/contato" className="text-gray-400 hover:text-white transition">Fale Conosco</a></li>
              <li><a href="/privacidade" className="text-gray-400 hover:text-white transition">Política de Privacidade</a></li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Contato</h3>
            <p className="text-sm text-gray-400">Av. Principal, 123</p>
            <p className="text-sm text-gray-400">São Paulo - SP</p>
            <p className="text-sm text-gray-400 mt-2">(11) 9999-8888</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700 text-sm text-gray-400">
          {anoAtual} ToyotaTech. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
