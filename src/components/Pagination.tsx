import { useState, useEffect } from "react";

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
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxVisible = mobile ? 2 : 7;

  const getPageNumbers = () => {
    if (totalPages <= maxVisible) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    const start = Math.max(
      1,
      Math.min(currentPage, totalPages - maxVisible + 1)
    );
    return [...Array(maxVisible)].map((_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();
  const showLeftEllipsis = pageNumbers[0] > 1;
  const showRightEllipsis = pageNumbers[pageNumbers.length - 1] < totalPages;

  return (
    <div className="pagination">
      <button
        className="paginationButton"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="bi bi-caret-left-fill"></i>
      </button>

      {showLeftEllipsis && <p className="paginationEllipsis">...</p>}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`paginationButton ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </button>
      ))}

      {showRightEllipsis && <p className="paginationEllipsis">...</p>}

      <button
        className="paginationButton"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};
