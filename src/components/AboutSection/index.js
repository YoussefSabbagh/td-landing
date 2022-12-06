import bgImage from '../../assets/image/bgs/about.jpg';
import { teamData } from './teamData';
import Team from './TeamCard';

import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutSubtitle,
  AboutImageWrapper,
  AboutImage,
  TeamContainer,
  TeamContent,
  TeamTitle,
  TeamCards,
} from './About.Styles';

const AboutSection = ({ id, title, classes, bgClr = '#ff00ff' }) => {
  return (
    <>
      <AboutContainer id={id} bgClr={bgClr}>
        <AboutContent>
          <AboutTitle>Acerca de Nosotros</AboutTitle>
          <p>
            En Taguara Digital nos especializamos en el diseño y desarrollo de
            soluciones digitales a la medida. Ayudamos a nuestros clientes desde
            la definición de sus estrategias hasta la realización de su
            ecosistema digital.
          </p>

          <p>
            El centro de nuestro enfoque está en la búsqueda constante de la
            unión entre la estética y el rendimiento. Visualizamos cada uno de
            nuestros proyectos como una pieza singular al servicio de los
            objetivos de comunicación de nuestros clientes.
          </p>

          <AboutSubtitle>Creatividad, eso nos define</AboutSubtitle>

          <p>
            Cada proyecto que emprendemos está hecho a medida y siguiendo las
            más altas exigencias, es por ello que lo estudiamos al mínimo
            detalle. A través del intercambio de ideas, ayudamos a que su idea
            inicial se convierta en una solución digital de vanguardia
          </p>
        </AboutContent>
        <AboutImageWrapper>
          <AboutImage src={bgImage} alt="about-image" />
        </AboutImageWrapper>
      </AboutContainer>

      <TeamContainer>
        <TeamContent>
          <TeamTitle>Nuestro Equipo</TeamTitle>
          <p>
            Taguara Digital cree en su filosofía de trabajo apostando por
            personas comprometidas, creativas, honestas y profesionales. La
            pasión y el esfuerzo en cada uno de nuestros proyectos es nuestra
            seña de identidad.
          </p>
        </TeamContent>
        <TeamCards>
          {teamData.map((data, index) => (
            <Team key={index} teamData={data} />
          ))}
        </TeamCards>
      </TeamContainer>
    </>
  );
};

export default AboutSection;
