import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Sailor moon",
    "Goku",
    "Caballeros del zodiaco",
  ]);
  const addCategory = () => {
    setCategories([...categories, "Naruto"]);
  };
  const onNewCategory= (newCategory) =>{
    //categories.push(newCategory);
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory 
        onNewCategory={ onNewCategory  }
        //setCategories={setCategories} 
        />
        {categories.map(category => (
         <GifGrid category={category} key={category}/>
        ))}
    </>
  );
};
