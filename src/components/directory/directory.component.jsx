// Components
import CategoryItem from "../category-item/category-item.component"

// Styles
import "./directory.styles.scss"

const Directory = ({ categories }) => {
    return (
        <section className="directory-container">
            {categories.map((category) => {
                return (
                    <CategoryItem
                        key={category.id}
                        category={category}
                    />
                )
            })}
        </section>
    )
}

export default Directory;