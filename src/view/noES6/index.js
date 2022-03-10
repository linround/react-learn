import createReactClass from 'create-react-class'
let Greeting = createReactClass({
    render: function() {
        return (
            <button onClick={this.handleClick}>
                <h1>Hello, {this.props.name}</h1>;
            </button>
        )
    },
    getInitialState: function() {
        return {count: this.props.initialCount};
    },
    handleClick(){
        console.log(this.state,this.props)
        console.log(this)
    },
    getDefaultProps(){
        return {
            name:'lin',
            initialCount: 0
        }
    }
});
export default Greeting