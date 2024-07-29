import googleMapReact from "google-map-react";

export type ImageType = {
  src: string;
  alt: string;
};

export type Tour = {
  id: string;
  locales: string[];
  availability: {
    type: "Weekend" | "Weekday" | "Reservation" | number[];
    time?: string[];
  };
  tourName: string;
  tourType?: "Bike" | "Walking"; //todo make this required
  placesToVisit?: string[];
  price: number;
  duration: string;
  cap: string;
  minGuests: string;
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
    locales: ["en"],
    availability: { type: [0, 1, 2, 3, 4, 5, 6], time: ["9:30am"] },
    tourName: "arch.name",
    tourType: "Bike",
    price: 950,
    duration: "4.5hrs -20km",
    cap: "15",
    minGuests: "1",
    description: "arch.desc",
    included: "Dutch Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_architecture_downtown.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_architecture_downtown.png",
    thumbES: "",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/arch_6.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/arch_2.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/arch_3.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/arch_4.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Essentials/arch_8.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
    ],
  },
  {
    id: "cdmx-taco-tour",
    locales: ["en", "es"],
    availability: { type: [3, 4, 5, 6], time: ["11:30am", "5:30pm"] },
    tourName: "taco.name",
    tourType: "Bike",
    price: 750,
    duration: "4.5hrs - 20km",
    placesToVisit: [
      "Ciudadela",
      "Regina Street",
      "Zocalo",
      "Templo Mayor",
      "Garibaldi",
      "Alameda",
    ],
    cap: "10",
    minGuests: "1",
    description: "taco.desc",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_taco.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_taco.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_taco.png",
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
    id: "frida-coyoacan-tour",
    locales: ["en"],
    availability: { type: "Weekday", time: ["10:00am"] },
    tourName: "coyo.name",
    tourType: "Bike",
    placesToVisit: [
      "San Ángel",
      "Frida Kahlo Studio",
      "Santa Catarina",
      "Jardín Hidalgo",
      "FK House outside",
    ],
    price: 950,
    duration: "4hrs - 14km",
    cap: "15",
    minGuests: "1",
    description: "coyo.desc",
    shortDescription: "coyo.shortDesc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_frida.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_frida.png",
    thumbES: "",
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
    id: "architectural-tour-walking-downtown",
    locales: ["en"],
    availability: { type: [0, 1, 2, 3, 4, 5, 6], time: ["2:00pm"] },
    tourName: "arch_walk_downtown.name",
    tourType: "Walking",
    placesToVisit: [
      "Alameda",
      "Bellas Artes",
      "Plaza Tolsá",
      "Madero",
      "Zocalo",
      "Templo Mayor",
    ],
    price: 550,
    duration: "3hrs -4km",
    cap: "15",
    minGuests: "1",
    description: "arch_walk_downtown.desc",
    included: "Guide, Taco Stop, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_downtown.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_downtown.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_downtown.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
    ],
  },
  {
    id: "architectural-tour-walking-reforma",
    locales: ["en"],
    availability: { type: [2, 3, 4, 5], time: ["2:00pm"] },
    tourName: "arch_walk_reforma.name",
    tourType: "Walking",
    placesToVisit: ["Reforma Ave.", "Juárez", "Cuauhtemoc", "Chapultepec"],
    price: 550,
    duration: "3hrs - 5km",
    cap: "15",
    minGuests: "1",
    description: "arch_walk_reforma.desc",
    included: "Guide, Taco Stop, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_reforma.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_reforma.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_reforma.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
    ],
  },
  {
    id: "architectural-tour-walking-roma",
    locales: ["en"],
    availability: { type: [1, 3, 5], time: ["2:00pm"] },
    tourName: "walkingroma.name",
    tourType: "Walking",
    placesToVisit: [
      "La Romita",
      "Roma Norte",
      "Rio de Janeiro Square",
      "Parque Mexico",
      "Condesa",
    ],
    price: 550,
    duration: "3hrs - 5km",
    cap: "15",
    minGuests: "1",
    description: "walkingroma.desc",
    included: "Guide, Taco Stop, Hydration",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_roma.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_roma.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_arch_roma.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
    ],
  },
  {
    id: "taco-walking-downtown-cdmx",
    locales: ["en"],
    availability: { type: [3, 4, 5], time: ["2:00pm"] },
    tourName: "walkingtaco.name",
    tourType: "Walking",
    placesToVisit: [
      "Ciudadela",
      "Regina Street",
      "Zocalo",
      "Templo Mayor",
      "Garibaldi",
    ],
    price: 750,
    duration: "4hrs - 5km",
    cap: "15",
    minGuests: "1",
    description: "walkingtaco.desc",
    included: "Guide, 5-6 Tacos, Hydration, 1 Beer",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_taco_downtown.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_taco_downtown.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/walking/walking_taco_downtown.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
    ],
  },
  {
    id: "taco-bike-nocturno-cdmx",
    locales: ["es"],
    availability: { type: "Weekend", time: [] },
    tourName: "taco-bike-nocturno.name",
    tourType: "Bike",
    placesToVisit: [
      "Ciudadela",
      "Regina",
      "Zocalo",
      "Templo Mayor",
      "Garibaldi",
      "Alameda",
    ],
    price: 950,
    duration: "4.5hrs - 14km",
    cap: "15",
    minGuests: "1",
    description: "taco-bike-nocturno.desc",
    included: "Bicicleta, 5-6 Tacos, Hidratación, 1 Cerveza",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_taco_tour_nocturno.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_taco_tour_nocturno.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_taco_tour_nocturno.png",
    imgAlt: "Image of Taco bike Tour Nocturno",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_5.jpg",
        alt: "Image of Taco bike Tour in Centro Historico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_2.jpg",
        alt: "Image of Taco bike Tour in Centro Historico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_3.jpg",
        alt: "Image of Taco bike Tour in Centro Historico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
        alt: "Image of Taco bike Tour in Centro Historico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1v2.jpg",
        alt: "Image of Taco bike Tour in Centro Historico",
      },
    ],
  },

  {
    id: "ruta-galerias",
    locales: ["es"],
    availability: { type: [6], time: ["10:00am"] },
    tourName: "galerias.name", // Translation ID in /translations/Tours.json
    tourType: "Bike",
    price: 750,
    duration: "4.5hrs - 20km",
    placesToVisit: [
      "Ciudadela",
      "Regina",
      "Zocalo",
      "Templo Mayor",
      "Garibaldi",
      "Alameda",
    ],
    cap: "10",
    minGuests: "1",
    description: "galerias.desc",
    shortDescription: "galerias.shortDesc",
    included: "Bicicleta, 5-6 Tacos, 1 cerveza, Hidratación",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_galleries.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_galleries.png",
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
    id: "contemporary-bike-tour",
    locales: ["es"],
    availability: { type: [5, 6], time: ["10:30am"] },
    tourName: "contemporary.name", // Translation ID in /translations/Tours.json
    tourType: "Bike",
    price: 750,
    duration: "4.5hrs - 15km",
    placesToVisit: [
      "Guadalupe Inn",
      "San José Insurg.",
      "Mixcoac",
      "P. Toros / E. Azul",
      "CUPA",
      "Del Valle",
      "Xoco",
    ],
    cap: "10",
    minGuests: "2",
    description: "contemporary.desc",
    included: "Bicicleta, 5-6 Tacos, 1 cerveza, Hidratación",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_modern.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_modern.png",
    imgAlt: "Image of Ruta Galerias Tour",
    meetingAddr: "Calle Versalles 88, 06600 Mexico City",
    googleMapsLink: "https://goo.gl/maps/7r4jXBxTbU3V6RQS7",
    coords: { lat: 19.42755, lng: -99.15569 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-1.jpeg",
        alt: "Photo from the contemporary tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-4.jpeg",
        alt: "Photo from the contemporary tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-3.jpeg",
        alt: "Photo from the contemporary tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-2.jpeg",
        alt: "Photo from the contemporary tour mexico",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/RutaGalerias/ruta-5.jpeg",
        alt: "Photo from the contemporary tour mexico",
      },
    ],
  },
  {
    id: "cdmx-urban-tour",
    tourName: "urban.name",
    tourType: "Bike",
    locales: ["en"],
    availability: { type: [0, 3, 5], time: ["9:30am"] },
    price: 750,
    duration: "4hrs",
    cap: "10",
    minGuests: "2",
    description: "urban.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_north_side.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_north_side.png",
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
    id: "porfiriana-bike-tour",
    locales: ["es"],
    availability: { type: "Weekday", time: ["10:00am"] },
    tourName: "porfiriana.name",
    tourType: "Bike",
    placesToVisit: [
      "Col. Juárez",
      "San Rafael",
      "Sta Maria La Ribera",
      "Atlampa",
      "Clavería",
    ],
    price: 750,
    duration: "4hrs - 20km",
    cap: "15",
    minGuests: "1",
    description: "porfiriana.desc",
    included: "Bicicleta, Alimentos, Hidratación ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_porfiriano.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_porfiriano.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_porfiriano.png",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    meetingAddr: "Vito Alessio Robles 182, Florida, Mexico City, CDMX, Mexico",
    googleMapsLink: "https://goo.gl/maps/jd1YJMJFVGNiykkM9",
    coords: { lat: 19.35203, lng: -99.17984 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_1.jpg",
        alt: "Image of porfiriana bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_2.jpg",
        alt: "Image of porfiriana bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_3.jpg",
        alt: "Image of porfiriana bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_4.jpg",
        alt: "Image of porfiriana bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_5.jpg",
        alt: "Image of porfiriana bike tour in Mexico City",
      },
    ],
  },

  {
    id: "tlatelolco-bike-tour",
    locales: ["es"],
    availability: { type: [5, 6], time: ["2:30"] },
    tourName: "tlatelolco.name",
    tourType: "Bike",
    placesToVisit: [
      "M. A la Rev.",
      "B. Vasconcelos",
      "T. Chopo (Sab)",
      "T. Lagunilla (Dom)",
      "U.H. Tlatelolco",
      "P. 3 culturas",
      "Terraza Kaluz",
    ],
    price: 750,
    duration: "4.5hrs - 20km",
    cap: "15",
    minGuests: "1",
    description: "tlatelolco.desc",
    included: "Bicicleta, Cafe y pan, Hidratación, Guia",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_tlatelolco.png	",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_tlatelolco.png	",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_tlatelolco.png	",
    imgAlt: "Image of Tlatelolco Bike Tour in CDMX",
    meetingAddr: "Vito Alessio Robles 182, Florida, Mexico City, CDMX, Mexico",
    googleMapsLink: "https://goo.gl/maps/jd1YJMJFVGNiykkM9",
    coords: { lat: 19.35203, lng: -99.17984 },
    gallery: [
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_1.jpg",
        alt: "Image of Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_2.jpg",
        alt: "Image of Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_3.jpg",
        alt: "Image of Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_4.jpg",
        alt: "Image of Tlatelolco bike tour in Mexico City",
      },
      {
        src: "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Coyoacan/coy_v3_5.jpg",
        alt: "Image of Tlatelolco bike tour in Mexico City",
      },
    ],
  },

  {
    id: "cdmx-markets-tour",
    locales: ["es", "en"],
    availability: { type: [0], time: ["9:30am"] },
    tourName: "markets.name",
    tourType: "Bike",
    price: 850,
    duration: "5hrs - 15km",
    placesToVisit: [
      "Juárez",
      "Ant. Doctores",
      "Hidalgo",
      "Jamaica",
      "San Juan",
      "Ciudadela",
    ],
    cap: "12",
    minGuests: "2",
    description: "markets.desc",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_markets.png",
    thumbEN:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_markets.png",
    thumbES:
      "https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/es/card_markets.png",
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
];
