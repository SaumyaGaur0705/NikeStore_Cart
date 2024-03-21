import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState={
    listState: false,
    listItems: localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [], // Let Suppose Database
    cartTotalAmount: 0,
  cartTotalQantity: 0,
}

const ListSlice= createSlice({
 initialState,
 name:"list",
 reducers:{
    setOpenList: (state, action) => {
        state.listState = action.payload.listState;
      },
      setCloseList: (state, action) => {
        state.listState = action.payload.listState;
      },
      setAddItemToList: (state, action) => {
        const itemIndex = state.listItems.findIndex(
          (item) => item.id === action.payload.id
        );  
  
        if (itemIndex >= 0) {
           
          toast.success(`Item Already added in wishlist`);
        } else {
          const temp = { ...action.payload, listQuantity: 1 };
          state.listItems.push(temp);
  
          toast.success(`${action.payload.title} added to WishList`);
        }
  
        localStorage.setItem("list", JSON.stringify(state.listItems));
      },
  
      setRemoveItemFromList: (state, action) => {
        const removeItem = state.listItems.filter(
          (item) => item.id !== action.payload.id
        );
  
        state.listItems = removeItem;
        localStorage.setItem("list", JSON.stringify(state.listItems));
  
        toast.success(`${action.payload.title} Removed From WishList`);
      },
      setClearListItems: (state, action) => {
        state.listItems = [];
        toast.success(`WishList Cleared`);
        localStorage.setItem("list", JSON.stringify(state.listItems));
      },
  
      
 },
});

export const {
    setOpenList,
    setCloseList,
    setAddItemToList,
    setRemoveItemFromList,
    setClearListItems
  } = ListSlice.actions;

  export const selectListState = (state) => state.list.listState;
  export const selectListItems = (state) => state.list.listItems;
  
  
  export default ListSlice.reducer;
