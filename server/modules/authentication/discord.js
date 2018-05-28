/* global WIKI */

// ------------------------------------
// Discord Account
// ------------------------------------

const DiscordStrategy = require('passport-discord').Strategy

module.exports = {
  key: 'discord',
  title: 'Discord',
  useForm: false,
  props: ['clientId', 'clientSecret'],
  init (passport, conf) {
    passport.use('discord',
      new DiscordStrategy({
        clientID: conf.clientId,
        clientSecret: conf.clientSecret,
        callbackURL: conf.callbackURL,
        scope: 'identify email'
      }, function (accessToken, refreshToken, profile, cb) {
        WIKI.db.users.processProfile(profile).then((user) => {
          return cb(null, user) || true
        }).catch((err) => {
          return cb(err, null) || true
        })
      }
      ))
  }
}