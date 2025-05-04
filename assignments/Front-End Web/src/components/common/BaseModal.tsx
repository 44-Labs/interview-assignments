import React, { useEffect } from 'react';

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BaseModal({ open, onClose, children }: BaseModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg min-w-[320px] max-w-lg w-full p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
