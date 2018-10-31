const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === 'following' || this.followState === 'unfollowing') {
      this.$el.prop('disabled', true);
      this.$el.text(this.followState);
      return;
    }
    let buttonText = (this.followState === "unfollowed" ? "Follow!" : "Unfollow!");
    this.$el.removeProp('disabled');
    this.$el.text(buttonText);
  }

  handleClick(e) {
    e.preventDefault();
    this.followState = (this.followState === 'unfollowed' ? 'following' : 'unfollowing');
    this.render();
    if (this.followState === 'following') {
      APIUtil.followUser(this.userId).then(() => {
        this.followState = 'followed';
        this.render();
      });
    } else {
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = 'unfollowed';
        this.render();
      });
    }
  }
}

module.exports = FollowToggle;
