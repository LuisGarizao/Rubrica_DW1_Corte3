export interface User {
  id: string;
  email: string;
  role: 'admin' | 'patient';
  createdAt: string;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialtyId: string;
  email: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  specialtyId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}