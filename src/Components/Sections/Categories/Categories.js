const Categories = ({ title, data }) => (
  <section>
    <h2>{title}</h2>
    <div>
      {Array.isArray(data) && data.map((item, idx) => (
        <div key={idx}>
          {/* Substitua 'name' ou 'title' pela propriedade correta do seu objeto */}
          {item.name || item.title || JSON.stringify(item)}
        </div>
      ))}
    </div>
  </section>
);

export default Categories;