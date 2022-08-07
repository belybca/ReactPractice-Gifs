import PropTypes from 'prop-types'
export const GifGridItem = ({title, url}) => {
  return (
   
    <div className="card">
                <h5>{title}</h5>
                <img src={url} alt={title}/>
                <p>{title}</p>
                <a>{url}</a>
                <a>{url}</a>
            </div>
            
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}