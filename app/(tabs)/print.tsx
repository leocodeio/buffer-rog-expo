'use dom';
import '@/global.css';

export default function PrintScreen() {
  return (
    <div className="flex-1 flex items-center justify-center bg-green-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Print</h1>
        <p className="text-gray-600 text-lg mb-6">Print services!</p>
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-green-700 font-medium">Ready to Print</span>
          </div>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Start Printing
          </button>
        </div>
      </div>
    </div>
  );
}