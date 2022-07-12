
import React from "react";
import './style.scss'
import  './game-menu.css'
class App extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    openLink(){
        const href = 'https://gui-challenges.web.app/game-menu/dist/'
        window.open(href)
    }
    render(){

        return (
            <div className="threeD-button-set-container">
                <button className='asyncButton'>asyncButton</button>
                <ul className="threeD-button-set">
                    <li>
                        <button>New Game</button>
                    </li>
                    <li>
                        <button>Continue</button>
                    </li>
                    <li>
                        <button>Online</button>
                    </li>
                    <li>
                        <button>Settings</button>
                    </li>
                    <li>
                        <button>Quit</button>
                    </li>
                    <li>
                        <button onClick={this.openLink}>文档链接</button>
                    </li>
                </ul>

            </div>
        )
    }
}
export default App