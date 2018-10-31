const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      method: 'GET',
      url: "/users/search",
      data: queryVal,
      dataType: 'JSON',
      success: success
    });
  }
};
// when you make an ajax request (specifically with jquery) it returns a promise object

module.exports = APIUtil;
