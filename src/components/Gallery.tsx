import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Gallery = () => {
  const [robots, setRobots] = useState<string[]>([]);

  useEffect(() => {
    const fetchRobots = async () => {
      const newRobots: string[] = [];

      for (let i = 0; i < 21; i++) {
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
    <GalleryContainer>
      {robots.map((robot, index) => (
        <Photo key={index} src={robot} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
