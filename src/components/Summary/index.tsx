import { Container } from "./styles"


export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="images/income.png" alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src="images/outcome.png" alt="" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>
      <div className="highlight-background" >
        <header>
          <p>Total</p>
          <img src="images/total.png" alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  )
}