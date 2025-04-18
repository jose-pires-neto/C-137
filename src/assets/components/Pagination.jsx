import { Pagination as PaginationBS } from 'react-bootstrap'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  let items = []
  
  const startPage = Math.max(1, currentPage - 2)
  const endPage = Math.min(totalPages, currentPage + 2)

  if (startPage > 1) {
    items.push(
      <PaginationBS.Item key={1} onClick={() => onPageChange(1)}>
        1
      </PaginationBS.Item>
    )
    if (startPage > 2) {
      items.push(<PaginationBS.Ellipsis key="start-ellipsis" />)
    }
  }

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <PaginationBS.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
        className={number === currentPage ? 'active-dimension' : ''}
      >
        {number}
      </PaginationBS.Item>
    )
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(<PaginationBS.Ellipsis key="end-ellipsis" />)
    }
    items.push(
      <PaginationBS.Item key={totalPages} onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </PaginationBS.Item>
    )
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <PaginationBS className="dimension-pagination">
        <PaginationBS.Prev 
          onClick={() => onPageChange(Math.max(1, currentPage - 1))} 
          disabled={currentPage === 1}
        />
        {items}
        <PaginationBS.Next 
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} 
          disabled={currentPage === totalPages}
        />
      </PaginationBS>
    </div>
  )
}