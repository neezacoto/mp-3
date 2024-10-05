import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  display: flex;
`;

function App() {
  return (
    <Main>
      <Gallery />
    </Main>
  );
}

export default App;
