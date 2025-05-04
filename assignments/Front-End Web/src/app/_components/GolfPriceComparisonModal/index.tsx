import { BaseButton } from '@/components/common/BaseButton';
import { BaseModal } from '@/components/common/BaseModal';
import { useModalStore } from '@/store/useModalStore';
import GolfPriceComparisonList from './GolfPriceComparisonList';

export default function GolfPriceComparisonModal() {
  const { open, data, closeModal } = useModalStore();

  if (!open) return null;

  return (
    <BaseModal open={open} onClose={closeModal}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{data[0].golfCourseName}</h2>
      <GolfPriceComparisonList data={data} />
      <div className="mt-6 text-center flex justify-center">
        <BaseButton
          onClick={closeModal}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          닫기
        </BaseButton>
      </div>
    </BaseModal>
  );
}
