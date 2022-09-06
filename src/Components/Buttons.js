import styled from "styled-components";

const Buttons = styled.a`
  font-size: ${({ big }) => (big ? "1.7rem" : "1.6rem")};
  background-color: #0a192f;
  color: #64ffda;
  padding: ${({ big }) => (big ? "2.3rem 4.2rem" : "1.2rem 2rem")};
  border: 1px solid #64ffda;
  border-radius: 0.6rem;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background-color: #233554;
    cursor: pointer;
  }
`;

export default Buttons;
