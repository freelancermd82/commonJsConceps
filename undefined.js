/**

_-----------8 ways to get Undefine-----------
1. variable that is not initialized will give you undefined
2. function with no return
3. parameter that is no passed wil be undefined
4. if return has nothing on the right side will return undefined5
5. property that doesn't exits on an object will give you undefined
6. accessing array elements out side of the index range will give you undefine
7. deleting an element inside an array will give you undefine
8. set a value directly to give you undefined

*/
let first;
function second(a, b){
    const total = a + b;
    return total;
}