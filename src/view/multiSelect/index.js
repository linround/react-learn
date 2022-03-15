import React from "react";
import './style.scss'
class App extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        import('./main.js')
    }
    render() {
        return (
            <div className={'container'}>
                <div className="gui-split-button">
                    <button>View Cart</button>
                    <span className="gui-popup-button">
        <ul className="gui-popup">
          <li>
            <button>
            Checkout
            </button>
          </li>
          <li>
            <button>
            Quick Pay
            </button>
          </li>
          <li>
            <button>
            Save for later
            </button>
          </li>
        </ul>
      </span>
                </div>

                <div className="gui-split-button">
                    <button>Send</button>
                    <span className="gui-popup-button">
        <ul className="gui-popup">
          <li>
            <button>
            Schedule for later
          </button>
          </li>
          <li>
            <button>
            Delete
          </button>
          </li>
          <li>
            <button>
            Save draft
          </button>
          </li>
        </ul>
      </span>
                </div>

                <div className="gui-split-button">
                    <button>Squash</button>
                    <span className="gui-popup-button">
        <ul className="gui-popup">
          <li>
            <button>
            Create a merge commit
            </button>
          </li>
          <li>
            <button>
            Rebase
            </button>
          </li>
        </ul>
      </span>
                </div>
            </div>
        )
    }
}
export default App


