import React from "react";
import Backbone from 'backbone'
function connectToBackboneModel(WrappedComponent) {
    return class BackboneComponent extends React.Component {
        constructor(props) {
            super(props);
            console.log(props,'=====BackboneComponent')
            this.state = Object.assign({}, props.model.attributes);
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {
            console.log('componentDidMount')
            this.props.model.on('change', this.handleChange);
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('componentDidUpdate')
        }

        componentWillUnmount() {
            this.props.model.off('change', this.handleChange);
        }

        handleChange(model) {
            this.setState(model.changedAttributes());
        }

        render() {
            const propsExceptModel = Object.assign({}, this.props);
            delete propsExceptModel.model;
            console.log(propsExceptModel,'propsExceptModel',this.state)
            return <WrappedComponent {...propsExceptModel} {...this.state} />;
        }
    }
}

function NameInput(props) {
    return (
        <p>
            <input value={props.firstName} onChange={props.handleChange} />
            <br />
            双向绑定 {props.firstName}.
        </p>
    );
}

const BackboneNameInput = connectToBackboneModel(NameInput);

function Example(props) {
    function handleChange(e) {
        props.model.set('firstName', e.target.value);
    }

    return (
        <BackboneNameInput
            model={props.model}
            handleChange={handleChange}
        />
    );
}

const model = new Backbone.Model({ firstName: 'lin' });
console.log(model,'Backbone=====model')
function App(){
    return (
        <Example model={model} />
    )
}
export default App