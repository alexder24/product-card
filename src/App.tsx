import './App.css'
import { ProductCard } from './components/ProductCard/ProductCard'
import { products } from './mocks/products'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Каталог товаров</h1>
      <div className={styles.catalog}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default App
