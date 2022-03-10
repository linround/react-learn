import React from "react";
import Backbone from "backbone";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.model.on('change', this.handleChange);
    }

    componentWillUnmount() {
        this.props.model.off('change', this.handleChange);
    }

    render() {
        return <li>{this.props.model.get('text')}</li>;
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
        this.handleChange = this.handleChange;
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.collection.on('add', 'remove', this.handleChange);
    }

    componentWillUnmount() {
        this.props.collection.off('add', 'remove', this.handleChange);
    }
    add(){
    }
    remove(props){}
    render() {
        return (
            <>
                <button onClick={this.add}>add</button>
                <button onClick={this.remove}>remove</button>
                <ul>
                    {this.props.collection.map(model => (
                        <Item key={model.cid} model={model} />
                    ))}
                </ul>
            </>
        );
    }
}


const collection = new Backbone.Collection([
    new Backbone.Model({ text: 'A' }),
    new Backbone.Model({ text: 'B' }),
    new Backbone.Model({ text: 'C' })
]);
function App(){

    let add = new Backbone.Model({ text: 'add' })
    function addItem(){
    }
    function removeItem(){
    }
    return (
        <div>
            <button onClick={()=>addItem()}>addItem</button>
            <button onClick={()=>removeItem()}>removeItem</button>
            <List collection={collection} />
        </div>
    )
}
export default App