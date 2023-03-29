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
  gallery?: string[];
};

// TODO Turn this into an API Endpoint?
export const tours: Tour[] = [
  {
    id: 1,
    tourName: "TACO BIKE TOUR / DOWNTOWN CDMX",
    price: 650,
    duration: "4hrs - 15km",
    cap: "10 Persons",
    description:
      "Come and discover the origins of Mexico City, going from the main streets and squares to the lesser-known corners of the Historic Center. During the tour you will eat a wide variety of tacos, from pastor tacos to sweat basket tacos.",
    included: "Bikes - Helmets - Tacos - Hydratation ",
    imgSrc:
      "https://cdmxtours.s3.amazonaws.com/Images/tours/collage/IMG_20220607_185409.webp",
    imgAlt: "Image of Taco Bike Tour of Downtown Mexico City",
    gallery: [],
  },
  {
    id: 2,
    tourName: "COYOACÁN BIKE TOUR",
    price: 550,
    duration: "4hrs - 15km",
    cap: "15 Persons",
    description:
      "Coyoacán Bike Tour is more than Frida, come and ride from its wide Porfirian streets of the Carmen neighborhood to the pre-Hispanic alleys of the San Francisco quadrant and the Niño de Jesus neighborhood, without forgetting the classics such as Jardín Centenario and the Concepción Square of the colonial era in Mexico City.",
    included: "Bikes - Helmets - Tacos - Hydratation ",
    imgSrc:
      "https://cdmxtours.s3.amazonaws.com/Images/tours/collage/IMG_20220613_140420.webp",
    imgAlt: "Image of Coyoacán Bike Tour in CDMX",
    gallery: [],
  },
  {
    id: 3,
    tourName: "ARCHITECTURAL BIKE TOUR / ROMA - CONDESA",
    price: 650,
    duration: "4hrs -20km",
    cap: "15 Persons",
    description:
      "The Chic neighborhoods of Mexico City have a secret: they were designed by architects. Come and discover the urban and architectural origin of these neighbourhoods. In addition to knowing the emblematic streets and buildings, you will eat in a legendary taqueria in Condesa and you will visit the largest urban park in the country.",
    included: "Bikes - Helmets - Tacos - Hydratation",
    imgSrc:
      "https://cdmxtours.s3.amazonaws.com/Images/tours/collage/IMG_20220608_134745.webp",
    imgAlt: "Image of Architectural Bike Tour in Mexico City",
    gallery: [],
  },
  {
    id: 4,
    tourName: "TACO BIKE TOUR / DOWNTOWN CDMX",
    price: 650,
    duration: "4hrs - 25km",
    cap: "10 Persons",
    description:
      "The Urban Tour focuses on the urban growth that the city had, from the first neighborhoods of the 19th century to the industrial zones of the 50s in Mexico City.",
    included: "Bikes - Helmets - Tacos - Hydratation ",
    imgSrc:
      "https://cdmxtours.s3.amazonaws.com/Images/tours/collage/IMG_20220118_130041.webp",
    imgAlt: "Image of Urban Bike Tour in Mexico City",
    gallery: [],
  },
];
