const student = {
    id : 101,
    name : "adam",
    course : 'Backend',

    introduction : function(){
        return (`Hi My name is ${this.name}, and Im studying ${this.course}`);
        
    }
}

console.log(student.name);
console.log(student.course);
console.log(student.introduction());