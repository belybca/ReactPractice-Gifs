import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {   
   const { images, isLoading } = useFetchGifs(category)
     // const [imagenes, setImagenes] = useState([]);
    
    // const getImages = async() => {
    //     const newImages = await getGif( category );
    //     setImagenes(newImages);
    // }
    // useEffect(()=>{
    //     getImages()},
    //     []);
    return (
    <>
        <h3>{category}</h3>
        {isLoading && (<h4>Cargando . . . </h4>)}
        
        <div className="card-grid">
            {images.map(img => (
                <GifGridItem image={img} key={img.id}/>
            ))}
        </div>
    </>
  )
}

