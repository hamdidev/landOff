import styled from "styled-components";

// export const WorkContainer = styled.div`
//   min-height: 100vh;
//   display: grid;
//   //grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   grid-template-columns: repeat(3, max-content);

//   @media screen and (max-width: 1100px) {
//     grid-template-columns: repeat(2, max-content);
//   }
//   @media screen and (max-width: 768px) {
//     grid-template-columns: repeat(1, max-content);
//   }

//   justify-content: center;
//   align-items: center;
//   padding-bottom: 100px;
// `;

// export const WorkCard = styled.div`
//   padding: 1rem;
//   border-radius: 1rem;
//   //margin: 0 auto;
//   margin-bottom: 6rem;

//   @media screen and (max-width: 829px) {
//     padding: 5px;
//   }
//   @media screen and (max-width: 829px) {
//     padding: 5px;
//     padding-bottom: 2rem;
//   }
// `;
// export const WorkImgWrapper = styled.div`
//   margin: 0 12px;
//   align-items: center;
//   //margin: 0 15px;
//   position: relative;
//   width: 350px;

//   @media screen and (max-width: 1099px) {
//     width: 400px;
//   }
//   @media screen and (max-width: 976px) {
//     width: 380px;
//   }
//   @media screen and (min-width: 1100px) {
//     width: 280px;
//   }
//   @media screen and (max-width: 894px) {
//     width: 350px;
//   }
//   @media screen and (max-width: 810px) {
//     width: 325px;
//   }
//   @media screen and (max-width: 768px) {
//     width: 400px;
//   }
//   @media screen and (max-width: 475px) {
//     width: 320px;
//   }
// `;
// export const WorkImg = styled.img`
//   object-fit: cover;
//   border-top-left-radius: 1rem;
//   border-top-right-radius: 1rem;
//   max-width: 100%;
//   height: 100%;
// `;
// export const WorkInfo = styled.div`
//   background-color: #d3d8f0;
//   opacity: 0.9;
//   width: 100%;
//   height: 130px;
//   position: absolute;
//   border-bottom-left-radius: 1rem;
//   border-bottom-right-radius: 1rem;
//   transition: all 0.3s ease;
//   transform: translateY(-50px);
// `;
// export const LinksWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: absolute;
//   transform: translateY(-15px);
//   left: 0;
//   right: 0;
// `;

// export const Links = styled.a``;

// export const WorkInfo_Title = styled.h3`
//   font-size: 1.2rem;
//   color: green;
//   letter-spacing: 1px;
//   font-weight: 600;
//   padding: 5px;
//   margin: 0;
// `;

// export const WorkInfo_Desc = styled.p`
//   font-size: 13px;
//   color: gray;
//   letter-spacing: 1px;
//   font-weight: 500;
// //   padding: 5px;
// `;
export const WorkCard = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  row-gap: 2.5rem;
  grid-auto-flow: dense;
  padding: 1rem;
`;
export const WorkGroup = styled.div`
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease-in-out;
  overflow: hidden;
`;
export const WorkImage = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.3s ease-in-out;
`;

export const WorkModal = styled.div``;
export const WorkSubtitle = styled.span``;
export const WorkTitle = styled.h3``;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WorkBtn = styled.button``;
export const GitHubLink = styled.a``;
export const ExternalLink = styled.a``;
