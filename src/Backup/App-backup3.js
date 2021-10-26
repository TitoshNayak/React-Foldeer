import React from 'react';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends React.Component{
    render(){
        return(
            <div>

                <h5> Add components</h5>

                <Header />
                <Body />
                <Footer />
            </div>
        );
    }

}
export default App;