type StarRatingProps = {
  totalStars?: number;
  rating: number;
  showRatingText?: boolean;
  lgStars?: boolean;
};

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  rating,
  showRatingText = false,
  lgStars = false,
}) => {
  const starSize = lgStars ? "h-8 w-8" : "h-5 w-5";
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-yellow-500 ${starSize}`}
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  ));

  const emptyStars = Array.from({ length: totalStars - rating }, (_, index) => (
    <svg
      key={index}
      className={`${starSize} fill-current text-gray-300`}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 16.307l-5.438 3.215a.625.625 0 0 1-.936-.66l1.025-6.02L.14 6.86a.625.625 0 0 1 .35-1.062l6.034-.876L9.575.455A.625.625 0 0 1 10 0c.22 0 .422.115.525.302l2.92 5.587 6.034.876a.625.625 0 0 1 .35 1.062l-4.872 5.804 1.025 6.02a.625.625 0 0 1-.936.66L10 16.307z"
      />
    </svg>
  ));

  return (
    <>
      <div className="flex justify-center ">
        {filledStars}
        {emptyStars}
      </div>
      <span className="ml-2 mr-5">
        {/* if show rating text exsist */}
        {showRatingText && <span>{rating}.0 Stars</span>}
      </span>
    </>
  );
};

export default StarRating;
