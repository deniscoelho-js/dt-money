import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0%.25rem;
    color: $text;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

    }

    &.highlight-background {
      /* background-image: linear-gradient(180deg, #FFAF7B, #3A1C71); */
      /* background: #33CC95; */
      background-image: linear-gradient(to bottom right, #ad5389 , #3c1053);
      color: #fff;
    }
  }
`
