import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface Product {
     id: number;
     title: string;
     price: number;
     description: string;
     stock: string;
     image?: string;
}
interface ProductState {
     products: Product[];
     loading: boolean;
     error: string | null;
}
const initialState: ProductState = {
     products: [],
     loading: false,
     error: null,
};

const API_URL = 'http://localhost:3007/api/products';
//fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
     const response = await fetch(API_URL);
     const data = await response.json();
     return data.map((item: Product) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          description: item.description,
          stock: item.stock,
          image: `https://picsum.photos/150/${Math.floor(Math.random() * 100)}`,
     }));
});
// add product
export const addProduct = createAsyncThunk('products/addProduct', async (product: Omit<Product, 'id'>) => {
     const response = await fetch(API_URL, {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
               'Content-type': 'application/json'
          }
     });
     const data = await response.json();
     console.log('data :', data)
     return { ...product, id: data.id * Math.random() + 1 };
});
// update product
export const updateProduct = createAsyncThunk('products/updateProduct', async (product: Product) => {
     await fetch(`${API_URL}/${product.id}`, {
          method: 'PUT',
          body: JSON.stringify(product),
          headers: {
               'Content-type': 'application/json'
          }
     });
     return product;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id: number) => {
     await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
     });
     return id;
});

const productSlice = createSlice({
     name: 'products',
     initialState,
     reducers: {},
     extraReducers: (builder: any) => {
          builder
               .addCase(fetchProducts.pending, (state: ProductState) => {
                    state.loading = true;
               })
               .addCase(fetchProducts.fulfilled, (state: ProductState, action: PayloadAction<Product[]>) => {
                    state.loading = false;
                    state.products = action.payload;
               })
               .addCase(fetchProducts.rejected, (state: ProductState, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload || 'Error fetching products';
               })
               .addCase(addProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
                    state.products.push(action.payload);
               })
               .addCase(addProduct.rejected, (state: ProductState, action: PayloadAction<any>) => {
                    state.error = action.payload || 'Error adding product';
               })
               .addCase(updateProduct.fulfilled, (state: ProductState, action: PayloadAction<Product>) => {
                    const index = state.products.findIndex(product => product.id === action.payload.id);
                    if (index !== -1) {
                         state.products[index] = action.payload;
                    }
               })
               .addCase(updateProduct.rejected, (state: ProductState, action: PayloadAction<any>) => {
                    state.error = action.payload || 'Error updating product';
               })
               .addCase(deleteProduct.fulfilled, (state: ProductState, action: PayloadAction<number>) => {
                    state.products = state.products.filter(product => product.id !== action.payload);
               })
               .addCase(deleteProduct.rejected, (state: ProductState, action: PayloadAction<any>) => {
                    state.error = action.payload || 'Error deleting product';
               });
     },
});

export default productSlice.reducer;