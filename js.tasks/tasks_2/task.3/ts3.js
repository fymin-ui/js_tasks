function deepClone(obj){

   return deepCopy=JSON.parse(JSON.stringify(obj));

}

let user={
    name: "Frank",
    age:67,
    company:{
        adress: "avenue16"

    }
};

//the original does not change, because of the deep copying
let Copy= deepClone(user);
Copy.company.adress= "avenue45"
alert(user.company.adress);
