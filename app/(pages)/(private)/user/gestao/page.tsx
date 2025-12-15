"use client";

import { Calendar, FileText, Car } from "lucide-react";

export default function Management() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gestão do Veículo</h1>
        <p className="text-gray-500">
          Documentos digitais, lembretes e mais — tudo num só lugar
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium flex items-center gap-2">
            <Car className="h-4 w-4" />
            Toyota Corolla — 2022
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Pedido #12345 — Status: Em andamento
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Nota Fiscal", subtitle: "12/08/2024", icon: FileText },
          { title: "CRLV-e", subtitle: "Aguardando entrega", icon: Car },
          { title: "Manual do Veículo", subtitle: "Disponível", icon: FileText },
          { title: "Garantia", subtitle: "3 anos", icon: FileText },
        ].map((doc, index) => {
          const Icon = doc.icon;
          return (
            <div
              key={index}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white"
            >
              <div className="bg-gray-100 aspect-[3/4] flex items-center justify-center">
                <div className="text-center p-4">
                  <Icon className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <span className="text-xs text-gray-500">
                    {doc.title}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm">{doc.title}</p>
                <p className="text-xs text-gray-500">{doc.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">
            Documentos digitais
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Envie e guarde versões digitais do IPVA, licenciamento e garantia.
          </p>

          <select className="w-full border rounded-lg px-3 py-2 mb-4">
            <option>IPVA</option>
            <option>Licenciamento</option>
            <option>Garantia</option>
          </select>

          <button className="w-full border rounded-lg py-2 hover:bg-gray-50">
            Escolher arquivo
          </button>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">Lembretes</h2>
          <p className="text-sm text-gray-500 mb-4">
            Seguros, renovação e vencimentos
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Seguro</label>
              <p className="text-xs text-gray-500">Renovação anual</p>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="w-full border rounded-lg px-3 py-2 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Licenciamento</label>
              <p className="text-xs text-gray-500">Data de vencimento</p>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="w-full border rounded-lg px-3 py-2 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-lg font-semibold mb-1">
            Programas de recall
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Notificações e agendamentos de reparos obrigatórios.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Nenhum recall registrado.
          </p>

          <input
            type="text"
            placeholder="Título do recall (ex: Airbag)"
            className="w-full border rounded-lg px-3 py-2 mb-4"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
