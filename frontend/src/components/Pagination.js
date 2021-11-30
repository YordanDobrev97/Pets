import React from 'react';

const Pagination = ({ petsPerPage, totalPets, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="nav-pagination">
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;