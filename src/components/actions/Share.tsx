import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { EmailShareButton, WhatsappShareButton } from "react-share";
import { SocialIcon } from "react-social-icons";
const SocailItem = ({ children }: { children: ReactNode }) => {
  return <div className='p-5 bg-[#f2f2f2] mb-2 cursor-pointer'>{children}</div>;
};

const Share = ({ tour }: { tour: Tour }) => {
  const currUrl = window.location.href;

  return (
    <>
      <label
        htmlFor='share-modal'
        className='cursor-pointer flex flex-row items-center justify-end underline font-medium decoration-orange'
      >
        <div className='w-[18%] mr-2 my-5'>
          <Image
            src='/share.svg'
            alt='Share this tour'
            width={20}
            height={10}
          />
        </div>
        <p className="text-orange">Share</p>
      </label>

      <input type='checkbox' id='share-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <div className='w-full flex justify-between items-center '>
            <h2 className='text-2xl font-bold'>Share this tour</h2>

            <label
              htmlFor='share-modal'
              className='btn btn-ghost text-black text-2xl'
            >
              ✕
            </label>
          </div>

          <div className='flex flex-row w-full items-center my-5'>
            <div className='h-[75px] relative overflow-hidden pr-5'>
              <Image
                src={tour.imgSrc}
                alt={tour.imgAlt}
                width={75}
                height={75}
                loading='lazy'
              />
            </div>
            <h3>{tour.tourName}</h3>
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <div>
              <SocailItem>
                <button>
                  <SocialIcon
                    network='telegram'
                    style={{ height: 25, width: 25, marginRight: "1em" }}
                  />
                  Copy Url
                </button>
              </SocailItem>
              <SocailItem>
                <EmailShareButton url={currUrl}>
                  <SocialIcon
                    network='email'
                    style={{ height: 25, width: 25, marginRight: "1em" }}
                  />
                  Email
                </EmailShareButton>
              </SocailItem>
            </div>
            <div>
              <SocailItem>
                <WhatsappShareButton url={currUrl}>
                  <SocialIcon
                    network='whatsapp'
                    style={{ height: 25, width: 25, marginRight: "1em" }}
                  />
                  WhatsApp
                </WhatsappShareButton>
              </SocailItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
