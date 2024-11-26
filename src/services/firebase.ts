import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Appointment, Doctor, Specialty } from '../types';

// Specialties
export const getSpecialties = async () => {
  const querySnapshot = await getDocs(collection(db, 'specialties'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Specialty[];
};

// Doctors
export const getDoctors = async () => {
  const querySnapshot = await getDocs(collection(db, 'doctors'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Doctor[];
};

export const getDoctorsBySpecialty = async (specialtyId: string) => {
  const q = query(collection(db, 'doctors'), where('specialtyId', '==', specialtyId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Doctor[];
};

// Appointments
export const createAppointment = async (appointmentData: Omit<Appointment, 'id' | 'createdAt'>) => {
  const docRef = await addDoc(collection(db, 'appointments'), {
    ...appointmentData,
    createdAt: Timestamp.now()
  });
  return docRef.id;
};

export const getUserAppointments = async (userId: string) => {
  const q = query(collection(db, 'appointments'), where('patientId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Appointment[];
};

export const updateAppointmentStatus = async (appointmentId: string, status: Appointment['status']) => {
  const appointmentRef = doc(db, 'appointments', appointmentId);
  await updateDoc(appointmentRef, { status });
};

export const cancelAppointment = async (appointmentId: string) => {
  await updateAppointmentStatus(appointmentId, 'cancelled');
};