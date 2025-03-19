var destructuringPrint = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
};
destructuringPrint({ user: 'kim', comment: [3, 5, 4], admin: false });
var dataArray = function (_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
};
dataArray([35, 'bong', true]);
