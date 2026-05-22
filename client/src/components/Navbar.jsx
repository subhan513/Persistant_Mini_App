const Navbar = ({ setOpen }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3 sm:p-5 w-full bg-white border-b border-gray-200">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 w-full sm:w-auto text-center sm:text-left">
        Smart Notes
      </div>
      <div className="w-full sm:flex-1 md:w-auto md:min-w-[200px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 p-2 rounded text-sm sm:text-base"
        />
      </div>
      <div className="w-full sm:w-auto">
        <button
          className="w-full sm:w-auto bg-blue-600 text-white px-3 sm:px-4 py-2 rounded cursor-pointer hover:bg-blue-700 text-sm sm:text-base font-medium"
          onClick={() => setOpen(true)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Navbar;
