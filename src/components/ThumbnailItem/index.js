// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumb-image'

  const onClickThumbnailBtn = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="container-card">
      <button type="button" className="thumb-btn" onClick={onClickThumbnailBtn}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
