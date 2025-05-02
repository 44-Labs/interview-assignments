import { Button } from '@/components/common/Button';
import { Modal } from '@/components/common/Modal';
import { useModalStore } from '@/store/useModalStore';

export function GolfPriceComparisonModal() {
  const { open, data, closeModal } = useModalStore();

  if (!open) return null;
  return (
    <Modal open={open} onClose={closeModal}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{data[0].golfCourseName}</h2>
      <ul className="space-y-4">
        {data.map(item => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg font-medium text-gray-700">{item.source}</span>
            <span className="text-xl font-semibold text-blue-600">{item.currentPrice.toLocaleString()}원</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Button
          onClick={closeModal}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          닫기
        </Button>
      </div>
    </Modal>
  );
}
