import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const CalendarOfToursCard = () => {
  return (
    <li className='mb-10 flex justify-center md:min-h-[600px] w-full mr-0 md:mr-0 md:w-[24rem] bg-black md:bg-white text-white md:text-black'>
      <article className='flex flex-col'>
        <Link
          href='https://www.instagram.com/stories/highlights/18327564829029482/'
          title='Instagram Calendar'
          rel='noopener noreferrer'
        >
          <div className='w-full hidden md:flex justify-center '>
            <Image
              src='https://d252kj1i9nz0td.cloudfront.net/thumbnails/t_cal.jpg'
              height={500}
              width={360}
              alt='Calendar of Tours'
              className=' rounded-lg bg-white'
            />
          </div>
          <div className='justify-between w-full py-5'>
            <h3 className='text-card-title font-fjalla uppercase  w-full'>
              <FormattedMessage id='tours.calendar_of_tours.title' />
              {new Date().getFullYear()}
            </h3>
            <p>
              <FormattedMessage id='tours.calendar_of_tours.desc' />
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default CalendarOfToursCard;
