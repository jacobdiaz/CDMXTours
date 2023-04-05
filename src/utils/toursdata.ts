type Image = {
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
  gallery: Image[];
};

// TODO Turn this into an API Endpoint?
export const Tours: Tour[] = [
  {
    id: 1,
    tourName: "TACO BIKE TOUR / DOWNTOWN CDMX",
    price: 650,
    duration: "4hrs - 15km",
    cap: "10",
    description:
      "Come and discover the origins of Mexico City, going from the main streets and squares to the lesser-known corners of the Historic Center. During the tour you will eat a wide variety of tacos, from pastor tacos to sweat basket tacos.",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://cdmxtours.s3.amazonaws.com/thumbnails/t_taco.jpg",
    imgAlt: "Image of Taco Bike Tour of Downtown Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [],
  },
  {
    id: 2,
    tourName: "COYOACÁN BIKE TOUR",
    price: 550,
    duration: "4hrs - 15km",
    cap: "15",
    description:
      "Coyoacán Bike Tour is more than Frida, come and ride from its wide Porfirian streets of the Carmen neighborhood to the pre-Hispanic alleys of the San Francisco quadrant and the Niño de Jesus neighborhood, without forgetting the classics such as Jardín Centenario and the Concepción Square of the colonial era in Mexico City.",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://cdmxtours.s3.amazonaws.com/thumbnails/t_coyo.jpg",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [],
  },
  {
    id: 3,
    tourName: "ARCHITECTURAL BIKE TOUR / ROMA - CONDESA",
    price: 650,
    duration: "4hrs -20km",
    cap: "15",
    description:
      "The Chic neighborhoods of Mexico City have a secret: they were designed by architects. Come and discover the urban and architectural origin of these neighbourhoods. In addition to knowing the emblematic streets and buildings, you will eat in a legendary taqueria in Condesa and you will visit the largest urban park in the country.",
    included: "Bikes, Helmets, Tacos, Hydration",
    imgSrc: "https://cdmxtours.s3.amazonaws.com/thumbnails/t_arch.jpg",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [],
  },
  {
    id: 4,
    tourName:
      "URBAN TOUR / FROM THE PORFIRIAN MANSIONS TO THE INDUSTRIAL NORTH",
    price: 650,
    duration: "4hrs - 25km",
    cap: "10",
    description:
      "The Urban Tour focuses on the urban growth that the city had, from the first neighborhoods of the 19th century to the industrial zones of the 50s in Mexico City.",
    included: "Bikes, Helmets, Tacos, Hydration ",
    imgSrc: "https://cdmxtours.s3.amazonaws.com/thumbnails/t_taco.jpg",
    imgAlt: "Image of Urban Bike Tour in Mexico City",
    meetingAddr:
      "C. Versalles 88, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    gallery: [
      {
        src: "https://cdmxtours.s3.amazonaws.com/Images/tours/ArchitecturalTour/DSC00024-min.webp",
        alt: "",
      },
      {
        src: "https://cdmxtours.s3.amazonaws.com/Images/tours/ArchitecturalTour/romacondesabiketour+(2).webp",
        alt: "",
      },
      {
        src: "https://cdmxtours.s3.amazonaws.com/Images/tours/ArchitecturalTour/20211117_005358.webp",
        alt: "",
      },
      {
        src: "https://cdmxtours.s3.amazonaws.com/Images/tours/ArchitecturalTour/20220522_115133-min.webp",
        alt: "",
      },
      {
        src: "https://cdmxtours.s3.amazonaws.com/Images/tours/ArchitecturalTour/DSC09584.webp",
        alt: "",
      },
    ],
  },
];
