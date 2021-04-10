const categoryOptions = [
  'Android',
  'Angular',
  'Angularjs',
  'Apache',
  'Bash',
  'Css',
  'Cubernetes',
  'Docker',
  'Excell',
  'Git',
  'Html',
  'iOS',
  'Java',
  'Javascript',
  'Linux',
  'Mongodb',
  'Mysql',
  'Nginx',
  'Node.js',
  'Photoshop',
  'Php',
  'Python',
  'Reactjs',
  'Typescript',
  'Word',
  'Wordpress',
  'Xml',
];

export const Categorias = (props) => {
  // console.log('Pintando select Categorías');

  const { selectedCategory, setSelectedCategory } = props;

  return (
    <div className="categorias">
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
        required
        name="category"
      >
        <option value="">Elige una Categoría</option>
        {categoryOptions.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
