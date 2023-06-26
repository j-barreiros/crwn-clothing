
const App = () => {

  const cateogories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 1,
      title: 'Jackets',
    },
    {
      id: 1,
      title: 'Sneakers',
    },
    {
      id: 1,
      title: 'Womens',
    },
    {
      id: 1,
      title: 'Mens',
    },
  ]

  return (
    <section className="categories-container">

      {cateogories.map(({id, title}) => {
        return (
          <article key={id} className="category-container">
            <div className="background-image"/>
            <div className="cateogry-body-container">
              <h2>{title}</h2>
              <p>SHOP NOW</p>
            </div>
          </article>
        )
      })}
    </section>
  );
}

export default App;
