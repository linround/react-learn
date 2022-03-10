
import React, {Profiler} from "react";
class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState,'-------nextState')
        console.log(nextProps,'-------nextProps')
        console.log(nextContext,'-------nextContext')
        return true
    }

    // handleClick() {
    //     // 这部分代码很糟，而且还有 bug
    //     const words = this.state.words;
    //     words.push('marklar');
    //     this.setState({words: words});
    // }
    handleClick() {
        this.setState(state => ({
            words: state.words.concat(['marklar'])
        }))
    }
    callback(info){
        console.log(info,'===========Profiler')
    }
    actualDuration(info){
        console.log(info,'===========actualDuration')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
                <Profiler actualDuration={0} id="ListOfWords" onRender={this.callback}>
                    <ListOfWords words={this.state.words} />
                </Profiler>

            </div>
        );
    }
}
export default WordAdder