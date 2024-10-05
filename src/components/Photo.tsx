import styled from "styled-components";
import { People } from "../types/types";

const Frame = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 9rem;
  height: 12rem;
  overflow: hidden;
  align-items: center;

  gap: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0 1rem;
`;

const Hash = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 500ms;
  cursor: pointer;
  left: 0;

  &:hover {
    opacity: 1;
  }
`;

const Content = styled.p`
  padding: 0;
  margin: 0;
`;

interface PhotoProps {
  src: string;
  hash: string;
  people: People;
}

/**
 * Photo component displays an image along with associated metadata.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.hash - The hash value associated with the image.
 * @param {Object} props.people - The object containing information about the person.
 * @param {string} props.people.name - The name of the person.
 * @param {string} props.people.mass - The mass of the person.
 *
 * @returns {JSX.Element} The rendered Photo component.
 *
 * @example
 * <Photo src="image_url" hash="some_hash" people={{ name: "John Doe", mass: "80" }} />
 */
const Photo = ({ src, hash, people }: PhotoProps) => {
  return (
    <Frame
      style={
        Number(people.mass) > 77
          ? { backgroundColor: "rgba(10,100,40,0.3)" }
          : {}
      }
    >
      <img
        src={src}
        height="100px"
        width="100px"
        alt={"generated robot " + hash}
      />
      <Hash>
        <p>Hash: {hash}</p>
      </Hash>
      <Content style={{ fontWeight: "bold" }}>{people.name}</Content>
      <Content>kg: {people.mass}</Content>
    </Frame>
  );
};

export default Photo;
