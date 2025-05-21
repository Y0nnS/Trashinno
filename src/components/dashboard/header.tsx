export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Welcome back, Phion!</h1>
        <div className="flex items-center gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">Get Sensor Data</button>
          <div className="w-9 h-9 bg-gray-200 rounded-full" />
          <span className="text-gray-700 text-sm">phion@example.com</span>
        </div>
      </div>
    </header>
  );
  }
  