/*

--> JavaScript Data Types
1.String
2.Number
3.Bigint
4.Boolean
5.Undefined
6.Null
7.Symbol
8.Object

*/


let customerName = "Bilal Qadri" // string
let customerId = 123 // number
let x = true;
let y = false; //Boolean
const person = {firstName:"John", lastName:"Doe"}; //Object

console.table([customerName,customerId,x,y,person])
/*

Output:
┌─────────┬───────────┬──────────┬───────────────┐
│ (index) │ firstName │ lastName │    Values     │
├─────────┼───────────┼──────────┼───────────────┤
│    0    │           │          │ 'Bilal Qadri' │
│    1    │           │          │      123      │
│    2    │           │          │     true      │
│    3    │           │          │     false     │
│    4    │  'John'   │  'Doe'   │               │
└─────────┴───────────┴──────────┴───────────────┘
*/