export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex text-2xl font-bold">
          <p className="text-white">Toyota</p>
          <p className="text-red-500">Tech</p>
        </div>


        <nav className="hidden md:flex gap-6 text-sm">

          <button >☰</button>
        </nav>

      </div>
    </header>
  );
}
