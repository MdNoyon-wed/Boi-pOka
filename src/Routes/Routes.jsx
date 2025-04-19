import React from 'react';
import{
  createBrowserRouter,   
} from "react-router";
import Home from '../compones/Home/Home';
import About from '../compones/About/About';
import Root from '../compones/Root/Root';
import ErrorPage from '../compones/error/ErrorPage';
import ListedBooks from '../compones/Listed Books/ListedBooks';
import ReadList from '../compones/readlist/ReadList';

 export const router = createBrowserRouter([
  {
    path:"/",
   Component:Root,
   errorElement:<ErrorPage></ErrorPage>,
   children: [
    {
      index:true,
      loader:()=>fetch('booksData.json'),
      path:"/",
      Component:Home

    },
    {
      path:'/About',
      Component:About
    },
    {
      path:'readlist',
      loader:()=>fetch('booksData.json'),
      Component:ReadList
    },
    {
      path:'/Listed Books/:id',
      loader:()=>fetch('../booksData.json'),
      Component:ListedBooks
    }
   ]
     
  } 
]);
