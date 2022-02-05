import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//'use' significa que es un hook, es un standar
//useState, useReducer, useFetch

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {//los efectos no pueden ser async porque esperan algo sincrono

        getGifs(category) //trayendo la data
        .then( imgs => {

                     
                setState({
                    data: imgs,
                    loading: false
                })
         

        })

    }, [category])

    return state; // {data:[], loading: true}
}