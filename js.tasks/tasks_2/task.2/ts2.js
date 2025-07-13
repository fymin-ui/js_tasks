let user={
    name: "Frank",
    age:67,
    company:{
        adress: "avenue16"

    },
    greet (){
        alert("Hello, I’m "+ this.name + " and I’m "+ this.age + " years old.");

    }
};
user.greet();

let copy=Object.assign({}, user);
//or let copy={...user};

copy.company.adress="avenue45"
alert(user.company.adress);



