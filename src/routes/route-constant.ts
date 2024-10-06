export const RoutePaths = {
  // non auth
  AUTH: '/auth',
  LOGIN: '/login',

  // auth
  HOME: '/',
  //dashboard
  DASHBOARD: '/dashboard',
  // users
  USER_LIST: '/users',
  USER_EDIT: (userId = ':userId') => `/users/edit/${userId}`,
  USER_DETAIL: (userId = ':userId', userTabItem = ':userTabItem?') => `/users/detail/${userId}/${userTabItem}`,
  //post
  POST_LIST: '/posts',
  POST_EDIT: (postId = ':postId') => `/posts/edit/${postId}`,
  POST_DETAIL: (postId = ':postId') => `/posts/detail/${postId}`,
};
