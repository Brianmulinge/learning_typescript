//variables
//string
let Name: string = "Brian";
let Boy: string;
Boy = "Junior";

//numbers
let age: number = 12;
let Price: number;
Price = 10;

//constants
const department: string = "engineer";

//array annotation
const names: string[] = ["James", "Brian", "Junior", "Joshua"];

//function annotation with parameters and return type
let sayHello: (name: string) => string;

//Primitive types
/*
-string- a sequence of UTF-16 code units
-boolean - true or false
-number- a double precision 64 bit floating point value
-symbol-a unique, immutable symbol, substitutable for a string as an object key
-undefined-when avriable value is not assigned a value
-null-used to represent an intentional absence of an object value
-void-used to represent cases where there is no value
-never-represent an unreachable section of code
*/

//Object and Dynamic Types
/*
-used to represent literrally any type
-The any type is used by the compiler in situations where it cannot infer the type automatically
-used when you dont want the compiler to check they type
*/
//Enumerations
//-they represent a collection of named elements that you can use to avoid littering your program with hard-coded values

enum Vehicletype {
  Lorry,
  Bus,
  Truck,
  Bike,
  van
}
const type = Vehicletype.Lorry;

//Union types

console.log(Name, Boy, age, Price, department, names, sayHello, type);
