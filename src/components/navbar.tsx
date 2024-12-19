
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex items-center justify-between p-5 bg-gradient-to-l from-blue-900 to-blue-400'>
        <div className='flex items-center gap-5'>
            <Image src={"/assets/logo.png"} alt='Logo Image' width={80} height={80}/>
             <h3 className='text-gray-50 text-4xl font-bold'>Ishrat EnterPrises</h3>
        </div>
      <nav className=' w-[50%] pl-10'>
        <ul className='flex items-start gap-12 text-gray-50 mr-16 text-xl font-semibold p-2 '>
            <li className=' border-b-4 border-transparent  hover:text-bold hover:border-b-4 hover:border-gray-300 flex  items-center gap-3  '> <FaHome /> <Link href={"/"}>Home</Link></li>
            <li  className=' border-b-4 border-transparent  hover:text-bold hover:border-b-4 hover:border-gray-300 flex  items-center gap-3  '> <FaPeopleGroup /> <Link href={"/about"}>About Us</Link></li>
            <li  className=' border-b-4 border-transparent hover:text-bold hover:border-b-4 hover:border-gray-300 flex  items-center gap-3 '> <GrGallery /><Link href={"/products"}>Products</Link></li>
            <li  className=' border-b-4 border-transparent  hover:text-bold hover:border-b-4 hover:border-gray-300 flex  items-center gap-3 '> <IoMdContacts /><Link href={"/contact"}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>

    
  )
}

export default Navbar;
