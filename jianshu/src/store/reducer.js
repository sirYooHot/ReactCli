import { combineReducers } from 'redux-immutable';
import { reducer as header } from '../common/header/store';
import { reducer as home } from '../pages/home/store';

const reducer = combineReducers({
    header: header,
    home: home,
    
})
export default reducer;