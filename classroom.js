class ClassRoom{

    constructor(students = []){
        this.students = students;
    }

    addStudent(student){
        this.students.push(student);

    }

    removeStudent(student){
        this.students = this.students.filter(n =>n.toString().toLowerCase()!=student.toString().toLowerCase())

    }

    shuffleStudents(){
        for (var i = (this.students.length - 1); i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.students[i];
            this.students[i] = this.students[j];
            this.students[j] = temp;
        }   
    }

}
