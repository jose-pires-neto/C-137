import { Container, Row, Col, Card } from 'react-bootstrap'
import JoseImg from './jose.png'
import ErickImg from './erick.png'
import ElivaImg from './eliva.png'
import EversonImg from './everson.png'

export default function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Get Schwifty'",
        color: "#00ff9d",
        fontSize: "3.5rem",
        textShadow: "0 0 10px #00b4ff",
        WebkitTextStroke: "1px #1a1a2e",
        backgroundColor: "rgba(26, 26, 46, 0.7)",
        padding: "1rem",
        borderRadius: "15px"
      }}>
        SOBRE NÓS
      </h2>

      <Card className="mb-5 border-0" style={{
        backgroundColor: "rgba(26, 26, 46, 0.85)",
        boxShadow: "0 0 20px rgba(0, 180, 255, 0.3)"
      }}>
        <Card.Body>
          <h3 className="mb-4" style={{ color: "#ffde00" }}>Sobre o Projeto</h3>
          <p className="text-white" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Este portal interdimensional foi desenvolvido por estudantes de Sistemas de Informação da UFRA,
            como parte de um projeto acadêmico para explorar os multiversos de Rick and Morty através da tecnologia.
          </p>
          <p className="text-white" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Utilizamos a API oficial da série para trazer informações precisas sobre todos os personagens,
            dimensões e episódios - ou pelo menos tão precisas quanto a ciência do Rick permite.
          </p>
        </Card.Body>
      </Card>

      <h3 className="text-center mb-4" style={{
        color: "#ffde00",
        fontFamily: "'Get Schwifty'",
        fontSize: "2.5rem",
        textShadow: "0 0 8px rgba(0, 180, 255, 0.5)",
        backgroundColor: "rgba(26, 26, 46, 0.7)",
        padding: "0.5rem",
        borderRadius: "10px"
      }}>
        Time de Desenvolvimento
      </h3>

      <Row className="g-4 mb-5">
        {[
          { name: "José Pires", role: "Especialista em Portais Dimensionais", img: JoseImg },
          { name: "Elivanilso Jr", role: "Mestre dos Estados de Plasma", img: ElivaImg },
          { name: "Everson Diogo", role: "Engenheiro de Realidades", img: EversonImg },
          { name: "Erick Sabio", role: "Arquiteto de Buracos de Minhoca", img: ErickImg }
        ].map((member, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <Card className="h-100" style={{
              backgroundColor: "rgba(26, 26, 46, 0.9)",
              border: "1px solid #00b4ff",
              borderRadius: "10px"
            }}>
              <Card.Img 
                variant="top" 
                src={member.img} 
                style={{ 
                  height: "200px", 
                  objectFit: "cover",
                  borderBottom: "2px solid #00ff9d"
                }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ color: "#00ff9d", fontWeight: "bold" }}>
                  {member.name}
                </Card.Title>
                <Card.Text style={{ color: "#ffffff" }}>
                  {member.role}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5" style={{
        backgroundColor: "rgba(26, 26, 46, 0.95)",
        borderTop: "4px solid #00ff9d",
        padding: "1.5rem",
        position: "relative"
      }}>
        <div className="d-flex align-items-center">
          <img 
            src="https://www.nicepng.com/png/full/165-1658563_rick-and-morty-characters-png-rick-sanchez-transparent.png" 
            alt="Rick Sanchez" 
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              marginRight: "1.5rem",
              filter: "drop-shadow(0 0 5px #00ff9d)"
            }}
          />
          <div>
            <h4 style={{ 
              color: "#00ff9d",
              marginBottom: "0.5rem",
              textShadow: "0 0 5px rgba(0, 180, 255, 0.5)"
            }}>
              Rick Sanchez
            </h4>
            <div style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: "1rem",
              borderRadius: "5px",
              borderLeft: "3px solid #ffde00"
            }}>
              <p className="mb-0" style={{ 
                color: "#ffffff",
                fontSize: "1.1rem",
                lineHeight: "1.5"
              }}>
                "Patético... mas menos patético que a maioria das coisas nessa dimensão. 
                Pelo menos o CSS não parece ter sido feito por um Jerry."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}