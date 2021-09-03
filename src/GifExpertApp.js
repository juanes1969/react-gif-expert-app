import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     setcategories([...categories, 'HunterXHunter'])               
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map(category => {
                    return <GifGrid key={category} category={category}/>
                })}
            </ol>
        </>)
}

export default GifExpertApp;