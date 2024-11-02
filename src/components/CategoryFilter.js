function CategoryFilter({ categories, currentCategory, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          className={currentCategory === category ? 'selected' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

