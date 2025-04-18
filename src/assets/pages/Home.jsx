import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import axios from 'axios'
import BlogPost from '../components/BlogPost'
import Pagination from '../components/Pagination'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchMode, setSearchMode] = useState(false) // Novo estado para controlar o modo de pesquisa

  // Busca os personagens (paginação ou pesquisa)
  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true)
      try {
        let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`
        
        // Se estiver no modo de pesquisa e houver termo, busca por nome
        if (searchMode && searchTerm.trim() !== '') {
          url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchTerm)}`
        }

        const response = await axios.get(url)
        setCharacters(response.data.results)
        setFilteredCharacters(response.data.results)
        
        // Atualiza o total de páginas apenas se não estiver pesquisando
        if (!searchMode) {
          setTotalPages(response.data.info.pages)
        } else {
          setTotalPages(1) // Em modo pesquisa, mostra apenas 1 página
        }
      } catch (error) {
        console.error("Failed to fetch characters:", error)
        setCharacters([])
        setFilteredCharacters([])
      } finally {
        setIsLoading(false)
      }
    }

    const timer = setTimeout(() => {
      fetchCharacters()
    }, 500) // Debounce de 500ms

    return () => clearTimeout(timer)
  }, [currentPage, searchTerm, searchMode])

  // Ativa o modo de pesquisa quando o usuário digita
  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    setSearchMode(term.trim() !== '')
    setCurrentPage(1) // Reseta para a primeira página ao pesquisar
  }

  // Limpa a pesquisa e volta para a listagem normal
  const clearSearch = () => {
    setSearchTerm('')
    setSearchMode(false)
    setCurrentPage(1)
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5" style={{
        fontFamily: "'Get Schwifty'",
        color: "var(--portal-green)",
        fontSize: "3rem",
        textShadow: "0 0 10px var(--portal-blue)"
      }}>
        Personagens do Multiverso
      </h2>

      {/* Barra de pesquisa */}
      <div className="search-container mb-5">
        <InputGroup className="search-input-group">
          <InputGroup.Text className="search-prepend">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            className="search-input"
            placeholder="Pesquise personagens em todas as dimensões..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <Button
              className="clear-search-btn"
              onClick={clearSearch}
            >
              <i className="bi bi-x"></i>
            </Button>
          )}
        </InputGroup>
      </div>
      
      {isLoading ? (
        <div className="text-center py-5">
          <div 
            className="spinner-border text-warning" 
            style={{ width: '3rem', height: '3rem' }} 
            role="status"
          >
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p className="mt-3">Escaneando Dimensões...</p>
        </div>
      ) : (
        <>
          {filteredCharacters.length === 0 ? (
            <div className="text-center py-5">
              <h4 style={{ color: 'var(--portal-green)' }}>
                Nenhum personagem encontrado nesta dimensão!
              </h4>
              <p className="text-white">
                Tente pesquisar em outra realidade...
              </p>
            </div>
          ) : (
            <>
              <Row className="g-4">
                {filteredCharacters.map((character) => (
                  <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
                    <BlogPost post={character} />
                  </Col>
                ))}
              </Row>
              
              {/* Mostra paginação apenas quando não está pesquisando */}
              {!searchMode && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </>
      )}
    </Container>
  )
}