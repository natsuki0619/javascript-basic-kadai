const todey = new Date();

const year = todey.getFullYear();
const month = todey.getMonth()+1;
const day = todey.getDate();

console.log(year + "年" + month + "月" + day + "日");