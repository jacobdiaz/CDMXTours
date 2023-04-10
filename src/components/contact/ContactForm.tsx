import Link from "next/link";
import SectionTitle from "../sections/SectionTitle";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const ContactForm = ({ header }: { header?: string }) => {
  const inputClass = "input w-full my-2 bg-[#F7F7F7] rounded-none";
  const router = useRouter();
  const intl = useIntl();
  const { register, handleSubmit, reset } = useForm();

  if (!header) header = intl.formatMessage({ id: "home.contact.sendMessage" });

  const onSubmit = ({ name, email, message }: any) => {
    const msg = `Hello Tours en Bici CDMX! My name is ${name}(${email})\n${message}`;
    const url = `https://wa.me/5215583333677?text=${encodeURI(msg)}`;

    router.push(url);
    reset(); // reset the form fields after submission
  };

  return (
    <>
      <SectionTitle margin='m-0' className='mt-10'>
        {header}
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
          placeholder={intl.formatMessage({ id: "home.contact.form.name" })}
          className={inputClass}
          {...register("name")}
        />
        <textarea
          className={`${inputClass} p-4 h-32`}
          placeholder={intl.formatMessage({ id: "home.contact.form.message" })}
          {...register("message")}
        ></textarea>

        <button
          type='submit'
          className='btn bg-black rounded-none mt-5 w-full md:w-fit'
        >
          <FormattedMessage id='home.contact.sendBtn' />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
