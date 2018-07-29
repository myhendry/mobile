import { combineReducers } from "redux";
import testReducer from "./testReducer";
import { toastReducer as toast } from "react-native-redux-toast";

export default combineReducers({
  // test: () => []
  test: testReducer,
  toast
});
