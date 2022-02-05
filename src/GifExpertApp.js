import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddCategory } from './components/AddCategory';
import { ListGift } from './components/ListGift';
import './index.css'



const GifExpertApp = () => {

    //const categories = ['Tennis', 'Football', 'Baseball'];
    const [categories, setCategories] = useState(['Basketball']);

    //const handleAdd = () => {
        //categories.push('Golf'); //esto es incorrecto porque no hay que mutar el primer elemento
        //setCategories([...categories,'Golf']); //cuando se usa el SET del state se sobreescribe lo que ya esta
      //  setCategories( c => [...c, 'Golf']);
    //}

    return(
        <>
            <h2 className='h2'>Search GIF images</h2>
            <AddCategory setCategories={setCategories}/>
            {/* <button className='btn btn-outline-primary btn-sm'>Add</button> */}
            <hr className='hr'/>         

            <ol>
                {
                    //se necesita una expresion que retorne algo por eso el for no sirve aqui
                    categories.map( category => (
                        //<li key={ category }>{category}</li>
                        <ListGift 
                            key={category}
                            category={category}
                        />
                    )) //retorna TODO lo de la categorias)
                }
            </ol>
        </>
    ); 
}

export default GifExpertApp;