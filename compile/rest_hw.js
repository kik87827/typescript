const destructuringPrint = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
destructuringPrint({ user: 'kim', comment: [3, 5, 4], admin: false });
const dataArray = ([a, b, c]) => {
    console.log(a, b, c);
};
dataArray([35, 'bong', true]);
