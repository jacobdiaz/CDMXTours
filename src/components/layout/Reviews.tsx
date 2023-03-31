import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  //   useEffect(() => {
  //     const key = process.env.GOOGLE_MAPS_API_KEY;
  //     const placeId = "ChIJA3z2P0n_0YURQOFi9JONYac";
  //     // Define the API endpoint to retrieve the reviews
  //     const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${key}`;

  //     // Make the API request to retrieve the reviews
  //     fetch(endpoint, { mode: "no-cors" })
  //       .then((response) => {
  //         console.log(response);
  //         response.text();
  //       })
  //       .then((data) => console.log("data", data))
  //       .catch((error) => console.error(error));
  //   }, []);

  return (
    <div>
      <h2>Top Reviews for</h2>
      <ul>
        {reviews.map((review: any) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>Rating: {review.rating} stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
