// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

document.write('<script src="./js/plugins/bootstrap-scrollspy.js"><\/script>');
document.write('<script src="./js/plugins/bootstrap-tooltip.js"><\/script>');
document.write('<script src="./js/plugins/bootstrap-popover.js"><\/script>');
document.write('<script src="./js/plugins/jquery.scrollTo-1.4.3.1-min.js"><\/script>');
