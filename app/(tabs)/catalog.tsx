'use dom';
import '@/global.css';

export default function CatalogScreen() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Catalog</h1>
        <p className="text-gray-600 text-lg mb-6">Browse our catalog!</p>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-gray-200 rounded mb-3"></div>
            <p className="text-sm text-gray-700">Product 1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-full h-20 bg-gray-200 rounded mb-3"></div>
            <p className="text-sm text-gray-700">Product 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}