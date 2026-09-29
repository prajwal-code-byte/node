import students from "./student.js";
import config from "./config.js";

console.log(`${config.appName}`);
console.log(`PORT : ${config.port}`);
console.log(`ENVIRONMENT : ${config.envrironment}`);




const displayData = (stud) => {
    console.log(
        `ID : ${stud.id} | NAME : ${stud.name} | AGE : ${stud.age} | COURSE : ${stud.course}`
    );
    
}

students.forEach(displayData)
