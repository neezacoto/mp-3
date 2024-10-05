import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  border-radius: 25px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 7rem;
  height: 7rem;
`;

interface PhotoProps {
  src: string; // Assuming dog is a string, adjust the type as needed
}

const Photo = ({ src }: PhotoProps) => {
  return (
    <Frame>
      <img src={src} />
    </Frame>
  );
};

export default Photo;
