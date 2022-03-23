import React from "react";
import {
  WorkContainer,
  WorkImg,
  WorkCard,
  WorkImgWrapper,
  WorkInfo,
  WorkInfo_Desc,
  WorkInfo_Title,
  LinksWrapper,
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
      <WorkContainer>
        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work1.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>
              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>
        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work2.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>

              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>
        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work3.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>

              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>

        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work3.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>
              {/* */}
              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>

        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work3.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>

              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>

        <WorkCard>
          <WorkImgWrapper>
            <WorkImg src="/images/work/work3.jpg" />
            <WorkInfo>
              <WorkInfo_Title>Web Dev Design</WorkInfo_Title>

              <WorkInfo_Desc>
                {" "}
                I enjoy creating things that live on the internet, whether that
                be websites, applications, or anything in between.
              </WorkInfo_Desc>
              <LinksWrapper>
                <a href="https://github.com" target="_blank">
                  <img
                    className="svg-img"
                    src="/images/github.svg"
                    alt="Github Icon"
                  />
                </a>
                <a href="">
                  <img
                    className="svg-img"
                    src="/images/external-link.svg"
                    alt="External Link Icon"
                  />
                </a>
              </LinksWrapper>
            </WorkInfo>
          </WorkImgWrapper>
        </WorkCard>
      </WorkContainer>
    </Container>
  );
};

export default Work;
