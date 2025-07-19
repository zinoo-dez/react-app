import { useEffect, useReducer, useState } from "react";

interface Product {
     id: number;
     title: string;
     price: number;
     description: string;
     stock: string;
     image?: string;
     show?: boolean;
}

const API_URL = 'http://localhost:3007/api/products';

// Action types
const FETCH_START = 'FETCH_START'; // call api (LoadingState)
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Initial state
const initialState = {
     products: [], // empty array (Final State step-3)
     loading: false,
     error: null
};

// Reducer
const reducer = (state: typeof initialState, action: { type: string, payload: any }) => {
     switch (action.type) {
          case FETCH_START:
               return { ...state, loading: true }; // call api(LoadingState)
          case FETCH_SUCCESS:
               return { ...state, loading: false, products: action.payload, error: null }; // step-2 (LoadedState)
          case FETCH_ERROR:
               return { ...state, loading: false, error: action.payload };
          case ADD_PRODUCT:
               return { ...state, products: [...state.products, action.payload] };
          case UPDATE_PRODUCT:
               return {
                    ...state,
                    products: state.products.map((product: Product) =>
                         product.id === action.payload.id ? action.payload : product
                    )
               };
          case DELETE_PRODUCT:
               return {
                    ...state,
                    products: state.products.filter((product: Product) => product.id !== action.payload)
               };
          default:
               return state;
     }
};

// Fetch products
const fetchProducts = async (dispatch: any) => {
     dispatch({ type: FETCH_START }); // initail state (LoadingState)loading-true
     try {
          const response = await fetch(API_URL);
          const data = await response.json();
          // const products = data.slice(0, 6).map((item: any) => ({
          const products = data.map((item: any) => ({
               id: item.id,
               title: item.title,
               price: item.price,
               stock: item.stock,
               description: item.description,
               image: `https://picsum.photos/150/${Math.floor(Math.random() * 100)}`,
          }));
          dispatch({ type: FETCH_SUCCESS, payload: products });  //success state (LoadedState step-1) loading-false
     } catch (error) {
          dispatch({ type: FETCH_ERROR, payload: 'Error fetching products' }); //fail state (ErrorState step-2) loading-false
     }
};

// Add new product
// Omit က TypeScript မှာ object type တစ်ခုမှ အချို့သော properties များကို ဖယ်ရှားရန် အသုံးပြုတဲ့ utility type ဖြစ်ပါတယ်။
// Omit < Product, 'id' > ဆိုရင် Product type မှ id property ကို ဖယ်ရှားထားတဲ့ type ကို ဖန်တီးပေးပါတယ်။
const addProduct = async (dispatch: any, product: Omit<Product, 'id'>) => {
     try {
          const response = await fetch(API_URL, {
               method: 'POST',
               body: JSON.stringify(product),
               headers: {
                    'Content-type': 'application/json'
               }
          });
          const data = await response.json();
          dispatch({
               type: ADD_PRODUCT,
               payload: { ...product, id: data.id }
          });
     } catch (error) {
          dispatch({ type: FETCH_ERROR, payload: 'Error adding product' });//** (*) */
     }
};

// Update product
const updateProduct = async (dispatch: any, product: Product) => {
     try {
          await fetch(`${API_URL}/${product.id}`, {
               method: 'PUT',
               body: JSON.stringify(product),
               headers: {
                    'Content-type': 'application/json'
               }
          });
          dispatch({ type: UPDATE_PRODUCT, payload: product });//** (*) */
     } catch (error) {
          dispatch({ type: FETCH_ERROR, payload: 'Error updating product' }); //** (*) */
     }
};

// Delete product
const deleteProduct = async (dispatch: any, id: number) => {
     try {
          await fetch(`${API_URL}/${id}`, {
               method: 'DELETE'
          });
          dispatch({ type: DELETE_PRODUCT, payload: id });
     } catch (error) {
          dispatch({ type: FETCH_ERROR, payload: 'Error deleting product' });
     }
};


function ProductReducer() {
     const [state, dispatch] = useReducer(reducer, initialState);
     const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

     // Fetch products on component mount
     useEffect(() => {
          fetchProducts(dispatch);
     }, []);

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault(); // form action close
          const formData = new FormData(e.target as HTMLFormElement);
          // const productData = Object.fromEntries(formData) as Product;
          // create new product object
          const productData = {
               title: formData.get('title') as string,
               description: formData.get('description') as string,
               price: parseFloat(formData.get('price') as string),
               stock: formData.get('stock') as string,
               image: formData.get('image') as string
          };
          if (selectedProduct) {
               updateProduct(dispatch, { ...productData, id: selectedProduct.id }); // NEED ID
          } else {
               addProduct(dispatch, productData); // CREATE NO NEED ID
          }
          setSelectedProduct(null); // form input value reset
          (e.target as HTMLFormElement).reset();
     };
     return (
          <div>
               {/* <HelloReducer />
            <h1>Hello {name}</h1>
            <button className="px-2 py-1 bg-red-500 text-white" onClick={() => setName("NoNO")}>Change Name</button> */}

               {/* Products Section */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-5">
                    {state.loading ? (
                         <p className="p-5 text-center ">Loading...</p>
                    ) : state.error ? (
                         <p className="p-5 text-center text-red-500">{state.error}</p>
                    ) : (
                         state.products.map((product: Product) => (
                              <div key={product.id} className="border p-4 rounded-lg shadow">
                                   <img src={product.image ?? '//picsum.photos/200'} alt={product.title} className="w-full h-auto mb-4" style={{ minHeight: '200px', maxHeight: '200px' }} />
                                   <h2 className="text-xl font-bold">{product.title}</h2>
                                   <p className="text-gray-600">{product.description}</p>
                                   <p className="text-gray-600">Stock - {product.stock}</p>
                                   <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                                   <div className="mt-4 flex gap-2">
                                        <button
                                             onClick={() => setSelectedProduct(product)}
                                             className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                             Edit
                                        </button>
                                        <button
                                             onClick={() => deleteProduct(dispatch, product.id)}
                                             className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                             Delete
                                        </button>
                                   </div>
                              </div>
                         )))}
               </div>

               {/* Product Form */}
               <div className="mt-8 border p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                         {selectedProduct ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <form onSubmit={handleSubmit} className="w-[700px] m-auto p-6">
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
                              {/* <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            defaultValue={selectedProduct?.image || ''}
                            className="w-full p-2 border rounded"
                            required
                        /> */}
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
               </div >

          </div >
     )
}
export default ProductReducer