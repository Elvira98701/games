import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Pagination.module.scss";
import { setPage } from "@redux/filter/slice";
import Button from "@components/Button";

const Pagination = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.games);
  const { currentPage, pageSize } = useSelector((state) => state.filter);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);
  const totalPages = Math.ceil(count / pageSize);

  useEffect(() => {
    if (totalPages < 5) {
      setVisiblePages(
        Array.from({ length: totalPages }, (_, index) => index + 1)
      );
    } else {
      setVisiblePages([1, 2, 3, 4, 5]);
    }
  }, [totalPages]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    updateVisiblePages(page);
  };

  const updateVisiblePages = (page) => {
    if (totalPages > 5) {
      if (page <= 3) {
        setVisiblePages([1, 2, 3, 4, 5]);
      } else if (page >= totalPages - 2) {
        setVisiblePages([
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ]);
      } else {
        setVisiblePages([page - 2, page - 1, page, page + 1, page + 2]);
      }
    }
  };

  const handlePrevClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageChange(currentPage + 1);
  };

  const renderPages = () => {
    return visiblePages.map((page) => (
      <li key={page}>
        <Button
          onClick={() => handlePageChange(page)}
          active={currentPage === page}
        >
          {page}
        </Button>
      </li>
    ));
  };

  return (
    <nav aria-label="Page navigation">
      <ul className={styles.pagination}>
        <li>
          <Button onClick={handlePrevClick} disabled={currentPage === 1}>
            <span aria-hidden="true">&laquo;</span>
          </Button>
        </li>
        {renderPages()}
        <li>
          <Button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">&raquo;</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
