import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "@redux/filter/slice";

import Button from "@components/Button";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.games);
  const { currentPage, pageSize } = useSelector((state) => state.filter);
  const [visiblePages, setVisiblePages] = useState([]);
  const totalPages = Math.min(Math.ceil(count / pageSize), 500);

  useEffect(() => {
    if (totalPages <= 5) {
      setVisiblePages(
        Array.from({ length: totalPages }, (_, index) => index + 1)
      );
    } else {
      if (currentPage < 3) {
        setVisiblePages(Array.from({ length: 5 }, (_, index) => index + 1));
      } else {
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);
        setVisiblePages(
          Array.from({ length: end - start + 1 }, (_, index) => start + index)
        );
      }
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handleNavigationClick = (direction) => {
    if (currentPage + direction >= 1 && currentPage + direction <= totalPages) {
      handlePageChange(currentPage + direction);
    }
  };

  const renderPages = () => {
    return visiblePages.map((page) => (
      <li key={page}>
        <Button
          onClick={() => handlePageChange(page)}
          active={currentPage === page}
          square={true}
        >
          {page}
        </Button>
      </li>
    ));
  };

  return (
    <nav aria-label="Pagination">
      <ul className={styles.pagination}>
        <li>
          <Button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            square={true}
          >
            &#8249;
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleNavigationClick(-1)}
            disabled={currentPage === 1}
            square={true}
          >
            <span aria-hidden="true">&laquo;</span>
          </Button>
        </li>
        {renderPages()}
        <li>
          <Button
            onClick={() => handleNavigationClick(1)}
            disabled={currentPage === totalPages}
            square={true}
          >
            <span aria-hidden="true">&raquo;</span>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            square={true}
          >
            &#8250;
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
