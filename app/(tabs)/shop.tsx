'use dom';
import '@/global.css';

export default function ShopScreen() {
  return (
    <div className="flex-1 flex items-center justify-center bg-white min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shop</h1>
        <p className="text-gray-600 text-lg">Welcome to the Shop!</p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700">Browse our amazing products</p>
        </div>
      </div>
    </div>
  );
}