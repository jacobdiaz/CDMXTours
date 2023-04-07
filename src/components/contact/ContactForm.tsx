import SectionTitle from "../sections/SectionTitle";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ContactForm = () => {
  const inputClass = "input w-full my-2 bg-[#F7F7F7] rounded-none";
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name, email, message }: any) => {
    const msg = `Hello Tours en Bici CDMX! My name is ${name}(${email})\n${message}`;
    const url = `https://wa.me/5215583333677?text=${encodeURI(msg)}`;

    router.push(url);
    reset(); // reset the form fields after submission
  };

  return (
    <>
      <SectionTitle margin='m-0' className='mt-10'>
        Send us a message
      </SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='Email'
          className={inputClass}
          {...register("email")}
        />
        <input
          type='text'
          placeholder='Name'
          className={inputClass}
          {...register("name")}
        />
        <textarea
          className={`${inputClass} p-4 h-32`}
          placeholder='Message'
          {...register("message")}
        ></textarea>

        <button type='submit' className='btn bg-black rounded-none mt-5'>
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
