import "./App.css";
import Gallery from "./components/Gallery";
import styled from "styled-components";

/**
 * Main is a styled div component that takes up the full width of the viewport
 * and adjusts its height to the content. It uses flexbox for layout.
 */
const Main = styled.div`
  width: 100vw;
  height: 100%;
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
