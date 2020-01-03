var studentSeparator = function(students){
    var oddStudents = [];
    var evenStudents = [];
    for (i=0; i<students.length; i++){
        if(i%2 == 0){
            oddStudents.push(students[i]);
        }
        else{
            evenStudents.push(students[i]);
        }
    }
    console.log("oddStudents = " + oddStudents);
    console.log("evenStudents = " + evenStudents);
}