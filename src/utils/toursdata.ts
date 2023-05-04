export type ImageType = {
  src: string;
  alt: string;
};

export type Tour = {
  id: Number;
  tourName: string;
  price: Number;
  duration: string;
  cap: string;
  description: string;
  included: string;
  imgSrc: string;
  imgAlt: string;
  meetingAddr: string;
  gallery: ImageType[];
};

// TODO Turn this into an API Endpoint?
export const Tours: Tour[] = [
  {
    id: 1,
    tourName: "taco.name", // Translation ID in /translations/Tours.json
    price: 650,
    duration: "4hrs - 15km",
    cap: "10",
    description: "taco.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_taco.jpg",
    imgAlt: "Image of Taco Bike Tour of Downtown Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_4.jpg%09	",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_5.jpg",
        alt: "",
      },
    ],
  },
  {
    id: 2,
    tourName: "coyo.name",
    price: 550,
    duration: "4hrs - 15km",
    cap: "15",
    description: "coyo.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_coyo.jpg",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_4.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_5.jpg",
        alt: "",
      },
    ],
  },
  {
    id: 3,
    tourName: "arch.name",
    price: 650,
    duration: "4hrs -20km",
    cap: "15",
    description: "arch.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_arch.jpg",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "",
      },
    ],
  },
  {
    id: 4,
    tourName: "urban.name",
    price: 650,
    duration: "4hrs - 25km",
    cap: "10",
    description: "urban.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_taco.jpg",
    imgAlt: "Image of Urban Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_4.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_5.jpg",
        alt: "",
      },
    ],
  },
];
