import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <h1 class="display-3 text-center text-info">Hello Waves!</h1>
    		    <input className="btn btn-primary" type="submit" value="Alert" onClick={() => {alert("Alert button onClick");}}/>
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}