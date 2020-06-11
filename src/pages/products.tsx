import { connect } from 'umi';
import ProductList from '@/components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(item) {
    dispatch({
      type: 'products/add',
      payload: item,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} onAdd={handleAdd}/>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);