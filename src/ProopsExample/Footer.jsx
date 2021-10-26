
function Footer(props){

    return (
    <>
    <pre>{JSON.stringify(props)}</pre>
    <h2>Employee name:{props.Name} </h2>
    <h2>Employee No:{props.Code} </h2>
   <h2>Employee Location:{props.Loc[0]}</h2>
   <h2>Employee Details:{props.emp_Details.fullName} , salary:{props.emp_Details.Sal}</h2>
    </>
    ); 
}
export default Footer;