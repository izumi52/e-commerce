import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopRecucer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default shopRecucer;
