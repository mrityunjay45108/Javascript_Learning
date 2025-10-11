// singleton
// Object.create


// literals   
// object banate taki uske members ko acces kr sake 
const JsUser={
  name: "Mrityunjay kumar",
  age: 21,
  email: "kumar@123",
  password: String,
  isUserLogedIn: false

}
// console.log(JsUser["name"])   is tarah se access kr sake h object ke element ko 
// JsUser.email="Kumarmrityunjay5210@gmail.com"   es tarah se inherit krke change krte h
// Object.freeze(JsUser)   ab hm kuch v change nhi kr sakte h object ke member ko inherit karke



// JsUser.greetingTwo=function(){
//   console.log('hello users, ${this.name}');  
// }
// console.log(JsUser.greetingTwo());
     

// ____________________++++++++++++++++++++++++++++++++_________________________________________________

  //  const obj1={1: "Mrityunjay" ,2: "kumar"}
  //  const obj2={3: "Madhu sudhan ", 4: "kumar"}
   
  //  const obj4=console.log({} ,obj1,obj2)    alag alag merge krta h
    // const obj4=Object.assign({} ,obj1,obj2)    ek jagah merge karega
    // console.log(obj4)

//  ____________________+++++++++++++++++++++++++++++++++__________________________________________
//                    is tarah se v access kr sakte h code neat and clean rahega
    // const {name}= JsUser
    // console.log(name)