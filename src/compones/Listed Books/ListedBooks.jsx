import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../AddToDb/AddToDbm';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const ListedBooks = () => {
  const {id} = useParams();
  const convert = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === convert );
  const {bookName , image} = singleBook;
 

  const MySwal = withReactContent(Swal)




  const handleMarAsRead = id => {

    // MySwal.fire({
    //   title: <p>Hello World</p>,
    //   didOpen: () => {
    //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    //     MySwal.showLoading()
    //   },
    // }).then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>)
    // })
    toast("Wow so easy!");

    addToStoredDb(id)

  }
  
 
 
   
  return (
    <div className='w-2/3 mx-auto'>
     <img className='w-48' src={image}></img>
     <h2>{bookName}</h2>
     <ToastContainer />
     <button onClick={()=>handleMarAsRead(id)} className='btn btn-accent m-2'>Mar as Read</button>
     <button className='btn btn-info m-2'>Add To WishList</button>
    </div>
  );
};

export default ListedBooks;