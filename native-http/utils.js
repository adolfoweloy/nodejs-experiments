exports.logUrl = function(u) {
  console.log('path: ' + u.path);
  console.log('pathname: ' + u.pathname);
  console.log('query: ' + JSON.stringify(u.query));
};
