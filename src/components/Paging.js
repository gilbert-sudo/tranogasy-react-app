// import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import { updateCurrentPage } from '../redux/paginationRedux';
const Paging = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.pagination);
  const totalPage = state[0].totalPage;
  const currentPage = state[0].currentPage;
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
              dispatch(updateCurrentPage(i));
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
              dispatch(updateCurrentPage(currentPage - 2));
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
              dispatch(updateCurrentPage(i));
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
              dispatch(updateCurrentPage(currentPage + 2));
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
                dispatch(updateCurrentPage(currentPage - 1));
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
                dispatch(updateCurrentPage(currentPage +1));
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
