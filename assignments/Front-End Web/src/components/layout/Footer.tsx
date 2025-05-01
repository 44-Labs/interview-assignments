export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">© 2024 Golf Course Market</div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              이용약관
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              개인정보처리방침
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              문의하기
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
