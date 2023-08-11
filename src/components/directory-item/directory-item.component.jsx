import "./directory-item.styles.scss";

const DirectoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <article className="directory-item-container">
          <div className="background-image"
            style={{backgroundImage:`url(${imageUrl})`}}
          />
          <div className="body">
            <h2>{title}</h2>
            <p>SHOP NOW</p>
          </div>
        </article>
      )
}

export default DirectoryItem;