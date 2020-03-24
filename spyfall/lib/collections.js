Games = new Mongo.Collection("games");
Players = new Mongo.Collection("players");
Setting = new Mongo.Collection("setting");

Games.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Players.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Setting.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Games.deny({insert: function(userId, game) {
  game.createdAt = new Date().valueOf();
  return false;
}});

Players.deny({insert: function(userId, player) {
  player.createdAt = new Date().valueOf();
  return false;
}});

Setting.deny({insert: function(userId, setting) {
  setting.createdAt = new Date().valueOf();
  return false;
}});
