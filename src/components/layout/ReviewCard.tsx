import { Review } from "@/utils/reviews";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";

const ReviewCard = (review: Review) => {
  return (
    <div className='w-full md:w-1/3 md:p-5'>
      <div key={review.author_name} className='mb-4'>
        <div className='flex flex-row'>
          <Link className='pr-5' href={review.author_url}>
            <Image
              src={review.profile_photo_url}
              width={60}
              height={60}
              alt={review.author_name}
            />
          </Link>
          <div className='flex flex-col'>
            <p className='text-lg font-semibold'>{review.author_name}</p>
            <div className='flex flex-row'>
              <StarRating rating={review.rating} />
              <p>{review.relative_time_description}</p>
            </div>
          </div>
        </div>
        <p className='pt-5 text-lg pb-5'>{review.text}</p>
        <Link href={review.author_url} className='underline opacity-50'>
          View Review
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
