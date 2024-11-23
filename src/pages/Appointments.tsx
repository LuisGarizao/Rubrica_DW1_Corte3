import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function Appointments() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mis Citas Médicas</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <p className="text-gray-500">Próximamente: Sistema de gestión de citas</p>
        </div>
      </div>
    </div>
  );
}