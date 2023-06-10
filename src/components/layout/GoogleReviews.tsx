import { reviews, Review, writeReviewLink } from "../../utils/reviews";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../sections/SectionTitle";
import StarRating from "./StarRating";
import Link from "next/link";
import CTALink from "../actions/CTALink";
import { useState } from "react";
type Props = {};

const GoogleReviews = (props: Props) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex(
      (prevIndex: number) => (prevIndex + 1) % reviews.length
    );
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex: number) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const GoogleIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 256 262'
      id='google'
    >
      <path
        fill='#4285F4'
        d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
      ></path>
      <path
        fill='#34A853'
        d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
      ></path>
      <path
        fill='#FBBC05'
        d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
      ></path>
      <path
        fill='#EB4335'
        d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
      ></path>
    </svg>
  );

  const ArrowRight = () => (
    <div style={{ transform: "scale(0.6)" }}>
      <svg
        width='24'
        height='24'
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z' />
      </svg>
    </div>
  );

  const ArrowLeft = () => (
    <div style={{ transform: "scale(0.6)" }}>
      <svg
        width='24'
        height='24'
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
      >
        <path d='M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z' />
      </svg>
    </div>
  );
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center'>
          <GoogleIcon />
          <SectionTitle margin='0' className='ml-3'>
            Google Reviews
          </SectionTitle>
        </div>
        <div className='flex flex-row mb-5 mt-2'>
          <StarRating rating={5} showRatingText />
          <p className='opacity-50'>353 Reviews</p>
        </div>
        {/* <Link href={writeReviewLink}>Write A Review</Link> */}
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between'>
        {/* Mobile */}
        <div className='block md:hidden'>
          <div className='flex flex-row justify-between pb-5'>
            <button
              className='block md:hidden' // Hide on desktop
              onClick={handlePreviousReview}
            >
              <ArrowLeft />
            </button>

            <button
              className='block md:hidden' // Hide on desktop
              onClick={handleNextReview}
            >
              <ArrowRight />
            </button>
          </div>
          <ReviewCard {...reviews[currentReviewIndex]} />
        </div>
        {/* Desktop */}
        <div className='hidden md:flex w-full flex-col md:flex-row justify-between '>
          {reviews.slice(1, 4).map((review: Review, idx: number) => (
            <ReviewCard {...review} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GoogleReviews;
