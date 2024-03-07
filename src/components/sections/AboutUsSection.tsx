import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ImageOverlay from "../layout/ImageOverlay";

const AboutUsSection = () => (
  <section>
    {/* Row 1 */}
    <div className='grid md:grid-cols-2	'>
      {/* Col 1 */}
      <div className='hidden md:block w-full h-full'>
        <Image
          className='w-full object-cover max-h-[30rem] md:max-h-[800px]'
          src='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg'
          alt='Image of Mexico City Bike Tour Guide'
          height={720}
          width={720}
          loading='lazy'
        />
      </div>
      <div className='w-full flex flex-col justify-center items-center p-5 md:p-16 text-center'>
        {/* Col 2 */}
        <SectionTitle>Architecture Bike Tours</SectionTitle>

        <p className='text-lg text-primary'>
          Somos un grupo de arquitectos enfocados en dar los mejores Tours en
          Bici en CDMX. Ven y descubre nuestras rutas especializadas en
          arquitectura, historia, gastronomía y urbanismo en lugares como el
          Centro Histórico, la Ciudad Universitaria, barrios emblemáticos como
          Coyoacán, Roma, Condesa y el bosque de Chapultepec.
        </p>
        <br />
        <p className='text-lg text-primary italic'>
          We are a group of architects focused on giving the best Bike Tours in
          Mexico City. Come and discover our specialized routes in architecture,
          history, gastronomy and urbanism in places such as the Historic
          Center, the University City, hotspots like Coyoacán, Roma, Condesa and
          monumental sites such as Chapultepec park.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
