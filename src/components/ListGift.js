import React, {useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftListItem } from './GiftListItem';


export const ListGift = ({ category }) => {

  const {data: images, loading} = useFetchGifs(category); //renombrando la desestructuracion
  console.log(loading);


  return (
      <> 
        <h3>{category}</h3>      
        {/* {loading == true ? <p>Loading</p> : 'Data cargada'} */}

        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>
                {
                        images.map( img => (
                            //    <li key={img.id}>{img.title}</li>
                                <GiftListItem 
                                key={img.id}
                                {...img}/>
                        ))
                    }                            
        </div>
      </>
  );
};
