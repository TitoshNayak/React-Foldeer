
import Student1 from './Student1';
function Teacher1(){
     let student_Name="Titosh Nayak";
     let student_Roll=101;
     let Dist=["BANGALORE","DELHI","MUMBAI","ODISHA"];
     let Class={tenth:"CBSE",twelth:"ISC",Degree:"BCA",
     University:"Bangalore University"};
     let center="Mohana";
    return(
     <>

     <h1>Student Records</h1>
     <hr />
    <Student1 Name={student_Name} 
    Roll={student_Roll} Dist={ Dist} Std={Class} Exam={center} />
     </>

    );
}
export default Teacher1;