
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Paging = ({ currentPage, onPageChange, totalPage }) => {
  const generatePageLinks = () => {
    const links = [];
  
    if (totalPage <= 3) {
      for (let i = 1; i <= totalPage; i++) {
        links.push(
          <a
            key={i}
            href="/#prodisplay"
            className={i === currentPage ? 'active' : ''}
            onClick={() => {
              onPageChange(i);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {i}
          </a>
        );
      }
    } else {
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPage, currentPage + 1);
  
      if (currentPage > 2) {
        links.push(
          <a
            key="leftEllipsis"
            href="/#prodisplay"
            onClick={() => {
              onPageChange(currentPage - 2);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ...
          </a>
        );
      }
  
      for (let i = start; i <= end; i++) {
        links.push(
          <a
            key={i}
            href="/#prodisplay"
            className={i === currentPage ? 'active' : ''}
            onClick={() => {
              onPageChange(i);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {i}
          </a>
        );
      }
  
      if (currentPage < totalPage - 1) {
        links.push(
          <a
            key="rightEllipsis"
            href="/#prodisplay"
            onClick={() => {
              onPageChange(currentPage + 2);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ...
          </a>
        );
      }
    }
  
    return links;
  };
  

  return (
    <div className="row mb-2">
      <div className="col-md-12 text-center">
        <div className="site-pagination">
          {currentPage > 1 && (
            <a
              href="/#prodisplay"
              className="prev"
              onClick={() => {
                onPageChange(currentPage - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          )}
          {generatePageLinks()}
          {currentPage < totalPage && (
            <a
              href="/#prodisplay"
              className="next"
              onClick={() => {
                onPageChange(currentPage + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

 export default Paging;
