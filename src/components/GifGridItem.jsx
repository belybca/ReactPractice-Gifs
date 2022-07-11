export const GifGridItem = ({image}) => {
  return (
   
    <div className="card">
                <h5>{image.title}</h5>
                <img src={image.url} alt={image.title}/>
                <p>{image.title}</p>
            </div>
            
  )
}
