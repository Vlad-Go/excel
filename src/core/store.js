import {rootReducer} from '../redux/reducer';
import { storage } from './utils';

export function createStore(initState = {}) {
  let state = rootReducer(initState, {type: '_INIT_'});
  const listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners.filter((listener)=> listener != fn);
        }
      };
    },
    dispatch(action = {}) {
      state = rootReducer(state, action);
      storage(state);
      listeners.forEach((listener)=> listener(state));
    },
    getState() {
      return state;
    }
  };
}