var studentarray=[];

function submit(){
    var display_student_array=[];
    for(var j=1; j<=4; j++){
        var studentname=document.getElementById("name_of_the_student_"+j).value;
        studentarray.push(studentname);
    }
    var l=studentarray.length;
    for(var k=0; k<l; k++){
        display_student_array.push("<h4>name-"+studentarray[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    studentarray.sort();
    var display_student_array=[];
    var l=studentarray.length;
    for(var k=0; k<l; k++){
        display_student_array.push("<h4>name-"+studentarray[k]+"</h4>");
    }
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+studentarray+"</h1>";
}