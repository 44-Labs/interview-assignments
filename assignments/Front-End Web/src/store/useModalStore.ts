import { GolfClubPrice } from '@/types';
import { create } from 'zustand';

interface ModalState {
  open: boolean;
  data: GolfClubPrice[];
  openModal: (data: GolfClubPrice[]) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  open: false,
  data: [],
  openModal: (data: GolfClubPrice[]) => set({ open: true, data }),
  closeModal: () => set({ open: false, data: [] }),
}));
