"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp } from 'lucide-react';
import Header from '@/app/components/ui/Header'

const Dashboard = () => {
  // Dados para o gráfico de linha (Veículos entregues)
  const lineData = [
    { month: 'Jan', value: 120 },
    { month: 'Fev', value: 150 },
    { month: 'Mar', value: 180 },
    { month: 'Abr', value: 250 },
    { month: 'May', value: 280 },
    { month: 'Jun', value: 300 },
    { month: 'Jul', value: 380 }
  ];

  // Dados para o gráfico de pizza (Veículos por Status)
  const pieData = [
    { name: 'Produção', value: 400, color: '#10b981' },
    { name: 'Montagem', value: 300, color: '#3b82f6' },
    { name: 'Em trânsito', value: 300, color: '#f97316' },
    { name: 'Entregue', value: 253, color: '#06b6d4' }
  ];

  // Dados para o gráfico de barras horizontal
  const barData = [
    { model: 'Corolla', value: 420 },
    { model: 'Hilux', value: 350 },
    { model: 'SW4', value: 280 },
    { model: 'Yaris', value: 203 }
  ];

  return (

    <div className="max-h-screen bg-gray-50">
        <Header variant='secondary'/>
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard - Dados</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card: Total de Veículos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-sm font-medium text-gray-600 mb-2">Total de Veículos</h2>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">1.253</span>
              <div className="flex items-center text-green-500 mb-1">
                <TrendingUp size={16} />
                <span className="text-sm font-semibold ml-1">5.2%</span>
              </div>
            </div>
          </div>

          {/* Card: Veículos entregues (Linha) */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Veículos entregues</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Card: Veículos por Status (Pizza) */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Veículos por Status</h2>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="60%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="flex flex-col gap-3">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card: Veículos entregues (Barras) */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-sm font-medium text-gray-900 mb-4">Veículos entregues</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis
                  type="category"
                  dataKey="model"
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                  width={60}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard
