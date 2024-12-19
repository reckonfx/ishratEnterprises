import Image from "next/image"
import Link from "next/link"
export default function Hero(){
    return(
        <>
        <header className="w-full h-[600px] flex items-center justify-between">

            
            <div className="w-full h-full   bg-[url('/assets/hero-image.jpg')] bg-cover">
              <div className="w-[50%] h-[90%] bg-transparent mt-16 ml-10 flex flex-col items-start gap-10 ">
              <h1 className=" text-6xl text-white font-bold pt-24">Supplying Excellence <span className="text-blue-900">Since 2004</span> </h1>
              <h3 className="text-4xl text-white font-semibold ">Trusted Partner for Scientific Solutions</h3>
              <button className="w-[200px]  h-16 text-white rounded-2xl bg-blue-600 ml-[150px] hover:bg-blue-500 "><Link href={"/products"}>Explore Products</Link> </button>
              </div>
            </div>
            
        </header>
        </>
    )
}


// <div className="w-full">
//                 <Image src={"/assets/hero-image.jpg"} alt="hero image" width={600} height={600}  className="w-full h-[600px]"/>
//             </div>