const student = {
id : 101,
name : 'Aarav Sharma',
course : "Backend Development",
year : 2026,
introduce : function(){
return "Hi, Im " +  this.name +  "and Im styding " + this.course
}
}


console.log(student.introduce());
