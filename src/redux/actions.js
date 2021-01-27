import {SELECT_NAV_BUTTON} from './actionConstants';

export default (currentSelectedNav = "BOOKS") => {
    return {
        type : SELECT_NAV_BUTTON,
        payload : currentSelectedNav
    }
}