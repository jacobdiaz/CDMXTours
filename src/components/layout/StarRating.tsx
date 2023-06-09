type StarRatingProps = {
  totalStars?: number;
  rating: number;
  showRatingText?: boolean;
};

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  rating,
  showRatingText = false,
}) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <svg
      key={index}
      className="h-5 w-5 fill-current text-yellow-500"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 16.307l-5.438 3.215a.625.625 0 0 1-.936-.66l1.025-6.02L.14 6.86a.625.625 0 0 1 .35-1.062l6.034-.876L9.575.455A.625.625 0 0 1 10 0c.22 0 .422.115.525.302l2.92 5.587 6.034.876a.625.625 0 0 1 .35 1.062l-4.872 5.804 1.025 6.02a.625.625 0 0 1-.936.66L10 16.307z"
      />
    </svg>
  ));

  const emptyStars = Array.from({ length: totalStars - rating }, (_, index) => (
    <svg
      key={index}
      className="h-5 w-5 fill-current text-gray-300"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 16.307l-5.438 3.215a.625.625 0 0 1-.936-.66l1.025-6.02L.14 6.86a.625.625 0 0 1 .35-1.062l6.034-.876L9.575.455A.625.625 0 0 1 10 0c.22 0 .422.115.525.302l2.92 5.587 6.034.876a.625.625 0 0 1 .35 1.062l-4.872 5.804 1.025 6.02a.625.625 0 0 1-.936.66L10 16.307z"
      />
    </svg>
  ));

  return (
    <div className="flex items-center">
      <div className="flex">
        {filledStars}
        {emptyStars}
      </div>
      <span className="ml-2 mr-5">
        {/* if show rating text exsist */}
        {showRatingText && <span>{rating}.0 Stars</span>}
      </span>
    </div>
  );
};

export default StarRating;
