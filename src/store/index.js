import {createStore, combineReducers} from 'redux';
import topics from './reduce/topics';
import topicCon from './reduce/topicContent';
import user from './reduce/user'
export default createStore(combineReducers({
    topics,
    topicCon,
    user
}))