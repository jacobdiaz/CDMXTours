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
    author_name: "Judith Diaz",
    author_url: "https://g.co/kgs/EWa8zvQ",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUILCUidd6LqOe-_x-T5Im-GMsu57-uxCY9LiIbjzN2ZYgBx7C64g=w120-h120-p-rp-mo-ba3-br100",
    rating: 5,
    relative_time_description: "2 Weeks Ago",
    text: "We did the 'Architecture - Walking tour, Roma - Condesa'. Our guide, Ricardo, was very knowledgeable about the architecture of the city and always answered any questions we had with a smile. He also recommended several other notable spots to visit while we were there. In the end, we stopped for some famous delicious tacos. I recommend this walking tour as it allowed us to be like locals and really stop and look at some cool historic buildings. Overall, it was a wonderful experience! 10/10 would do it again!",
    time: 1646679564,
    translated: false,
  },
  {
    author_name: "Laura Spencer",
    author_url: "https://g.co/kgs/XWd7KsJ",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocJGSzULVz0JeSvNgu2wxA-OspaEX8JHj0jKpEX0Bby5qnY55A=w120-h120-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "a week ago",
    text: "While in town my partner and I took the private architecture tour on bike with our guide, Ricardo. It was my favorite thing we did while visiting CDMX, not only did we get to learn so much interesting history but we got to do it with an excellent guide. Ricardo was kind, friendly, knowledgeable, and extremely attentive. We ourselves are very avid bikers and were very happy that we got to experience biking in CDMX. Could not recommend enough, it was a wonderful way to spend a half day in the city!",
    time: 1657916233,
    translated: false,
  },
  {
    author_name: "Mario Varela",
    author_url:
      "https://www.google.com/maps/contrib/118310467222903241519/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMQD1IhLF_YYt3W1kpmzcxyVS2MA4cOGemxSTJgMRg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Lee makes the trip. He's friendly, knowledgeable, and patient.  I would recommend this tour to friends and family. They cover alot of area and history. Awesomeness.",
    time: 1681673369,
    translated: false,
  },
  {
    author_name: "Robert Moukhametov",
    author_url:
      "https://www.google.com/maps/contrib/110954049689313212726/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMTpgd7z5ZS9rfK_wvm73MjHUTiXRmd-ydkFlutG2Q=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "3 months ago",
    text: "Great tour! The food was filling, the bike rides were fun and safe, and the guide even mixed historical information into the excursion. A fantastic way to spend 4 hours in the morning-afternoon on a Sunday.",
    time: 1678052313,
    translated: false,
  },
  {
    author_name: "Leslie Laine",
    author_url:
      "https://www.google.com/maps/contrib/107912939407663742837/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMRARRwLsTDBq3hTHPnjo2f07ziTMfE9eiHLzEQg_A=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "Raul and Guillermo did a great job leading our group around the city. I reached out to Raul prior to our trip and asked if he could do a custom bike tour for my friends and I. I told him what sites I wanted to see and he planned the whole tour. Parts of the tour were definitely outside of our comfort zone because of how close we were riding to traffic but Guillermo and Raul worked together to keep our group safe. Raul knows so much history about the city and seeing Mexico City by bike was such an amazing experience. I would definitely recommend using his company and working with him.",
    time: 1680642640,
    translated: false,
  },
];

export const writeReviewLink =
  "https://www.google.com/search?q=tours+en+bici+cdmx&rlz=1C5GCEM_enUS1056US1056&ei=ryuCZJHrDYXNptQPwpSJiAY&ved=0ahUKEwjR_sn4s7T_AhWFpokEHUJKAmEQ4dUDCBA&uact=5&oq=tours+en+bici+cdmx&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgM6BAgAEEdKBAhBGABQMFgwYLIEaABwAngAgAFhiAFhkgEBMZgBAKABAcABAcgBCA&sclient=gws-wiz-serp&bshm=nce/1#lrd=0x85d1ff493ff67c03:0xa7618d93f462e140,3,,,,&rlimm=12061076943674728768";
