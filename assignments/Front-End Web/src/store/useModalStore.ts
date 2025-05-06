import { GolfCoursePrice } from '@/types';
import { create } from 'zustand';

interface ModalState {
  open: boolean;
  data: GolfCoursePrice[];
  openModal: (data: GolfCoursePrice[]) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  open: false,
  data: [],
  openModal: (data: GolfCoursePrice[]) => set({ open: true, data }),
  closeModal: () => set({ open: false, data: [] }),
}));
