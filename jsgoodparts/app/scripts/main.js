// console.log('\'Allo \'Allo!');

// document.writeln('Hello worlds');

// Function.prototype.method = function (name, func)   {
//     this.prototype[name] = func;
//     return this;
// };

// console.log("A" === "\u0041");

// var empty_object = {};

// var stooge = {
//     "first_name" : "Abhishek",
//     "last_name" : "Howard"
// };

// console.log(stooge);
// console.log(stooge.first_name);
// console.log(stooge.last_name);
// console.log(Object.keys(stooge));

// var flight = {
//     airline: "Oceanic",
//     number: "815",
//     departure: {
//         IATA: "SYD",
//         time: "2004-09-23 10:42",
//         city: "sydney"
//     },
//     arrival: {
//         IATA: "LAX",
//         time: "2004-09-23 10:42",
//         city: "Los Angeles"
//     }
// };

// console.log(flight);

// console.log(stooge["first_name"]);
// console.log(flight.departure.IATA);

// console.log(stooge["middle_name"]);
// console.log(flight.status);

// var middle = stooge["middle_name"] || "(none)";
// console.log(middle);

// var status = flight.status || "unknown";

// console.log(status);


// stooge['first_name'] = 'Jerome';
// console.log(stooge.first_name);

// stooge["nickname"] = 'curly';
// console.log(stooge.nickname);

// flight.equipment = {
//     model: 'Boening 777'
// };

// flight.status = 'overdue';
// console.log(flight.status);

// var x = stooge;
// console.log(x);

// x.nickname = "curl";
// console.log(x.nickname);
// console.log(stooge.nickname);

// var nick = stooge.nickname;

// console.log(nick);


// //Here all refers to the different object
// var a = {},  b = {}, c = {};

// //Here all a, b, c refers to the same object
// a = b = c = {};

// if (typeof Object.create !== 'function')    {
//     Object.create = function (o)    {
//         var F = function () {};
//         F.prototype = o;
//         return new F();
//     };
// }
// var another_stooge = Object.create(stooge);

// console.log(another_stooge);

// console.log(Object.defineProperties);

// console.log(Object.prototype);
// console.log("----------------------------------");

// if (typeof Object.abhishek !== 'function')  {
//     Object.abhishek = function (o)    {
//         var F = function () {};
//         F.prototype = o;
//         console.log(new F());
//         return new F();
//     }
// }


// var another_stooge = Object.abhishek(stooge);

// console.log(flight.hasOwnProperty('contructor'));
// console.log(flight.hasOwnProperty(typeof(2)));
// console.log(flight.hasOwnProperty(typeof('number')));
// console.log(flight.hasOwnProperty(typeof(true)));


// console.log("Another stooge: "+ another_stooge);


// for (var name in another_stooge)    {
//     if (typeof another_stooge[name] !== 'function') {
//         document.writeln(name + ': ' + another_stooge[name]);
//     }
// }


// var i;
// var properties = [
//     'first-name',
//     'middle-name',
//     'last-name',
//     'profession'
// ];
// for (i = 0; i < properties.length; i += 1)  {
//     document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
// }

// console.log("before delete: "+ another_stooge.nickname);

// console.log("delete: "+ delete another_stooge.nickname);

// console.log("after delete: "+ another_stooge.nickname);

// var MYAPP = {};

// MYAPP.stooge = {
//     "first-name": "joe",
//     "last-name": "Howard"
// };

// MYAPP.flight = {
//     airline: "Oceanic",
//     number: 815,
//     departure: {
//         IATA: "SYD",
//         time: "2004-09-22 14:55",
//         city: "Sydney"
//     },
//     arrival: {
//         IATA: "LAX",
//         time: "2004-09-23 10:23",
//         city: "Los angeles"
//     }
// };



// console.log(MYAPP);


//Functions

// Object.prototype <-- Object

// Object.prototype <-- Function.prototype <-- function

// Function Literals

var add = function (a, b)   {
    return a + b;
};

console.log("addition: "+ add(3, 2));

