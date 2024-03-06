console.log('bobbyhadz.com');

// 1) Convert a String to a Date object in JavaScript

const str = '2022-09-24';

const date = new Date(str);
console.log(date); // 👉️ 2022-09-24T00:00:00.000Z

console.log(date.toDateString()); // 👉️ Sat Sep 24 2022

// -----------------------------------------------------------

// // 2) Splitting a Date string to create a valid Date

// // 👇️ (MM/DD/YYYY)
// const str = '09/24/2022';

// const [month, day, year] = str.split('/');

// console.log(month); // 👉️ 09
// console.log(day); // 👉️ 24
// console.log(year); // 👉️ 2022

// const date = new Date(+year, +month - 1, +day);
// console.log(date); // 👉️ Sat Sep 24 2022

// -----------------------------------------------------------

// // // 3) Splitting a Date and Time string to create a valid Date

// const str = '09/24/2022 07:30:14';

// const [dateValues, timeValues] = str.split(' ');
// console.log(dateValues); // 👉️ "09/24/2022"
// console.log(timeValues); // 👉️ "07:30:14"

// const [month, day, year] = dateValues.split('/');
// const [hours, minutes, seconds] = timeValues.split(':');

// const date = new Date(
//   +year,
//   +month - 1,
//   +day,
//   +hours,
//   +minutes,
//   +seconds,
// );

// //  👇️️ Sat Sep 24 2022 07:30:14
// console.log(date);

// -----------------------------------------------------------

// // // 4) Getting an ISO-formatted date

// const str = '09/24/2022 07:30:14';

// const [dateValues, timeValues] = str.split(' ');
// console.log(dateValues); // 👉️ "09/24/2022"
// console.log(timeValues); // 👉️ "07:30:14"

// const [month, day, year] = dateValues.split('/');
// const [hours, minutes, seconds] = timeValues.split(':');

// const date = new Date(
//   +year,
//   month - 1,
//   +day,
//   +hours,
//   +minutes,
//   +seconds,
// );

// //  👇️️ Sat Sep 24 2022 07:30:14
// console.log(date);

// // 👇️ "2022-09-24T04:30:14.000Z" (ISO 8601)
// console.log(date.toISOString());

// -----------------------------------------------------------

// // // 5) Convert a String to a Date using date-fns

// import {parse} from 'date-fns';

// const str = '12/21/2024 06:34:59';

// const date = parse(str, 'MM/dd/yyyy hh:mm:ss', new Date());

// console.log(date); // 👉️ 2024-12-21T06:34:59.000Z
