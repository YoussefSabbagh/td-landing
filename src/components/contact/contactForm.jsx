import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';
import { ContactFormC } from './contact.Styles';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        valores,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Thanks for your email!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.error('Ups.. There is a problem :)', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <ContactFormC>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user_name">Nombre:</label>
          <input {...register('user_name')} placeholder="Nombre:" />
        </div>
        <p>{errors.user_name?.message}</p>
        <div>
          <label htmlFor="subject">Asunto:</label>
          <input {...register('subject')} placeholder="Asunto:" />
        </div>
        <p>{errors.subject?.message}</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} placeholder="Email:" />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label htmlFor="messaje">Mensaje:</label>
          <textarea
            {...register('message')}
            cols="30"
            rows="5"
            placeholder="Mensage"
          ></textarea>
        </div>
        <p className="text-sm text-danger mb-2">{errors.message?.message}</p>
        {!isSending && <button type="submit">Enviar</button>}
      </form>
    </ContactFormC>
  );
};

export default ContactForm;
