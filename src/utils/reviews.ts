export type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

export const reviews = [
  {
    author_name: 'Leslie Laine',
    author_url:
      'https://www.google.com/maps/contrib/107912939407663742837/reviews',
    language: 'en',
    original_language: 'en',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/AD_cMMRARRwLsTDBq3hTHPnjo2f07ziTMfE9eiHLzEQg_A=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'Raul and Guillermo did a great job leading our group around the city. I reached out to Raul prior to our trip and asked if he could do a custom bike tour for my friends and I. I told him what sites I wanted to see and he planned the whole tour. Parts of the tour were definitely outside of our comfort zone because of how close we were riding to traffic but Guillermo and Raul worked together to keep our group safe. Raul knows so much history about the city and seeing Mexico City by bike was such an amazing experience. I would definitely recommend using his company and working with him.',
    time: 1680642640,
    translated: false,
  },
  {
    author_name: 'Rebekah M',
    author_url:
      'https://www.google.com/maps/contrib/102375211362571889476/reviews',
    language: 'en',
    original_language: 'en',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/AD_cMMQ42aAlTaLe2nJtgWkDVCAO4Pcg3BA9RHRNxFM33Q=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    relative_time_description: '10 months ago',
    text: 'The tour was amazing, start to finish! Raul was super friendly, gave us a lot of information on the city, and made sure we were safe and having fun! The taco stops were all wonderful and delicious!',
    time: 1657916233,
    translated: false,
  },
  {
    author_name: 'Miller Nickel Resor',
    author_url:
      'https://www.google.com/maps/contrib/115816613010548947877/reviews',
    language: 'en',
    original_language: 'en',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/AD_cMMQjzTDL2eD-De3ka1VW5lYDMVCaJ8pADXCSTWru9Q=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    relative_time_description: 'a year ago',
    text: 'Raul took us on his famous Taco tour, which is much more than a taco tour. We learned about the history of the city, its mix of religions and people and the resulting parks and architecture. Great tour by a great guy. Good bikes! Highly recommend!',
    time: 1646679564,
    translated: false,
  },
  {
    author_name: 'Mario Varela',
    author_url:
      'https://www.google.com/maps/contrib/118310467222903241519/reviews',
    language: 'en',
    original_language: 'en',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/AD_cMMQD1IhLF_YYt3W1kpmzcxyVS2MA4cOGemxSTJgMRg=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    relative_time_description: 'a month ago',
    text: "Lee makes the trip. He's friendly, knowledgeable, and patient.  I would recommend this tour to friends and family. They cover alot of area and history. Awesomeness.",
    time: 1681673369,
    translated: false,
  },
  {
    author_name: 'Robert Moukhametov',
    author_url:
      'https://www.google.com/maps/contrib/110954049689313212726/reviews',
    language: 'en',
    original_language: 'en',
    profile_photo_url:
      'https://lh3.googleusercontent.com/a-/AD_cMMTpgd7z5ZS9rfK_wvm73MjHUTiXRmd-ydkFlutG2Q=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Great tour! The food was filling, the bike rides were fun and safe, and the guide even mixed historical information into the excursion. A fantastic way to spend 4 hours in the morning-afternoon on a Sunday.',
    time: 1678052313,
    translated: false,
  },
];

export const writeReviewLink =
  'https://www.google.com/search?q=tours+en+bici+cdmx&rlz=1C5GCEM_enUS1056US1056&ei=ryuCZJHrDYXNptQPwpSJiAY&ved=0ahUKEwjR_sn4s7T_AhWFpokEHUJKAmEQ4dUDCBA&uact=5&oq=tours+en+bici+cdmx&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgM6BAgAEEdKBAhBGABQMFgwYLIEaABwAngAgAFhiAFhkgEBMZgBAKABAcABAcgBCA&sclient=gws-wiz-serp&bshm=nce/1#lrd=0x85d1ff493ff67c03:0xa7618d93f462e140,3,,,,&rlimm=12061076943674728768';
