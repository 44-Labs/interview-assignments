import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg min-w-[320px] max-w-lg w-full p-6 relative">
        <button
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
