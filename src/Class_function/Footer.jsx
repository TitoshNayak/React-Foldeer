import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <>
            <pre>{JSON.stringify(this.props)}</pre>


        <h1>Footer data</h1>
          <h2>Employee Name:{this.props.employee.name}</h2>
          <h2>Employee salary:{this.props.employee.sal}</h2>
          <h2>Employee Location:{this.props.employee.loc}</h2>
            </>
        
        );
    }
}

export default Footer;
