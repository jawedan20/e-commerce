import * as types from "../../actions/action_types/action_type_notification";
import { countUnread } from "../../lib/NotificationUtils";

const initialState = {
	notifications: [],
	unreadNotification: 0,
};

const Notification = (state = initialState, action) => {
	let py = action.payload;

	switch (action.type) {
		case types.FECTHNOTIFICATION:
			return countUnread(py);
		case types.MARK_AS_READ:
			return {...state,unreadNotification:0}
    
    case types.MAKE_AS_UNREAD:
      return

		default:
			return state;
	}
};

export default Notification