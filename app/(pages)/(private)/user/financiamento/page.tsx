import { Car, FileText } from "lucide-react";

export default function FinancialPage() {
  const percentPago = 50;

  return (
    <main className="container mx-auto px-6 py-12 mb-24">
      <h1 className="text-4xl font-bold text-center mb-12">
        Acompanhamento Financeiro
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="border-2 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
          <div className="flex items-center gap-2 mb-6">
            <Car className="h-5 w-5 text-gray-500" />
            <h2 className="text-2xl font-semibold">Financiamento</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Veículo:</p>
              <p className="font-semibold text-lg">
                Corolla 2022
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Parcelas pagas:</span>
                <span className="font-bold text-lg">
                  24/48
                </span>
              </div>


              <div className="space-y-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all"
                    style={{ width: `${percentPago}%` }}
                  />
                </div>
                <p className="text-right text-sm text-gray-500">
                  {percentPago}%
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Instituição financeira:
              </p>
              <p className="font-medium">
                Banco XYZ
              </p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-gray-500" />
            <h2 className="text-2xl font-semibold">2° Via do Boleto</h2>
          </div>

          <p className="text-gray-500 mb-8">
            Baixe seus boletos e carnês com facilidade
          </p>

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg rounded-lg transition-colors"
          >
            Acessar boletos
          </button>
        </div>
      </div>
    </main>
  );
}
