import React from 'react';
import { processData, servicesData } from './servicesData';
import {
  ServicesSection,
  ServicesContent,
  ServicesTitle,
  ServicesSubtitle,
  ServicesGridProcess,
  ServicesGridServices,
  ServicesContainer,
  ServicesCards,
  CardBox,
} from './Services.Styles';

const Services = ({ id, title, classes, bgClr = '#ff00ff' }) => {
  return (
    <ServicesSection id={id} bgClr={bgClr}>
      <ServicesContent>
        <ServicesTitle> Somos diseñadores Web</ServicesTitle>
        <ServicesSubtitle>
          A parte de lo que ya hemos dicho: que hacemos desarrollo web a medida,
          nos caracterizamos por...
        </ServicesSubtitle>
      </ServicesContent>
      <ServicesGridProcess>
        {processData.map((process) => {
          return (
            <div key={process.id}>
              <h4>{process.title}</h4>
              <p>{process.description}</p>
            </div>
          );
        })}
      </ServicesGridProcess>

      {/* <ServicesGridServices>
        <ServicesTitle> Esto son algunos de los servicios</ServicesTitle>

        <ServicesContainer>
          <ServicesCards>
            {servicesData.map((service) => {
              return (
                <CardBox key={service.id}>
                  <div className="front">
                    <img src={service.img} alt="" className="cards__img" />
                    <h2 className="cards__title">{service.title}</h2>
                  </div>
                  <div className="back">
                    <h2 className="capa-content__title">{service.title}</h2>
                    <p className="capa-content__p">{service.description}</p>
                  </div>
                </CardBox>
              );
            })}
          </ServicesCards>
        </ServicesContainer>
      </ServicesGridServices> */}
    </ServicesSection>
  );
};

export default Services;
