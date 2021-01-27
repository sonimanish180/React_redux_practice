import {SELECT_NAV_BUTTON} from './actionConstants';

const INIT_STATE = {
    selectedNav : "BOOKS"
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case (SELECT_NAV_BUTTON) : {
            return {
                selectedNav : action.payload
            }
        }
        default : 
            return state
    }
}