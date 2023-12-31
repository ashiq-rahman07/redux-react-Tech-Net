import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './fetures/cart/cartSlice';
import productReducer from './fetures/products/productSlice';
import { api } from './api/apiSlice';
import userReducer from './fetures/user/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
