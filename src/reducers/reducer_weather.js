import { FETCH_WEATHER } from '../actions/index';

//reducers are always a function
//first argument is always state, then action
//state = [] means initial state is empty array
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			//concat doesn't change exist array,itm makes a new copy and appends
			//so no mutating
			// return state.concat([action.payload.data]);
			return [action.payload.data, ...state]; //this is the same as above
	}
	return state;
}