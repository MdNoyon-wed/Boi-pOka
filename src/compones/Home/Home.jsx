import React from 'react';
import Banner from '../banner/Banner';
import Books from '../Bookes/Books';
import { useLoaderData } from 'react-router';
 
 

const Home = () => {
  const data = useLoaderData();
  console.log(data)
 
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
 
   
   
    </div>
  );
};

export default Home;