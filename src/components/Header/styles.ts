import styled from "styled-components";

export const Container = styled.header`
  /* background: var(--blue); */
  background-image: linear-gradient(to bottom right, #ad5389 , #3c1053);
  /* background-image: linear-gradient(180deg, #ad5389 , #3c1053); */
  /* background-image: linear-gradient(to right, #ad5389 , #3c1053); */
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    /* background: var(--blue-light); */
    /* background: #ad5389; */
    /* background-image: linear-gradient(to right, #ad5389 , #3c1053); */
    background-image: linear-gradient(to bottom right, #3c1053, #ad5389);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`