import React from 'react';

type Props = {
    dataPerPage: number
    dataLength: number;
    paginate: Function;
    nextPage: Function;
    prevPage: Function;
    currentPage: number;
}

const Pagination: React.FC<Props> = (props) => {
    const { dataPerPage, dataLength, paginate, nextPage, prevPage, currentPage } = props;

    const getPaginationGroup = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(dataLength / dataPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    return (
        <nav aria-label="Page navigation example " className="mt-5 pagination">
            <ul className="pagination justify-content-end">
                <li className="page-item" onClick={() => { prevPage() }}>
                    <div className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </div>
                </li>
                {getPaginationGroup().map((number, i) => {
                    return <li className={`page-item ${currentPage === number && "active"}`} key={i} onClick={(e) => { paginate(number) }}><div className="page-link">{number}</div></li>
                })}
                <li className="page-item" onClick={() => { nextPage() }}>
                    <div className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};
export default Pagination
