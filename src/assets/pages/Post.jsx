import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card, ListGroup, Form, Button, Badge } from 'react-bootstrap'
import axios from 'axios'

export default function Post() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [relatedCharacters, setRelatedCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const characterResponse = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      setCharacter(characterResponse.data)
      
      const episodePromises = characterResponse.data.episode
        .slice(0, 5)
        .map(url => axios.get(url))
      const episodeResponses = await Promise.all(episodePromises)
      setEpisodes(episodeResponses.map(res => res.data))
      
      // comentarios
      setComments([
        { id: 1, author: 'Pessoa Pássaro', text: 'Este personagem esquisito!' },
        { id: 2, author: 'Sr. Meeseeks', text: 'Existência é dor! Mas esse personagem é legal!' },
        { id: 3, author: 'Summer', text: 'Este é tipo, meu personagem favorito de todos os tempos!' }
      ])
      
      // Fetch related characters (same species)
      const species = characterResponse.data.species
      const relatedResponse = await axios.get(
        `https://rickandmortyapi.com/api/character/?species=${species}`
      )
      setRelatedCharacters(relatedResponse.data.results
        .filter(c => c.id !== characterResponse.data.id)
        .slice(0, 4))
    }
    fetchData()
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      const randomNames = ['Rick', 'Morty', 'Jerry', 'Beth', 'Pickle Rick', 'Snowball']
      const comment = {
        id: comments.length + 1,
        author: randomNames[Math.floor(Math.random() * randomNames.length)],
        text: newComment
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  if (!character) return (
    <div className="text-center py-5">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
      <p className="mt-3">Viajando pelas dimensões...</p>
    </div>
  )

  return (
    <Container className="my-5">
      <div className="post-header">
        <h1>{character.name}</h1>
        <div className="d-flex justify-content-center gap-3 my-3">
          <Badge bg="success" pill>Espécie: {character.species}</Badge>
          <Badge bg={character.status === 'Alive' ? 'primary' : 'danger'} pill>
            Status: {character.status}
          </Badge>
          <Badge bg="warning" text="dark" pill>Gênero: {character.gender}</Badge>
        </div>
      </div>

      <Row>
        <Col lg={8}>
          <Card className="portal-card mb-4">
            <Card.Img 
              variant="top" 
              src={character.image} 
              style={{
                borderBottom: '3px solid var(--portal-green)'
              }}
            />
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{
                color: 'var(--portal-green)',
                fontSize: '2rem'
              }}>
                {character.name} Detalhes
              </Card.Title>
              
              <Row>
                <Col md={6}>
                  <ListGroup variant="flush" className="mb-4">
                    <ListGroup.Item className="bg-transparent text-white">
                      <strong>Origem:</strong> {character.origin.name}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      <strong>Localização:</strong> {character.location.name}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      <strong>Tipo:</strong> {character.type || 'Unknown'}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  {episodes.length > 0 && (
                    <div>
                      <h5 className="text-warning">Episódios em destaque:</h5>
                      <ul className="episode-list">
                        {episodes.map(episode => (
                          <li key={episode.id}>
                            {episode.episode}: {episode.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="portal-card mb-4">
            <Card.Header className="text-warning">
              <h3>Comentários Interdimensionais ({comments.length})</h3>
            </Card.Header>
            <Card.Body>
              {comments.map((comment) => (
                <div key={comment.id} className="comment-bubble mb-3">
                  <strong className="text-info">{comment.author}:</strong>
                  <p className="mb-0">{comment.text}</p>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card className="portal-card mb-4">
            <Card.Header className="text-warning">
              <h3>Adicione seu comentário multiversal</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escreva seu comentário aqui em todas as dimensões..."
                    className="bg-dark text-white"
                    style={{ border: '1px solid var(--portal-green)' }}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-schwifty">
                   Enviar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="portal-card mb-4">
            <Card.Header className="text-warning">
              <h3>Versões de realidade alternativa</h3>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {relatedCharacters.map((char) => (
                  <ListGroup.Item 
                    key={char.id} 
                    action 
                    href={`/post/${char.id}`}
                    className="bg-transparent text-white d-flex align-items-center"
                  >
                    <img 
                      src={char.image} 
                      alt={char.name}
                      width="50"
                      height="50"
                      className="rounded-circle me-3"
                    />
                    {char.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="portal-card mb-4">
            <Card.Header className="text-warning">
              <h3>Fatos Interdimensionais</h3>
            </Card.Header>
            <Card.Body>
              <ul className="fun-facts">
                <li>Este personagem existe em {Math.floor(Math.random() * 100) + 1} Dimensões conhecidas</li>
                <li>Há um {Math.floor(Math.random() * 50) + 1}% chance de eles terem conhecido Rick</li>
                <li>Seu DNA contém {Math.floor(Math.random() * 30)}% material alienígena</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}