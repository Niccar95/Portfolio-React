import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        className="paginationButton"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t("pagination.prev")}
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`paginationButton ${page === currentPage ? "active" : ""}`}
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
        {t("pagination.next")}
      </button>
    </div>
  );
};
