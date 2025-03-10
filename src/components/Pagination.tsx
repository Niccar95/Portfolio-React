interface IPaginationProps {
  totalProjects: number;
  projectsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalProjects,
  projectsPerPage,
  currentPage,
  onPageChange,
}: IPaginationProps) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        className="paginationButton"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${page === currentPage ? "active" : ""} paginationButton`}
        >
          {page}
        </button>
      ))}

      <button
        className="paginationButton"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
