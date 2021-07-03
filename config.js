module.exports = {
  Admins: ["683287574076588103", "532061110598238209"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "k!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/HmZTT6jbmS", //Support Server Link
  Token: process.env.Token || "ODYwOTY0ODYxOTQ1MTg0Mjk2.YOC6Aw.zZwFbwypWXsCIEaEHvUw4qCGUoM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "860964861945184296", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "1c94ol3kgtaod9ciMdF_nUfzuJkWl83F", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Lexol is pog", //A Secret like a password
  IconURL:
    "https://i.hizliresim.com/ncd9576.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://ketcap-muzik-bot.glitch.me", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
 Lavalink: {
  id: "Main",
  host: "lava.link", 
  port: 80, 
  pass: "youshallnotpass", 
},
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ebc1567c7cec4c938b246197842898ae", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "e71197ee390f49f889f8179dcc96988b", //Spotify Client Secret
  },
};
