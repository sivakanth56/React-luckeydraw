console.log("hi sivsksnth");

console.log("hi sagar");

function greet(name) {
  console.log(`hello ${name}`);
}

greet("suresh");

greet("siva");

function add (a,b, ...restofpermeter){

  console.log(restofpermeter)
  
    return a+b

}

    add (10,20)

    console.log(add (10,50,50,45,55,14))


 const obj={
  a:1,
  b:2,
  sum (){
    return this.a + this.b
  }
  
 }
 console.log(obj.sum())
  console.log(obj.a,obj.b)

 console.log(obj.sum())