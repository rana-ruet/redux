import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//////////////////// for async action we need to use middleware (return a function from action)
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};

// ////////////////////////////// to minimize multiple request to the server for a single value
// using lodash library (_memoize() function)

// export const fetchUser = function (id) {
//   return function (dispatch) {
//     _fetchUser(id,dispatch)
//   }
// }

// const _fetchUser = _.memoize(async function (id,dispatch) {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type:'FETCH_USER', payload:response.data})
// })

// /////////////////////////////// alternative approaches

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  ////////////////////// getState function has access all the data in redux library
  // using lodash library, we will find only the unique id

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
