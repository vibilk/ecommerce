// // src/features/dataSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import jsonData from "../../Api/Products.json"
// // Define the initial state
// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// // Create an async thunk for fetching data
// export const fetchData = createAsyncThunk(
//   'data/fetchData',
//   async (_, thunkAPI) => {
//     try {
//     //   const response = await fetch(jsonData);
//     //   const data = await response.json();
//       return jsonData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Create the slice
// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default dataSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jsonData from "../../Api/Products.json"
const initialState = {
  data: [],
  cart: [], // Added cart state
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    try {
      return jsonData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.data?.products.find((item) => item.id === action.payload.id);
      if (item) {
        // Check if the item is already in the cart
        const existingItem = state.cart.find(cartItem => cartItem.id === action.payload.id);
        if (existingItem) {
          // Increase the quantity if the item already exists
          existingItem.quantity += 1;
        } else {
          // Add new item with quantity 1
          state.cart.push({ ...item, quantity: 1 });
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
  },
  updateQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    const item = state.cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
    }
},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = dataSlice.actions;
export default dataSlice.reducer;
