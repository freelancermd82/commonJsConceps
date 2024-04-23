// ----------strongly typed Language----------
/**
 // int a = 5;
 // string b = 'alim halim';
 // boolean c = true;
 // object student = {name: 'Munna', id: 28};
 // int[] numbers = [12, 45, 75];
 // string[] friends = ['abul', 'babul'];
*/


 // --------JavaScript dynamic type Language----------
 // primitive type--
 
 const a = 5;
 const b = 'this is a javascript string';
 const d = true;

 // non-primitive
 const ages = [45, 65, 48];
 const student = {id: 23, class: 7};

 console.log(typeof a , typeof b, typeof d, typeof ages, typeof student);

 let x = 5;
 let y = x;
 console.log(x, y);
 y = 7;
 console.log(x, y);
 let p = {job: 'web developer'};
 let q = p;
 // q = {job: 'backend end'};
 q.job = 'font end developer';

