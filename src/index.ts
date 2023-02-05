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
const typeName = Vehicletype[type];

//-All enum declarations with te same name inside a commonroot will contribute toward a single type
//when defining an enum across multiple same blocks,subsequent blocks after the first declaration must specify the numeric value to be used to continue the sequence
enum Boxsize {
  small,
  medium
}
enum Boxsize {
  large = 2,
  xlarge,
  xxlarge
}

//Bit FLags
/*
-they allow a series of items to be selected or deselected by switching individual bits in a sequence on and off.
-to ensure each value in an enumaration relates to a single bit, the numbering must follow the binary sequence whereby each value is a power of two
-by defaults when you create a variable to store state, all items are switched off
-to switch on an option, it can be simply assigned to the variable.
-to switch on multiple items, items can be combined with the OR Operator
*/

//using flags
enum DiscFlags {
  None = 0,
  Drive = 1,
  Influence = 2,
  Steadiness = 4,
  Conscientiousness = 8
}

// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

//testing flags
// true
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;

//Constant Enums
//-can be created using const keyword
//-they can be erased during compilation and all code referring to it is replaced with hard coded values
const enum Vehicletypes {
  pedalcycle,
  motorcycle,
  car,
  Sedan,
  Suv
}

const types = Vehicletypes.Suv;
//to make the inlining of values possible, const enum are not allowed to have computed members

//Union types
//-widens the allowable values specifying that the value can be of more than a single type
// Type annotation for a union type
let union: boolean | number;
// OK: number
union = 5;
// OK: boolean
union = true;
// Error: Type "string" is not assignable to type 'number | boolean'
//union = 'string';
// Type alias for a union type
//type StringOrError = string | Error;
// Type alias for union of many types
//type SeriesOfTypes = string | number | boolean | Error;

//Literal Types
//-used to narrow the rangle allowanble values to a subset of the type such as reducing a string to set of specific values

type Kingdom =
  | "Bacteria"
  | "Protozoa"
  | "Chromista"
  | "Plantae"
  | "Fungi"
  | "Animalia";
let kingdom: Kingdom;
// OK
kingdom = "Bacteria";
//Literal unions are really just union types made up of specific values
//you can also create a number literal type or a nuion/literal hybrid type using the same syntax

//Output
console.log(
  Name,
  Boy,
  age,
  Price,
  department,
  names,
  sayHello,
  type,
  typeName,
  Boxsize,
  personality,
  hasD,
  types,
  union,
  kingdom
);
