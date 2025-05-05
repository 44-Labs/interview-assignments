export default function GolfPriceFilterBoxSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-10 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
