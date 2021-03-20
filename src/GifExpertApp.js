import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;



// // const [categories, setCategories] = useState(['boca', 'river']);
// const handleAdd =() => {
//     setCategories ([...categories, 'san lorenzo']);
// }
// //asi agrego un categoria nueva al presionar un click o se puede hacer asi:
// setCategories(cats => [...cats, 'san lorenzo']);
// //el primer argumento es el valor del estado anterior, osea cats, y lo que esta entre [] es el nuevo estado