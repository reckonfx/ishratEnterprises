import Image from "next/image";
const images = [
    '/assets/products/Anemo-Meters.jpeg',
    '/assets/products/auto-claves.jpg',
    '/assets/products/balance.webp',
    '/assets/products/c792d90b7dbe68f2c67b5b245fe9e933.jpg',
    '/assets/products/centrifuge-machines.jpg',
    '/assets/products/Colorimeters..jpeg',
    '/assets/products/deionization-plants-500x500.webp',
    '/assets/products/EMF-822A_G.jpeg',
    '/assets/products/Filtration-Product..avif',
    '/assets/products/FinniPippetes..jpeg',
    '/assets/products/gps.jpeg',
    '/assets/products/GrainMoistureMeters..jpeg',
    '/assets/products/Heating-Mantles..jpeg',
    '/assets/products/Homogenizes..jpeg',
    '/assets/products/Industrial_furnace.jpg',
    '/assets/products/Magnetic-Stirrer-Hotplates.jpeg',
    '/assets/products/Mechanical-Stirrers.jpeg',
    '/assets/products/Microscopes.jpeg',
    '/assets/products/Microtome.jpeg',
    '/assets/products/Multimedia-Projectors.jpeg',
    '/assets/products/NU-99729VFT-07.jpg',
    '/assets/products/Oven&Incubators..jpeg',
    '/assets/products/Plastic-Porcelain-Wares.jpeg',
    '/assets/products/Prepared-Slides.jpeg',
    '/assets/products/prev_BaS-1935-RFM330M-lab_refrac-front.jpg',
    '/assets/products/Rotary-Evaporators.jpeg',
    '/assets/products/Sieves-Shakers.jpeg',
    '/assets/products/Spectrophotometers.jpeg',
    '/assets/products/Stabilizers-UPS.jpeg',
    '/assets/products/Ultrasonic-Shaking-Water-Baths.jpeg',
    '/assets/products/Ultraviolet-Lamps.jpeg',
    '/assets/products/Vacuum-Pumps.jpeg',
    '/assets/products/Viscometers.jpeg',
    '/assets/products/Water-Testing-Kits.jpeg',
  ];
  
  const Products = () => {
    return (
      <section>
        <div>
          <h1 className="text-6xl font-bold text-center m-10 p-10">
            Products Gallery
          </h1>
          <div className="grid grid-cols-5 gap-4 p-4">
            {images.map((image, index) => {
              // Extract file name from the path
              const fileName = image.split('/').pop()?.replace(/\.[^/.]+$/, '  ') || "image";
  
              return (
                <div key={index} className="w-full h-auto text-center">
                  <Image
                    src={image}
                    alt={fileName}
                    width={200}
                    height={200}
                    className="w-full h-[200px] object-cover border border-gray-400 rounded-xl transform transition-transform hover:scale-110"
                  />
                  <p className="mt-2 text-lg font-medium text-gray-600">{fileName}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div><h2 className="text-center pt-5">Attention :Kindly Note that these images are for reference only </h2></div>
      </section>
    );
  };
  
  export default Products;
  