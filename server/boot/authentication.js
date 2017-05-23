'use strict';

module.exports = function enableAuthentication(server) {
  console.log("Enable authentication");
  server.enableAuth();
};
