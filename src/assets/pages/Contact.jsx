import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <Container className="py-3 py-md-5 px-3 px-md-4">
      {/* Título estilizado */}
      <h2 className="text-center mb-3 mb-md-4 px-2" style={{
        fontFamily: "'Get Schwifty'",
        color: "var(--portal-green)",
        fontSize: "clamp(2rem, 8vw, 3rem)",
        textShadow: "0 0 10px var(--portal-blue)",
        WebkitTextStroke: "1px var(--space-black)",
        lineHeight: "1.2"
      }}>
        CONTATO INTERDIMENSIONAL
      </h2>

      {/* Descrição */}
      <p className="text-center mb-4 mb-md-5 px-2 px-md-3" style={{
        color: "var(--morty-yellow)",
        fontSize: "clamp(1rem, 4vw, 1.2rem)",
        margin: "0 auto",
        backgroundColor: "rgba(26, 26, 46, 0.7)",
        padding: "1rem 1.5rem",
        borderRadius: "15px",
        border: "1px solid var(--portal-blue)",
        maxWidth: "800px"
      }}>
        *Arrot* Precisa falar com a gente? Envie uma mensagem através deste portal 
        interdimensional e responderemos em até 72 horas terrestres... ou quando o Rick 
        estiver sóbrio.
      </p>

      {/* Alert de sucesso */}
      {submitted && (
        <Alert variant="success" className="mb-3 mb-md-4 mx-2 mx-md-3 text-center" style={{
          backgroundColor: "rgba(0, 255, 157, 0.2)",
          border: "2px solid var(--portal-green)",
          color: "var(--portal-green)",
          fontSize: "clamp(1rem, 4vw, 1.2rem)",
          boxShadow: "0 0 15px rgba(0, 255, 157, 0.3)",
          margin: "0 auto",
          maxWidth: "800px"
        }}>
          <i className="bi bi-check-circle-fill me-2"></i>
          Mensagem enviada com sucesso para o multiverso! Nós *arrot* responderemos em breve.
        </Alert>
      )}

      {/* Formulário */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "rgba(26, 26, 46, 0.8)",
        padding: "1.5rem",
        borderRadius: "15px",
        border: "2px solid var(--portal-blue)",
        boxShadow: "0 0 30px rgba(0, 180, 255, 0.2)"
      }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mb-md-4">
            <Form.Label style={{ 
              color: "var(--portal-green)", 
              fontWeight: "bold",
              fontSize: "clamp(1rem, 4vw, 1.1rem)"
            }}>
              Seu Nome Dimensional
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "rgba(26, 26, 46, 0.7)",
                border: "1px solid var(--portal-blue)",
                color: "white",
                padding: "0.75rem",
                fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 mb-md-4">
            <Form.Label style={{ 
              color: "var(--portal-green)", 
              fontWeight: "bold",
              fontSize: "clamp(1rem, 4vw, 1.1rem)"
            }}>
              E-mail Interdimensional
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "rgba(26, 26, 46, 0.7)",
                border: "1px solid var(--portal-blue)",
                color: "white",
                padding: "0.75rem",
                fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 mb-md-4">
            <Form.Label style={{ 
              color: "var(--portal-green)", 
              fontWeight: "bold",
              fontSize: "clamp(1rem, 4vw, 1.1rem)"
            }}>
              Mensagem para o Multiverso
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "rgba(26, 26, 46, 0.7)",
                border: "1px solid var(--portal-blue)",
                color: "white",
                padding: "0.75rem",
                fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)"
              }}
            />
          </Form.Group>

          <div className="text-center mt-4 mt-md-5">
            <Button 
              type="submit"
              style={{
                background: "linear-gradient(45deg, var(--portal-green), var(--portal-blue))",
                border: "none",
                color: "var(--space-black)",
                fontWeight: "bold",
                padding: "0.75rem 1.5rem",
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                borderRadius: "50px",
                boxShadow: "0 0 15px rgba(0, 255, 157, 0.5)",
                transition: "all 0.3s ease",
                width: "100%",
                maxWidth: "300px"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 0 25px rgba(0, 255, 157, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 15px rgba(0, 255, 157, 0.5)";
              }}
            >
              ENVIAR ATRAVÉS DO PORTAL
            </Button>
          </div>
        </Form>
      </div>

      {/* Rodapé estilizado */}
      <p className="text-center mt-4 mt-md-5 px-2" style={{
        color: "var(--morty-yellow)",
        fontSize: "clamp(0.8rem, 3vw, 0.9rem)",
        fontStyle: "italic",
        margin: "0 auto",
        maxWidth: "800px"
      }}>
        * Todas as mensagens são criptografadas com tecnologia Plumbus™
      </p>
    </Container>
  )
}