const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
    $('.follow-toggle').each((index, element) => {
      new FollowToggle(element);
    });
    $('.users-search').each((index, element) => {
      new UsersSearch(element);
    });
  }
);
