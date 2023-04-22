import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) =>{


    const[items, setItems] = useState([])


    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {


        // iniciamos el efecto montaje, con un loading true
    
        setLoading(true)
        pedirProductos()
            .then((res)=>{
                if(categoryId){
                    setItems(res.filter(prod => prod.category === categoryId)  )
                  }else{
                    setItems(res)
                  }
            })
            .catch((error)=> console.log(error))
            .finally(()=> {setLoading(false)})
    
    }, [categoryId] )

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



