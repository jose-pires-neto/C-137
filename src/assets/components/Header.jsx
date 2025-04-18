import { Container } from 'react-bootstrap'

export default function Header() {
  return (
    <header className="py-5 text-center dimension-jump">
      <Container>
        <h1 className="display-3 fw-bold" style={{
          fontFamily: "'Get Schwifty'",
          color: "#00ff9d",
          textShadow: "0 0 10px #00b4ff, 0 0 20px #00ff9d",
          WebkitTextStroke: "1px #1a1a2e"
        }}>
          WUBBA LUBBA DUB DUB!
        </h1>
        <p className="lead mt-3" style={{
          color: "#ffde00",
          fontSize: "1.5rem"
        }}>
          Todas as dimensões são bem-vindas!
        </p>
      </Container>
    </header>
  )
}