import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddItemToCart, setOpenCart } from "../app/CartSlice.js";
import ListCount from './list/ListCount';
import ListEmpty from './list/ListEmpty';
import ListItem from './list/ListItem';
import { selectListItems,
  selectListState,setCloseList, setClearListItems } from '../app/ListSlice.js';


const List = () => {
  const dispatch=useDispatch();
  const ifListState = useSelector(selectListState);
  const listItems = useSelector(selectListItems);

  const onListToggle = () => {
    dispatch(setCloseList({
        listState: false
    })
    );

};
const onClearListItems = () => {
  dispatch(setClearListItems())
};
const onCartToggle = () => {
  dispatch(setOpenCart({
      cartState: true
  }))
};
const onAddToCart = () => {
  const item = { id, title, text, img, color, shadow, price };

  dispatch(setAddItemToCart(item));
};

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifListState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}>
        <div className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifListState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}>
          <ListCount onListToggle={onListToggle} onClearListItems={onClearListItems}/>
          {listItems?.length === 0 ? <ListEmpty onListToggle={onListToggle} /> : 
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {listItems?.map((item, i) => (
                <ListItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" onClick={()=>  onCartToggle()} className="button-theme bg-theme-cart text-white">Go To Cart </button>
              </div>
            </div>

          </div>}
         
        </div>
      </div>
    </>
  );
}

export default List;
