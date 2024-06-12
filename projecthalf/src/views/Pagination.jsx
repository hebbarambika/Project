import React from 'react';
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";

const Pagination = ({ pageNumber, setPageNumber, totalItem, parPage, showItem }) => {
    let totalPage = Math.ceil(totalItem / parPage);
    let startPage = pageNumber;

    let dif = totalPage - pageNumber;

    if (dif <= showItem) {
        startPage = totalPage - showItem;
    }

    let endPage = startPage < 0 ? showItem : showItem + startPage;

    if (startPage <= 0) {
        startPage = 1;
    }

    const createBtn = () => {
        const btns = [];
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li
                    key={i}
                    onClick={() => setPageNumber(i)}
                    className={`${pageNumber === i ? 'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white' :
                        'bg-slate-600 hover:bg-indigo-400 shadow-lg shadow-indigo-500/50 hover:text-white text-[#d0d2d6]'}
                        w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`} >
                    {i}
                </li>
            );
        }
        return btns;
    };

    return (
        <ul className='flex gap-3 '>
            {pageNumber > 1 &&
                <li
                    className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#0a101e] cursor-pointer'
                    onClick={() => setPageNumber(pageNumber - 1)}
                >
                    <IoArrowUndo />
                </li>
            }
            {createBtn()}

            {pageNumber < totalPage &&
                <li
                    className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#0a101e] cursor-pointer'
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    <IoArrowRedoSharp />
                </li>
            }
        </ul>
    );
};

export default Pagination;
