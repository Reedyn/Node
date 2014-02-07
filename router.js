/* global console */
/* global exports */
function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        return "404 Not found";
    }
}

exports.route = route;