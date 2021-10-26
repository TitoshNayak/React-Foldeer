
import Footer from './Footer';
function Header(){

    let emp_name="Titosh Nayak";
    let emp_id=100;
    let emp_loc=["Bangalore","Chennai", "Mumbai"];
   let emp={fullName:"Titosh Nayak" ,Salary:5000};
    return(
        <div>
            <h1>Header page</h1>
<Footer name={emp_name} Id={emp_id}  Location={emp_loc} Details={emp} />

        </div>


        
    );
}
export default Header;