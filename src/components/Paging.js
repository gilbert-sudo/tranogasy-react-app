
const Paging = ({ currentPage, onPageChange, totalPage }) => {
  const generatePageLinks = () => {
    const links = [];

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

    return links;
  };

  return (
    <div className="row mb-2">
      <div className="col-md-12 text-center">
        <div className="site-pagination">
          {generatePageLinks()}
        </div>
      </div>
    </div>
  );
};

export default Paging;
