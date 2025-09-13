'use dom';
import '@/global.css';

export default function HomeScreen() {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Home</h1>
        <p className="text-gray-600 text-lg">Welcome to your app!</p>
      </div>
    </div>
  );
}
