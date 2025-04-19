import React, { } from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
 
  // const data = use(bookPromise)
  // console.log(data)
  const {bookName,bookId, author,category,rating, image,totalPages,tags,publisher }= singleBook;
  return (
    <div className=''>

<Link to={`Listed Books/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto rounded-2xl'>
    <img className='h-[166px]'
      src={image} 
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-10"> 
    {
      tags.map(tag =><button className=''>{tag}</button>)
    }

    </div>
  
    <h2 className='mt-2'>{author}</h2>
    <h2 className="card-title mt-3">
     
     {bookName}
      <div className="badge badge-secondary">
      <h2>{totalPages}</h2>
      </div>
    </h2>
    <p>Book By : {publisher}</p>


    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<IoIosStarOutline /></div>
    </div>
  </div>
</div>
</Link>
     
    </div>
  );
};

export default Book;