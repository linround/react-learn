import React from "react";
class MyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'lin',
            age:26,
            color: props.color
        }
        this.refr = React.createRef()
        this.change = this.change.bind(this)
    }
    change(){
        console.log(this.refr,'---------------ref')
        this.forceUpdate()
        this.setState({
            name:'change',
            color: 'red'
        },()=>{
            console.log('=====================')
        })
    }
    render() {
        console.log('render-------')
        console.log(this,'======this')
        const divStyle = {
            color: 'blue',
        };
        return (
            <div style={divStyle} ref={this.refr} onClick={this.change}>Memo--{this.state.name}--{this.state.color}--{this.state.age}</div>
        )
    }
}
MyComponent.defaultProps = {
    color: 'blue'
};
function areEqual(prevProps, nextProps) {
    /*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    */
    return false
}
const Memo = React.memo(MyComponent, areEqual)
function App(){

    return (
        <Memo  color={'yellow'} val={'lin'}></Memo>
    )
}
export default App ;