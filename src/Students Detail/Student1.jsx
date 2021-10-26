function Student1(props){
    return(
        <>

      
        <h2>student Name:{props.Name}</h2>
        <h2>student Roll:{props.Roll}</h2>
        <h2>student Dist:{props.Dist[0]}</h2>
        <h2>student Course:{props.Std.tenth}</h2>
        <h2>student Course:{props.Std.twelth}</h2>
        <h2>student Course:{props.Std.University}</h2>
        <h2>student Exam center:{props.Exam}</h2>
        </>

    );
}

export default Student1;