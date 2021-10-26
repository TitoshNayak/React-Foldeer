import Footer from "./Footer";

function Header(){
 let emp_Name="Nayak";
 let emp_No=101;
 let emp_Loc=["Bangalore","Chennai","Noida"];
 let emp={ fullName:"Titosh",Sal: 5000};
    return(
    <> 
   
    <h3>Header component- Data:{emp_Name} </h3>
    <hr />
    <Footer Name={emp_Name} Code={emp_No} Loc={emp_Loc} emp_Details={emp}/>
    </>
    );
}
export default Header;