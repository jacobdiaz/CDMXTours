import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ImageOverlay from "../layout/ImageOverlay";

const AboutUsSection = () => (
  <section>
    {/* Row 1 */}
    <div className="grid md:grid-cols-2	">
      {/* Col 1 */}
      <div className="hidden md:block w-full h-full">
        <Image
          className="w-full object-cover max-h-[30rem] md:max-h-[800px]"
          src="https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg"
          alt="Image of Mexico City Bike Tour Guide"
          height={720}
          width={720}
          loading="lazy"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center p-5 md:p-16 text-center">
        {/* Col 2 */}
        <SectionTitle>Architecture Bike Tours</SectionTitle>

        <p className="text-lg text-primary">
          Somos un grupo de arquitectos enfocados en dar los mejores Tours en
          Bici en CDMX. Ven y descubre nuestras rutas especializadas en
          arquitectura, historia, gastronomía y urbanismo en lugares como el
          Centro Histórico, la Ciudad Universitaria, barrios emblemáticos como
          Coyoacán, Roma, Condesa y el bosque de Chapultepec.
        </p>
        <br />
        <p className="text-lg text-primary italic">
          We are a group of architects focused on giving the best Bike Tours in
          Mexico City. Come and discover our specialized routes in architecture,
          history, gastronomy and urbanism in places such as the Historic
          Center, the University City, hotspots like Coyoacán, Roma, Condesa and
          monumental sites such as Chapultepec park.
        </p>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] md:h-[30rem] overflow-hidden">
      <a className="relative" href="https://www.cdmxtours.com/es/book-a-tour ">
        <Image
          src="https://d252kj1i9nz0td.cloudfront.net/pages/Home/btn-toursenbici.jpeg"
          alt="Architectural Bike Tour in Mexico City"
          className="w-full h-full absolute object-cover md:object-center"
          height={540}
          style={{ objectPosition: "center 70%" }}
          width={720}
          loading="lazy"
        />
        <ImageOverlay />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-bold text-white text-center font-spartan">
            TOURS EN BICI <br />
            (Español)
          </p>
        </div>
      </a>
      <a
        className="relative mt-10 md:mt-0"
        href="https://www.cdmxtours.com/book-a-tour "
      >
        <Image
          src="https://d252kj1i9nz0td.cloudfront.net/pages/Home/btn-biketourscdmx.jpeg"
          alt="Image of the Roma Condesa Bike Tour CDMX"
          className="w-full h-full absolute object-cover"
          height={540}
          width={720}
          style={{ objectPosition: "center 70%" }}
          loading="lazy"
        />
        <ImageOverlay />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-bold text-white text-center">
            BIKE TOURS <br />
            (English)
          </p>
        </div>
      </a>
    </div>
  </section>
);

export default AboutUsSection;
