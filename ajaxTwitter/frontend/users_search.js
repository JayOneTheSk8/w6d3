const APIUtil = require('./api_util.js')

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(this.$el.find('input'));
    this.$ul = $(this.$el.find('ul'));
    this.$el.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    APIUtil.searchUsers(this.$input.val(), console.log("found..idk"));
  }
}

module.exports = UsersSearch;
