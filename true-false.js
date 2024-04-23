
/*

--------truthy-------
1. true
2.any number (+ve, -ve) will be truthy other than 0 
3. any string truthy but -- without empty '' string
4. {} empty object truthy
5. [] empty array truthy
------Falsy----------
1. false
2. 0 is false
3. undefined
4. null
 
*/

const x = false;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}
// optional
// ---check falsy
if(!y){
    console.log('value is falsy')
}