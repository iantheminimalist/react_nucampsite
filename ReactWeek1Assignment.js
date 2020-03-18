
class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class BootCamp {
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister){
      const arrFound = this.students.filter(s => s == studentToRegister);
      //const EmailFound = this.students.filter(s2 => s2.email == studentToRegister.email);
      
     if(arrFound.length == 0){
        this.students.push(studentToRegister);
        console.log("Registering " + studentToRegister + " to the bootcamp " + studentToRegister.email);	
        console.log(studentToRegister); 
     }


      //console.log(this.students);
    }
}

let Mia = new Student('mia malkova', 'miamalkova@mia.com', 'portland');
let Madison = new Student('Sasha Grey', 'SGrey@Gray.com', 'San Francisco');

const React101 = new BootCamp("React",101 );
const BootStrap102 = new BootCamp("Bootstrap",102 );
//console.log("Result: " + React101);
React101.registerStudent('Mia');
//console.log("Result: " + React101);
React101.registerStudent('Mia');
//console.log("Result: " + React101);
React101.registerStudent('Vina');
//console.log("Result: " + React101);
React101.registerStudent('Vina');
BootStrap102.registerStudent('mia');
//console.log("Result: " + React101);
BootStrap102.registerStudent("Sasha");
//console.log("Result: " + React101);
BootStrap102.registerStudent('Vina');
BootStrap102.registerStudent("Sasha");
//console.log("Result: " + React101);
BootStrap102.registerStudent('Vina');
console.log(React101);
console.log(BootStrap102);
