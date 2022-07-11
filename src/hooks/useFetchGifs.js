//ESTE ES UN CUSTOM HOOK
import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
   const [imagenes, setImagenes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGif( category );
        setImagenes(newImages);
        setIsLoading(false);
    }
    useEffect(()=>{
        getImages()},
        []);
   
    return{
        images: imagenes,
        isLoading: isLoading
    }
}
