moment.lang('ru');
document.getElementById("datetime").innerHTML = moment("20210801", "YYYYMMDD").fromNow("()");
document.getElementById("datetime-1").innerHTML = moment("20220101", "YYYYMMDD").fromNow("()");
console.log(datetime);