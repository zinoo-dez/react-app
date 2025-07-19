import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import type { Product } from '../store/ProductSlice';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../store/ProductSlice';

// import { useName } from "../context/nameContext";
// import HelloReducer from "../reducer/HelloReducer";

function Redux() {
     // const { name, setName } = useName();
     const dispatch = useDispatch<AppDispatch>();
     const { products, loading, error } = useSelector((state: RootState) => state.products);
     const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

     useEffect(() => {
          dispatch(fetchProducts());
     }, [dispatch]);

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const productData = {
               title: formData.get('title') as string,
               description: formData.get('description') as string,
               price: parseFloat(formData.get('price') as string),
               stock: formData.get('stock') as string,
               image: formData.get('image') as string
          };

          if (selectedProduct) {
               dispatch(updateProduct({ ...productData, id: selectedProduct.id }));
          } else {
               dispatch(addProduct(productData));
          }

          setSelectedProduct(null);
          (e.target as HTMLFormElement).reset();
     };

     return (
          <div>
               {/* <HelloReducer />
            <h1>Hello {name}</h1>
            <button onClick={() => setName("popo")}>Change</button> */}

               {/* Products Section */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {loading ? (
                         <p>Loading...</p>
                    ) : error ? (
                         <p>{error}</p>
                    ) : (
                         products.map((product: Product) => (
                              <div key={product.id} className="border p-4 rounded-lg shadow">
                                   <img src={product.image ?? '//picsum.photos/200'} alt={product.title} className="w-full h-auto mb-4" style={{ minHeight: '200px', maxHeight: '200px' }} />
                                   <h2 className="text-xl font-bold">{product.title}</h2>
                                   <p className="text-gray-600">{product.description}</p>
                                   <p className="text-gray-600">{product.stock}</p>
                                   <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>

                                   <div className="mt-4 flex gap-2">
                                        <button
                                             onClick={() => setSelectedProduct(product)}
                                             className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                             Edit
                                        </button>
                                        <button
                                             onClick={() => dispatch(deleteProduct(product.id))}
                                             className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                             Delete
                                        </button>
                                   </div>
                              </div>
                         ))
                    )}
               </div>

               {/* Product Form */}
               <div className="mt-8 border p-10 rounded-lg w-[60%] m-auto">
                    <h2 className="text-2xl font-bold mb-4">
                         {selectedProduct ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <form onSubmit={handleSubmit}>
                         <div className="space-y-4">
                              <input
                                   type="text"
                                   name="title"
                                   placeholder="Product title"
                                   defaultValue={selectedProduct?.title || ''}
                                   className="w-full p-2 border rounded"
                                   required
                              />
                              <textarea
                                   name="description"
                                   placeholder="Product Description"
                                   defaultValue={selectedProduct?.description || ''}
                                   className="w-full p-2 border rounded"
                                   required
                              />
                              <input
                                   type="number"
                                   name="price"
                                   placeholder="Price"
                                   step="0.01"
                                   defaultValue={selectedProduct?.price || ''}
                                   className="w-full p-2 border rounded"
                                   required
                              />
                              <input
                                   type="number"
                                   name="stock"
                                   placeholder="stock"
                                   step="0.01"
                                   defaultValue={selectedProduct?.stock || ''}
                                   className="w-full p-2 border rounded"
                                   required
                              />
                              <input
                                   type="text"
                                   name="image"
                                   placeholder="Image URL"
                                   defaultValue={selectedProduct?.image || ''}
                                   className="w-full p-2 border rounded"
                                   required
                              />
                              <div className="flex gap-2">
                                   <button
                                        type="submit"
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                   >
                                        {selectedProduct ? 'Update Product' : 'Add Product'}
                                   </button>
                                   {selectedProduct && (
                                        <button
                                             type="button"
                                             onClick={() => setSelectedProduct(null)}
                                             className="bg-gray-500 text-white px-4 py-2 rounded"
                                        >
                                             Cancel
                                        </button>
                                   )}
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     );
}

export default Redux;

