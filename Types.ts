// Types in Typescript 
/*

    Therse are the types supported by TypeScript ::
        1. String -> store texts
        2. numbers -> for integers and real numbers
        3. boolean 
        4. undefined 
        5. null 
        6. bigint
        7. symbol -> types of special object that are going to mimic like a String

        all the 7 aare primitive types in TypeScript

*/

// Defining a variable and storing a value

//  var <variable_name> : <type> = <value>
// Example :: 

let id : number = 5;
console.log(id);

// This is known as Type-annotation or Type-Signature

let names : string = "Oswaldd" // TS will usderstand name will always store a string 

// Union of Types 
let userId : number | string ="26";
userId = 10 ;
/*
    Union means that for a particular variable there might exist more than one type of values 
*/


// ARRAYS in TypeScript

/**
 * Defining an array :: -->> let <variable_name> : <type>[] = [val1, val2,val3];
 * 
 *  
 */

let ids : number[] = [1,2,3,4,5];
console.log(ids);

/**
 * NOTE - Javascript has hetrogeneous arrays but typescript do not have heterogeneous arrays 
 */

// Defining Hetrogeneous arrays

let hetroarray : any[] = [1,2,false,"hi",null];

// Union of datatypes for arrays 

let data : (number | string | boolean)[] = [2,3,true,"hello"];


