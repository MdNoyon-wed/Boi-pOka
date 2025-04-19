import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../AddToDb/AddToDbm';

const ListedBooks = () => {
  const {id} = useParams();
  const convert = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === convert );
  const {bookName , image} = singleBook;

  const handleMarAsRead = id => {

    addToStoredDb(id)

  }
  
 
 
   
  return (
    <div className='w-2/3 mx-auto'>
     <img className='w-48' src={image}></img>
     <h2>{bookName}</h2>

     <button onClick={()=>handleMarAsRead(id)} className='btn btn-accent m-2'>Mar as Read</button>
     <button className='btn btn-info m-2'>Add To WishList</button>
    </div>
  );
};

export default ListedBooks;