import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import styled from "styled-components";
import { People } from "../types/types";

const GalleryContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

/**
 * Gallery component that fetches and displays a list of robots and people.
 *
 * This component fetches data from two different APIs:
 * - The Star Wars API (https://swapi.dev/api/people) to get a list of people.
 * - The RoboHash API (https://robohash.org) to get a list of robot images.
 *
 * The component maintains two pieces of state:
 * - `robots`: An array of strings representing the URLs of robot images.
 * - `people`: An array of `People` objects representing the people fetched from the Star Wars API.
 *
 * The component uses two `useEffect` hooks to fetch the data when the component mounts.
 *
 * The fetched data is then displayed in a `GalleryContainer` component, where each robot image is paired with a corresponding person.
 *
 * @component
 * @example
 * return (
 *   <Gallery />
 * )
 */
const Gallery = () => {
  const [robots, setRobots] = useState<string[]>([]);
  const [people, setPeople] = useState<People[]>([]);
  const pageSize = 10;
  useEffect(() => {
    const getPeople = async () => {
      const res = await fetch(`https://swapi.dev/api/people`);
      const data = await res.json(); // Await the JSON parsing
      setPeople(data.results);
    };

    getPeople();
  }, []);
  useEffect(() => {
    const fetchRobots = async () => {
      const newRobots: string[] = [];

      for (let i = 0; i < pageSize; i++) {
        const res = await fetch(`https://robohash.org/${i + 1}`);
        const data = res.url;

        newRobots.push(data);
      }
      setRobots(newRobots);
    };
    fetchRobots();
  }, []);

  console.log({ robots });
  return (
    <>
      {robots.length && people.length && (
        <GalleryContainer>
          {robots.map((robot, index) => (
            <Photo
              key={index}
              src={robot}
              hash={String(index)}
              people={people[index]}
            />
          ))}
        </GalleryContainer>
      )}
    </>
  );
};

export default Gallery;
