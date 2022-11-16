import React from 'react';
import style from './Pagination.module.scss';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const nextPagination = () => {
        if (currentPage < 2) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage((currentPage - 1))
        }
    }

    const prevPagination = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage((currentPage + 1))
        }
    }

    return (
        <div className='flex flex-row items-center justify-center gap-[6px] mt-[180px]'>
            <a href="!#" className={`${style.paginationWord} mr-[18px]`}
                onClick={nextPagination}
            >
                Назад
            </a>
            {
                pages.map((page, index) => {
                    return (
                        <button
                            className={`${style.pagination}`}
                            key={index}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    )
                })
            }
            <a href="!#" className={`${style.paginationWord} ml-[18px]`}
                onClick={() => setCurrentPage(prevPagination)}
            >
                Вперед
            </a>
        </div>
    )
}

export default Pagination