export type ImageType = {
  src: string;
  alt: string;
};

export type Tour = {
  id: number;
  tourName: string;
  price: number;
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
// TODO Instead of explicityly stating the image paths, we should look into grabbing the folder and dynamically generating the paths
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
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_2.jpg",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_3.jpg",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_4.jpg%09	",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_5.jpg",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
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
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_urb.jpg",
    imgAlt: "Image of Urban Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_1.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_2.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_3.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_4.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_5.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
    ],
  },
  {
    id: 5,
    tourName: "markets.name",
    price: 550,
    duration: "5hrs - 15km",
    cap: "12",
    description: "markets.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_mercados.png",
    imgAlt: "Image of Market Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets1.jpg",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets2.jpg",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets3.jpg",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets4.jpg",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Markets/markets5.jpg",
        alt: "Photo from Mexico City markets bike tour",
      },
    ],
  },
  {
    id: 6,
    tourName: "modernarch.name",
    price: 450,
    duration: "5hrs - 10km",
    cap: "12",
    description: "modernarch.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_modArch.jpg",
    imgAlt:
      "Image of Modern Architecture Tour, San Angel a C.U. in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch4.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch5.jpg",
        alt: "",
      },
    ],
  },
  {
    id: 7,
    tourName: "galleries.name",
    price: 550,
    duration: "4hrs - 10km",
    cap: "12",
    description: "galleries.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_gallery.jpg",
    imgAlt: "Image of Gallery Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_1.jpg",
        alt: "Photo from the art galleries bike tour, Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_2.jpg",
        alt: "Photo from the art galleries bike tour, Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_3.jpg",
        alt: "Photo from the art galleries bike tour, Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_4.jpg",
        alt: "Photo from the art galleries bike tour, Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_5.jpg",
        alt: "Photo from the art galleries bike tour, Mexico City",
      },
    ],
  },
  {
    id: 8,
    tourName: "tlatelolco.name",
    price: 550,
    duration: "4hrs - 10km",
    cap: "15",
    description: "tlatelolco.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_tlatelolco.jpg",
    imgAlt: "Image of Tlatelolco Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco2.jpg",
        alt: "Photo from Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco1.jpg",
        alt: "Photo from Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco3.jpg",
        alt: "Photo from Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco4.jpg",
        alt: "Photo from Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco5.jpg",
        alt: "Photo from Tlatelolco bike tour in Mexico City",
      },
    ],
  },
];
