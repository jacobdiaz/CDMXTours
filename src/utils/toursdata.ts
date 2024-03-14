import googleMapReact from "google-map-react";

export type ImageType = {
  src: string;
  alt: string;
};

export type Tour = {
  id: string;
  locales: string[];
  availability: {
    type: "Weekend" | "Weekday" | "Reservation";
    time?: string;
  };
  tourName: string;
  price: number;
  duration: string;
  cap: string;
  description: string;
  shortDescription?: string;
  included: string;
  imgSrc: string;
  imgAlt: string;
  meetingAddr: string;
  googleMapsLink: string;
  coords: googleMapReact.Coords;
  gallery: ImageType[];
  thumbES?: string;
  thumbEN?: string;
};

// TODO Turn this into an API Endpoint?
// TODO Instead of explicityly stating the image paths, we should look into grabbing the folder and dynamically generating the paths
export const Tours: Tour[] = [
  {
    id: "cdmx-essentials-tour",
    locales: ["en", "es"],
    availability: { type: "Weekday", time: "10:00am" },
    tourName: "essentials.name", // Translation ID in /translations/Tours.json
    price: 950,
    duration: "4hrs - 15km",
    cap: "10",
    description: "essentials.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-essentials.jpg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-essentials.jpg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-essentials.jpg",
    imgAlt: "Image of Essential Bike Tour of Downtown Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    coords: { lat: 19.42755, lng: -99.15569 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/essential_v2_1.jpg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/essential_v2_3.jpg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/essential_v2_2.jpg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/essential_v2_4.jpg	",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/essential_v2_5.jpg",
        alt: "Photo from the essentials tour mexico",
      },
    ],
  },
  {
    id: "cdmx-taco-tour",
    locales: ["en", "es"],
    availability: { type: "Weekend", time: "10:00am - 2:00pm" },
    tourName: "taco.name",
    price: 650,
    duration: "4hrs - 15km",
    cap: "10",
    description: "taco.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-taco.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-taco.jpeg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-taco.jpeg",
    imgAlt: "Image of Taco Bike Tour of Downtown Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    coords: { lat: 19.42755, lng: -99.15569 },
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
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_3v3.jpg",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_4.jpg%09	",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/TacoDowntown/taco_5v2.jpg",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
    ],
  },

  {
    id: "cdmx-architectural-tour",
    locales: ["en", "es"],
    availability: { type: "Weekend" },
    tourName: "arch.name",
    price: 500,
    duration: "4hrs -20km",
    cap: "15",
    description: "arch.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-arch.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-arch.jpeg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-arquitectura.jpeg",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
    ],
  },
  {
    id: "ruta-galerias",
    locales: ["es"],
    availability: { type: "Weekend", time: "10:00am" },
    tourName: "galerias.name", // Translation ID in /translations/Tours.json
    price: 550,
    duration: "4.5hrs - 18km",
    cap: "10",
    description: "galerias.desc",
    shortDescription: "galerias.shortDesc",
    included: "Renta de bicicleta, Comida, Hidratación, Guia",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-galerias.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-galerias.jpeg",
    imgAlt: "Image of Ruta Galerias Tour",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    coords: { lat: 19.42755, lng: -99.15569 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-1.jpeg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-4.jpeg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-3.jpeg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-2.jpeg",
        alt: "Photo from the essentials tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-5.jpeg",
        alt: "Photo from the essentials tour mexico",
      },
    ],
  },
  {
    id: "cdmx-south-side-bike-tour",
    locales: ["en"],
    availability: { type: "Weekday", time: "10:00am" },
    tourName: "southside.name", // Translation ID in /translations/Tours.json
    price: 850,
    duration: "4.5hrs",
    cap: "10",
    description: "southside.desc",
    shortDescription: "southside.shortDesc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-cdmx-south.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-cdmx-south.jpeg",
    imgAlt: "Image of south side Mexico City tour",
    meetingAddr: "Vito Alessio Robles 182, Florida, Mexico City, CDMX, Mexico",
    googleMapsLink: "https://goo.gl/maps/jd1YJMJFVGNiykkM9",
    coords: { lat: 19.35203, lng: -99.17984 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_1.jpg",
        alt: "Photo from the South Side Tour Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_2.jpg",
        alt: "Photo from the South Side Tour Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_3.jpg",
        alt: "Photo from the South Side Tour Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_4.jpg	",
        alt: "Photo from the South Side Tour Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_5.jpg",
        alt: "Photo from the South Side Tour Mexico City",
      },
    ],
  },
  {
    id: "cdmx-urban-tour",
    tourName: "urban.name",
    locales: ["en", "es"],
    availability: { type: "Reservation" },
    price: 550,
    duration: "4hrs - 25km",
    cap: "10",
    description: "urban.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-cdmx-north.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-cdmx-north.jpeg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-mansiones.jpg",
    imgAlt: "Image of Urban Bike Tour North in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_1.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_2_v2.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_3v2.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_4v2.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_5.jpg",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
    ],
  },
  {
    id: "cdmx-coyoacan-tour",
    locales: ["en", "es"],
    availability: { type: "Weekday", time: "10:00am" },
    tourName: "coyo.name",
    price: 550,
    duration: "4hrs - 18km",
    cap: "15",
    description: "coyo.desc",
    shortDescription: "coyo.shortDesc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-coyo.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/EN/thumb-coyo.jpeg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-coyoacan.jpeg",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    meetingAddr: "Vito Alessio Robles 182, Florida, Mexico City, CDMX, Mexico",
    googleMapsLink: "https://goo.gl/maps/jd1YJMJFVGNiykkM9",
    coords: { lat: 19.35203, lng: -99.17984 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_1.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_2.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_3.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_4.jpg",
        alt: "",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_5.jpg",
        alt: "",
      },
    ],
  },
  {
    id: "cdmx-markets-tour",
    locales: ["es"],
    availability: { type: "Reservation" },
    tourName: "markets.name",
    price: 600,
    duration: "5hrs - 15km",
    cap: "12",
    description: "markets.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-mercados.jpeg",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-mercados.jpeg",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/thumbnails/ES/thumb-mercados.jpeg",
    imgAlt: "Image of Market Bike Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
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
  // {
  //   id: "cdmx-modern-architecture-tour",
  //   locales: ["es"],
  //   availability: { type: "Reservation" },
  //   tourName: "modernarch.name",
  //   price: 450,
  //   duration: "5hrs - 10km",
  //   cap: "12",
  //   description: "modernarch.desc",
  //   included: "Bikes, Helmets, Tacos, Hydration ",
  //   imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_modArch.jpg",
  //   imgAlt:
  //     "Image of Modern Architecture Tour, San Angel a C.U. in Mexico City",
  //   meetingAddr: "Calle Versalles 88, 06600 Mexico City",
  //   coords: { lat: 19.42755, lng: -99.15569 },
  //   googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
  //   gallery: [
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch1.jpg",
  //       alt: "",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch2.jpg",
  //       alt: "",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch3.jpg",
  //       alt: "",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch4.jpg",
  //       alt: "",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/ModernArch/modern_arch5.jpg",
  //       alt: "",
  //     },
  //   ],
  // },
  // {
  //   id: "cdmx-gallery-tour",
  //   locales: ["es"],
  //   availability: { type: "Reservation" },
  //   tourName: "galleries.name",
  //   price: 550,
  //   duration: "4hrs - 10km",
  //   cap: "12",
  //   description: "galleries.desc",
  //   included: "Bikes, Helmets, Tacos, Hydration ",
  //   imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_gallery.jpg",
  //   imgAlt: "Image of Gallery Tour in Mexico City",
  //   meetingAddr: "Calle Versalles 88, 06600 Mexico City",
  //   coords: { lat: 19.42755, lng: -99.15569 },
  //   googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
  //   gallery: [
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_1.jpg",
  //       alt: "Photo from the art galleries bike tour, Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_2.jpg",
  //       alt: "Photo from the art galleries bike tour, Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_3.jpg",
  //       alt: "Photo from the art galleries bike tour, Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_4.jpg",
  //       alt: "Photo from the art galleries bike tour, Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Galleries/galleries_5.jpg",
  //       alt: "Photo from the art galleries bike tour, Mexico City",
  //     },
  //   ],
  // },
  // {
  //   id: "cdmx-tlatelolco-tour",
  //   locales: ["es"],
  //   availability: { type: "Reservation" },
  //   tourName: "tlatelolco.name",
  //   price: 550,
  //   duration: "4hrs - 10km",
  //   cap: "15",
  //   description: "tlatelolco.desc",
  //   included: "Bikes, Helmets, Tacos, Hydration ",
  //   imgSrc: "https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_tlatelolco.jpg",
  //   imgAlt: "Image of Tlatelolco Tour in Mexico City",
  //   meetingAddr: "Calle Versalles 88, 06600 Mexico City",
  //   coords: { lat: 19.42755, lng: -99.15569 },
  //   googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
  //   gallery: [
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco2.jpg",
  //       alt: "Photo from Tlatelolco bike tour in Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco1.jpg",
  //       alt: "Photo from Tlatelolco bike tour in Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco3.jpg",
  //       alt: "Photo from Tlatelolco bike tour in Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco4.jpg",
  //       alt: "Photo from Tlatelolco bike tour in Mexico City",
  //     },
  //     {
  //       src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Tlatelolco/tlatelolco5.jpg",
  //       alt: "Photo from Tlatelolco bike tour in Mexico City",
  //     },
  //   ],
  // },
];
