import { combineReducers } from 'redux';
import authReducer from './loginReducer';
import userReducer from './userReducer';
// Importez d'autres reducers ici si nécessaire

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
