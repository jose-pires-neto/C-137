import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BlogPost({ post }) {
  const statusColor = {
    Alive: 'success',
    Dead: 'danger',
    unknown: 'secondary'
  }

  return (
    <Card className="portal-card h-100">
      <Card.Img 
        variant="top" 
        src={post.image} 
        style={{
          borderBottom: '3px solid var(--portal-green)',
          objectFit: 'cover',
          height: '250px'
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-3" style={{ color: 'var(--portal-green)' }}>
          {post.name}
        </Card.Title>
        <div className="d-flex justify-content-center gap-2 mb-3">
          <span className={`badge bg-${statusColor[post.status]}`}>
            {post.status}
          </span>
          <span className="badge bg-warning text-dark">
            {post.species}
          </span>
        </div>
        <Card.Text className="text-center text-white mb-4">
        Visto pela última vez: {post.location.name}
        </Card.Text>
        <Link 
          to={`/post/${post.id}`} 
          className="btn btn-schwifty mt-auto mx-auto"
          style={{ width: 'fit-content' }}
        >
         Visualizar Personagem
        </Link>
      </Card.Body>
    </Card>
  )
}