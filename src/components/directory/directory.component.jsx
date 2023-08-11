// Components
import DirectoryItem from "../directory-item/directory-item.component"

// Styles
import "./directory.styles.scss"

const Directory = ({ categories }) => {
    return (
        <section className="directory-container">
            {categories.map((category) => {
                return (
                    <DirectoryItem
                        key={category.id}
                        category={category}
                    />
                )
            })}
        </section>
    )
}

export default Directory;