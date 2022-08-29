import styled from "styled-components";

export const ProjectsContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding-top: 5rem;
  margin: 4rem auto;
`;

export const ProjectsTitle = styled.h2`
  position: relative;
  color: var(--darkGreenClr);
  font-size: 3rem;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    border-bottom: 3px solid var(--orangeClr);
  }

  @media screen and (max-width: 768px) {
    font-size: 2 0.5rem;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  &::after {
    background-color: #e17b77;
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;

export const TimelineItemContent = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;
  text-align: right;

  &::after {
    content: " ";
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }
`;

export const TimelineItemTag = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  top: 5px;
  left: 5px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  text-transform: uppercase;
`;

export const TimelineItemCircle = styled.span`
  background-color: #fff;
  border: 3px solid #e17b77;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;

    ${TimelineItemContent} {
      text-align: left;
      align-items: flex-start;

      &::after {
        right: auto;
        left: -7.5px;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
      }
    }

    ${TimelineItemTag} {
      left: auto;
      right: 5px;
    }

    & ${TimelineItemCircle} {
      right: auto;
      left: -40px;
    }
  }
`;

export const TimelineItemTime = styled.time`
  color: #777;
  font-size: 12px;
  font-weight: bold;
`;

export const TimelineItemTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin: 10px 0 0;
  max-width: 250px;
`;

export const TimelineItemParagraph = styled.p`
  font-size: 16px;
  line-height: 1.3;
  margin: 0 0 10px;
  max-width: 250px;
`;

export const TimelineItemLink = styled.a`
  font-size: 14px;
  font-weight: bold;

  &::after {
    content: " ►";
    font-size: 12px;
  }
`;
