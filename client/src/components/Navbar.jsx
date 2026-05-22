
const Navbar = ({setOpen}) => {
  return (
    <div className="flex items-center justify-between p-5 w-full">
      <div className="text-4xl w-[40%]">
Smart Notes
      </div>
      <div className="w-[40%]">
        <input type="text" placeholder="Search Notes ..." className="w-full border border-black p-2"/>
      </div>
      <div>
        <button className="bg-blue-900 text-white p-4 rounded cursor-pointer" onClick={()=>setOpen(true)}>Create Notes</button>
      </div>
    </div>
  )
}

export default Navbar