import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Centro Médico Universitario
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Cuidando la salud de nuestra comunidad universitaria con excelencia y compromiso
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Reserva Online</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Agenda tus citas médicas de forma rápida y sencilla
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Horarios Flexibles</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Múltiples horarios disponibles para tu conveniencia
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Especialistas</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Equipo médico altamente calificado
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Soporte 24/7</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Asistencia disponible en todo momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}