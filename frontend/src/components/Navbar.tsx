

const Navbar = () => {
  return (
    <>
    <div className=" h-16 w-full rounded-[100%] flex justify-center items-center mx-auto">
        <div className="content w-[80%] bg-zinc-950 h-[80%] flex justify-between items-center ">
            <div className="flex items-center">
            <div className="text-white font-title font-extrabold tracking-wider">INVO</div>
            <div className="text-orange-400 font-title text-3xl font-bold">X</div>
            </div>
            <div className="flex justify-between items-center w-[30%]">
            <div className="text-white font-montserrat ">Blog</div>
            <div className="text-white font-montserrat ">Know More</div>
            <div className="text-white font-montserrat">Contact us</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar