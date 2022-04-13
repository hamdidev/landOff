import React from "react";
import {
  LinksContainer,
  ExternalLink,
  WorkCard,
  WorkGroup,
  WorkImage,
  WorkModal,
  WorkSubtitle,
  WorkTitle,
  GitHubLink,
} from "./WorkStyles";
import "./Work.scss";
import { Container } from "../../globalStyle";
import {
  ClientTextWrapper,
  ClientTitle,
  ClientText,
} from "../Skills/SkillsStyles";
const Work = () => {
  return (
    <Container id="work">
      <ClientTextWrapper>
        <ClientTitle>Recent Works</ClientTitle>
        <ClientText>I’ve been working with these technologies.</ClientText>
      </ClientTextWrapper>
      <WorkCard>
        <WorkGroup>
          {/* image */}
          <WorkImage src="/images/work/work1.jpg" />
          <WorkModal>
            <div>
              <WorkSubtitle>Web</WorkSubtitle>
              <WorkTitle>Payment Site</WorkTitle>
              <LinksContainer>
                <GitHubLink>
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                    fill="red"
                    width="80px"
                    height="80px"
                  />
                </GitHubLink>
                <ExternalLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="red"
                    width="30px"
                    height="30px"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </ExternalLink>
              </LinksContainer>
            </div>
          </WorkModal>
        </WorkGroup>
      </WorkCard>
    </Container>
  );
};

export default Work;
