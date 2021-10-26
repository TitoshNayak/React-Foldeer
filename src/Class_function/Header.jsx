import React from 'react';
import Footer from './Footer';

class Header extends React.Component{
   emp ={name:"Nayak",
          sal:4000  ,
          loc:"Bangalore"   
};

    render(){ 
        return(
            <>
<h2>Header Component</h2>
<hr />

<Footer employee={this.emp} />
            
            </>
        );
    }
}
export default Header;