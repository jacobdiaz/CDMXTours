import Link from "next/link";
import SectionTitle from "../sections/SectionTitle";

const ContactForm = () => {
  const inputClass = "input w-full my-2 bg-[#F7F7F7]";
  // TODO Implement useForm
  // TODO STYLE FORM
  return (
    <>
      <SectionTitle margin='m-0'>Send us a message</SectionTitle>
      <form>
        <input type='Email' placeholder='Email' className={inputClass} />
        <input type='text' placeholder='Name' className={inputClass} />
        <textarea
          className={`${inputClass} p-4 h-32`}
          placeholder='Message'
        ></textarea>
      </form>

      {/* TODO Set Send Message to Whatsapp */}
      <Link href='/' className='btn bg-black rounded-none'>
        Send Message
      </Link>
    </>
  );
};

export default ContactForm;
