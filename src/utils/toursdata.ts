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
  included: string[];
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
  // !THIS IS THE ARCH TOUR
  {
    id: "cdmx-essentials-tour",
    locales: ["en", "es"],
    availability: { type: [0, 1, 2, 3, 4, 5, 6], time: ["9:30am"] },
    tourName: "arch.name",
    tourType: "Bike",
    price: 950,
    duration: "4.5hrs -20km",
    cap: "15",
    minGuests: "1",
    description: "arch.desc",
    included: ["rental", "taco", "guide"],
    placesToVisit: [
      "Ciudadela",
      "Regina Street",
      "Zocalo",
      "Alameda Park",
      "Revolution Monument",
      "Reforma Avenue",
      "Independence Angel",
      "Chapultepec Castle",
      "Condesa Neighborhood",
      "Parque México",
      "Roma Norte",
    ],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/thumb_card_architecture_downtown-Xrjt2qR8AIBKXBqqSCXyzFX041dEmq.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/thumb_card_architecture_downtown-Xrjt2qR8AIBKXBqqSCXyzFX041dEmq.png",
    thumbES: "",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert1-min-wdW7K1XVxO1KgUMev6sHIC7OyDj5B0.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert3-min-W1xPmU2xk7JDGXx22tO6PRB5EKvNH1.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert4-min-ZvKlrks91mljhF7wd0uO3eDl8vyInA.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert5-min-19xnz7DODrPP3skPh3ZqCxOeUX6SLH.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert6-min-0AjQwhL7mnUZHuF1Vec8GeqOkvnP1I.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-essentials-tour/arch_vert7-min-my0xiu0Si9IuqupnCjZflzTIkKeMz2.jpg",
        alt: "Image of Architectural Bike Tour in Mexico City",
      },
    ],
  },
  {
    id: "cdmx-taco-tour",
    locales: ["en", "es"],
    availability: { type: [3, 4, 5, 6], time: ["3:00pm"] },
    tourName: "taco.name",
    tourType: "Bike",
    price: 1100,
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
    minGuests: "2",
    description: "taco.desc",
    included: ["bike", "food", "guide", "hydration"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/thumbcard_taco-nF2Tixyz9x7Zrqkd1KJ2zF6BPSoNTy.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/thumbcard_taco-nF2Tixyz9x7Zrqkd1KJ2zF6BPSoNTy.png",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/thumbcard_taco-nF2Tixyz9x7Zrqkd1KJ2zF6BPSoNTy.png",
    imgAlt: "Image of Taco Bike Tour Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    coords: { lat: 19.42755, lng: -99.15569 },
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/taco_vert1-min-wvm6J9QDTtNZWHET7G6iLu5GpD6jat.webp",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/taco_vert2-min-YHb7PS0ZWVpLM89va7dNK4HLMIjJq5.webp",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/taco_vert3-min-jw56CJfBCAZzLx5PiOa3PVFjPkDolZ.webp",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/taco_vert4-min-QWDeUm72PrIkJG2giogkQYAIAWqlsO.webp",
        alt: "Photo from the Taco Bike Tour of Downtown Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-taco-tour/taco_vert4-min-QWDeUm72PrIkJG2giogkQYAIAWqlsO.webp",
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
    minGuests: "2",
    description: "coyo.desc",
    shortDescription: "coyo.shortDesc",
    included: ["rental", "carnitas", "wateroftheday", "beer","guide"], // these are the translation keys btw
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/thumb_frida-ThktYvrLpi4ignm9Z4GvX7oKWsRkwD.webp",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/thumb_frida-ThktYvrLpi4ignm9Z4GvX7oKWsRkwD.webp",
    thumbES: "",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    meetingAddr: "Vito Alessio Robles 182, Florida, Mexico City, CDMX, Mexico",
    googleMapsLink: "https://goo.gl/maps/jd1YJMJFVGNiykkM9",
    coords: { lat: 19.35203, lng: -99.17984 },
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/frida_vert1-min-jZZXMpf5OfdrVr5Te8qoEFO15ohj9E.webp",
        alt: "Frida Bike Tour Coyoacán",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/frida_vert2-min-i9KEIU3USu3N9TCQZ2fAOFvAd5TspW.webp",
        alt: "Frida Bike Tour Coyoacán",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/frida_vert3-min-Uj22XVKnDhSgwnw2Ejwk1jdxjmfBxu.webp",
        alt: "Frida Bike Tour Coyoacán",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/frida_vert4-min-0s9BZ0ZMfchvb3Uo7uRnpC2APRIpbi.webp",
        alt: "Frida Bike Tour Coyoacán",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/frida-coyoacan-tour/frida_vert5-min-s5jRK3Yc8LUD0Xq7ZmipBTca20SKmt.webp",
        alt: "Frida Bike Tour Coyoacán",
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
    minGuests: "2",
    description: "arch_walk_downtown.desc",
    included: ["guide", "hydration",],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_downtown-0jI9j6puk630T6rwaY5zXYq5YszM9y.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_downtown-0jI9j6puk630T6rwaY5zXYq5YszM9y.png",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_downtown-0jI9j6puk630T6rwaY5zXYq5YszM9y.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_5-yxp1I2uVkd3E8836ySPNl3tlSaUnUT.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_2-U26wDoc2JXuKHa6wga6oIjs5F5dADR.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_3-3nGFXTefemM0TzCdpJ7DjlBgTEysXC.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_4-tqnhaJ6MArDfvHQfa4ywDiDpErH8YS.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_1v2-vL0VTumFGhiiKRQ12IchHuC7suxnUx.jpg",
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
    minGuests: "2",
    description: "arch_walk_reforma.desc",
    included: ["guide", "hydration", "food"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_5-yxp1I2uVkd3E8836ySPNl3tlSaUnUT.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_2-U26wDoc2JXuKHa6wga6oIjs5F5dADR.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_3-3nGFXTefemM0TzCdpJ7DjlBgTEysXC.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_4-tqnhaJ6MArDfvHQfa4ywDiDpErH8YS.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_1v2-vL0VTumFGhiiKRQ12IchHuC7suxnUx.jpg",
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
    minGuests: "2",
    description: "walkingroma.desc",
    included: ["guide", "hydration", "taco"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_arch_reforma-mT54mdhthM558v159LwgmJIuLKrGiB.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_5-yxp1I2uVkd3E8836ySPNl3tlSaUnUT.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_2-U26wDoc2JXuKHa6wga6oIjs5F5dADR.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_3-3nGFXTefemM0TzCdpJ7DjlBgTEysXC.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_4-tqnhaJ6MArDfvHQfa4ywDiDpErH8YS.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_1v2-vL0VTumFGhiiKRQ12IchHuC7suxnUx.jpg",
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
    minGuests: "2",
    description: "walkingtaco.desc",
    included: ["rental", "food", "hydration", "beer","guide"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_taco_downtown-2zHBj9kSxYk6fqFjxGrO5VMZcZWUgC.png",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_taco_downtown-2zHBj9kSxYk6fqFjxGrO5VMZcZWUgC.png",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/walking_taco_downtown-2zHBj9kSxYk6fqFjxGrO5VMZcZWUgC.png",
    imgAlt: "Image of Architectural Walking Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_5-yxp1I2uVkd3E8836ySPNl3tlSaUnUT.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_2-U26wDoc2JXuKHa6wga6oIjs5F5dADR.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_3-3nGFXTefemM0TzCdpJ7DjlBgTEysXC.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_4-tqnhaJ6MArDfvHQfa4ywDiDpErH8YS.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/WalkingTours/wt_downtown_mexico_city/arch_1v2-vL0VTumFGhiiKRQ12IchHuC7suxnUx.jpg",
        alt: "Image of Architectural Walking Tour in Mexico City",
      },
    ],
  },
  {
    id: "mexico-city-north-side-tour",
    tourName: "northside.name",
    tourType: "Bike",
    locales: ["en"],
    availability: { type: [0, 3, 5], time: ["9:30am"] },
    price: 950,
    duration: "4hrs",
    cap: "10",
    minGuests: "2",
    description: "northside.desc",
    included: ["bike", "food", "hydration", "guide"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/thumb_card_north_side-MlHjHZVjOsJps5TxTO8eLQzaLd4mp3.webp",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/thumb_card_north_side-MlHjHZVjOsJps5TxTO8eLQzaLd4mp3.webp",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/thumb_card_north_side-MlHjHZVjOsJps5TxTO8eLQzaLd4mp3.webp",
    imgAlt: "Image of Urban Bike Tour North in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/urban_1-RuxVRo7a4pOQBOwmjopmkQsfjjpxVD.webp",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/urban_2-9ljc5T3wlsaLBN9GeSVM431KvpzDVw.webp",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/urban_3-4tl7dspu3xzhW2GmvL8puIWT9yxHcP.webp",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/urban_4-FpdpoJGNE56I1rvp2p6lqP8q1A7mdk.webp",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-urban-tour/urban_5-rCmRgNdsJx6PmAz8SsTXXD6D4O3tzw.webp",
        alt: "Photo from the Urban Bike Tour CDMX",
      },
    ],
  },
  {
    id: "cdmx-markets-tour",
    locales: ["es", "en"],
    availability: { type: [0,1,4,6], time: ["10:00am"] },
    tourName: "markets.name",
    tourType: "Bike",
    price: 1100,
    duration: "5hrs - 15km",
    placesToVisit: [
      "Juárez",
      "Ant. Doctores",
      "Hidalgo",
      "San Juan",
      "Ciudadela",
    ],
    cap: "12",
    minGuests: "2",
    description: "markets.desc",
    included: ["rental", "food", "hydration", "guide"],
    imgSrc:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/thumb_card_markets-xMcF4S3FoWm9cOonwPdVphHhRWMRT7.webp",
    thumbEN:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/thumb_card_markets-xMcF4S3FoWm9cOonwPdVphHhRWMRT7.webp",
    thumbES:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/thumb_card_markets-xMcF4S3FoWm9cOonwPdVphHhRWMRT7.webp",
    imgAlt: "Image of Market Bike Tour in Mexico City",
    meetingAddr: "Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX",
    coords: { lat: 19.42755, lng: -99.15569 },
    googleMapsLink: "https://maps.app.goo.gl/mzJeRCR36R2p3aGG9",
    gallery: [
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/markets1-QBRRgPBJKDxDXWHp1AY5yYpLgBpwNf.webp",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/markets2-oQosEl1GKdLi8m073ktmsEeQmEDogL.webp",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/markets3-oHTghitFvA1uJghW3M92ZwvaWBOtKY.webp",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/markets4-AP6nmV0ByxxnynfOLUb1ooiJY4omIh.webp",
        alt: "Photo from Mexico City markets bike tour",
      },
      {
        src: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Tours/cdmx-markets-tour/markets5-O2EMtD94HrnjvWJMj22t1qmMIuzXT4.webp",
        alt: "Photo from Mexico City markets bike tour",
      },
    ],
  },
];
