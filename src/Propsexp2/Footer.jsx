function Footer(props){
    return(

        <>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Name:{props.name}</h2>
        <h2>Employee Id:{props.Id}</h2>
        <h2>Employee Location:{props.Location[2]}</h2>
        <h2>Employee :{props.Details.fullName}</h2>
        </>
    );
}
export default Footer;