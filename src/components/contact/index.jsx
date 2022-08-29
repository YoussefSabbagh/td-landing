import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from './contactForm';
import {
  ContactContainer,
  ContactContent,
  ContactFormContainer,
  ContactSubtitle,
  ContactTitle,
  ContactSocial,
} from './contact.Styles';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactContent>
        <ContactFormContainer>
          <ContactSubtitle>Cuentanos</ContactSubtitle>
          <ContactForm />
        </ContactFormContainer>

        <ContactFormContainer>
          <ContactSubtitle> Siguenos en: </ContactSubtitle>
          <ContactSocial>
            <a
              className="social__link"
              href="https://www.linkedin.com/in/youssef-sabbagh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="social__link"
              href="https://github.com/YoussefSabbagh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="social__link"
              href="https://twitter.com/TaguaraDigital"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </ContactSocial>
        </ContactFormContainer>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
