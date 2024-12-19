import Image from "next/image"
export default function Clients(){
    const images = [
        '/assets/abbott.jpg',
        '/assets/balochistan-uni.png',
        '/assets/download.jpeg',
        '/assets/fuu.png',
        '/assets/gsop.jpeg',
        '/assets/hamdard.png',
        '/assets/jamshoro-university.jpeg',
        '/assets/jinnah-uni.jpeg',
        '/assets/ku.jpeg',
        '/assets/LUAWMS-Logo.jpeg',
        '/assets/mbku.png',
        '/assets/mfd.png',
        '/assets/ned.png',
        '/assets/niog.png',
        '/assets/novartis.png',
        '/assets/paec.png',
        '/assets/parc.png',
        '/assets/pcsir.png',
        '/assets/salu.jpg',
        '/assets/ssgc.svg',
        '/assets/suparco.png',
        '/assets/ums.png',
        '/assets/ziauddin.jpeg',
        '/assets/novartis.png',       
    ]
    return(
        <>
        
        <div className="w-full h-fit flex items-center flex-col justify-center mt-10 pt-10">

            <div><h1 className="text-6xl font-bold pb-10  "> Our Clients</h1></div>
            <div className=" grid grid-cols-6 grid-flow-row gap-4 border-2 border-black p-5">

            {images.map((src,index)=>(
                <Image
                key={index}
                src={src}
                alt = {`image ${index+1}`}
                width={200}
                height={200}
                className="border bg-white p-5 border-black w-[200px] h-[200px] rounded-lg shadow-2xl transform transition-transform hover:scale-110"
                
                />
            ))}
            </div>
        

            
        </div>
        </>
    )
}