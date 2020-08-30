import store from "./redux"
import {changeCount} from "./redux/count"

store.dispatch(changeCount(42))