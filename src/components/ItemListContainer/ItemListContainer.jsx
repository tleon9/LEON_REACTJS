import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im';
import {getFirestore} from '../../firebase/config';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () =>{


    const[items, setItems] = useState([])


    const [loading, setLoading] = useState(false)


    const {categoryId} = useParams()



    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
    
        const productos = categoryId
          ?db.collection('productos').where('category', '==', categoryId)
          : db.collection('productos')
          productos.get()
          .then((res) => {
                  const newItem = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                  });
                  console.table(newItem);
                  setItems(newItem);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                  setLoading(false);
                });
    
      }, [categoryId, setLoading])



    return (
        <>
        
            {
                loading
                ?<ImSpinner3/> 
                :<ItemList productos={items}/>
            }
        </>

            
              
    )
}



