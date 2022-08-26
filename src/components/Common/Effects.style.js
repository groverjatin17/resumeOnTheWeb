import styled from "styled-components";

export const CardDiv = styled.div`
  & {
    position: relative;
    width: 300px;
    height: 180px;
    display: inline-block;
    margin: 30px;
  }

  @media (max-width: 768px) {
    width: 86%;
  }
`;

export const BackDiv = styled.div`
  & {
    position: absolute;
    overflow: hidden;
    backface-visibility: hidden;
    text-align: center;
    transform: Perspective(600px) rotateY(180deg);
    transition: transform 0.6s linear;
  }
  & img {
    width: 100%;
    height: 180px;
    border-radius: 10px;
  }
  ${CardDiv}:hover & {
    transform: Perspective(600px) rotateY(0deg);
  }
`;

export const FrontDiv = styled.div`
  & {
    transform: Perspective(600px) rotateY(0deg);
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s linear;
  }

  & img {
    width: 100%;
    height: 180px;
    border-radius: 10px;
  }
  ${CardDiv}:hover & {
    transform: Perspective(600px) rotateY(-180deg);
  }
`;
