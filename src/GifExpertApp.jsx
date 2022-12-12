import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        // categories.push('newCategory');
        setCategories([ newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Valorant'] ); //2da manera de hacerlo
    }

    return (
        <>
            {/* titulo*/}
            <h1>GifExpertApp</h1>       

            {/* Input */}
            <AddCategory 
            // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de GIF */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
  
                {
                 categories.map( ( category ) => (
                    <GifGrid key={ category } 
                    category={ category }/>
                    )) 
                }
                {/* <li>ABC</li> */}

                {/* Gif Item */}


        </>
    )
}