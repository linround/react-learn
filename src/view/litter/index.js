import React from "react";
const A = 65 // ASCII character code

class Alphabet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            justClicked: null,
            letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
        };
    }
    handleClick(letter) {
        console.log(this.state)
        this.setState({ justClicked: letter });
    }
    render() {
        return (
            <div>
                Just clicked: {this.state.justClicked}
                <ul>
                    {this.state.letters.map(letter =>
                        <li key={letter} data-letter={letter} onClick={() => this.handleClick(letter)}>
                            {letter}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default Alphabet