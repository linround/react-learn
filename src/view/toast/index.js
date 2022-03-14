import React from "react";
import './style.css'
import Toast from './toast'
let num = 10
class App extends React.Component{
    constructor(props) {
        super(props);
    }
    toast(){
        Toast(`数字：${num+=10}`).then(r=>r)
    }
    render() {
        return (
            <div>
                <section className="gui-toast-group">
                    <output role="status">Wizard Rose added to cart</output>
                    <output role="status">Self Watering Pot added to cart</output>
                </section>
                <button onClick={this.toast}>toast</button>
            </div>
        )
    }
}
export default App

