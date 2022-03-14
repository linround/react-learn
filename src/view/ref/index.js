import React from "react";
const FancyButton = React.forwardRef((props, ref) => {
    function log(){
        console.log(ref,'内部')
    }
    return (
        <div className="refClass" ref={ref}>
            <button  onClick={log}  className="FancyButton">
                {props.children}内部访问
            </button>
        </div>
    )
});
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        this.textInput.current.focus();
    }

    render() {
        // 告诉 React 我们想把 <input> ref 关联到
        // 构造器里创建的 `textInput` 上
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
// 你可以直接获取 DOM button 的 ref：
function App(props) {

    const ref = React.createRef();
    function log(){
        console.log(ref,'外部')
    }
    return (
        <div>
            <FancyButton ref={ref}>
            </FancyButton>
            <button  onClick={log}  className="FancyButton">
                外部访问
            </button>
            <p>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" inputMode="numeric" />
            </p>
            <p>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" inputMode="decimal" />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </p>
            <p>
                <label htmlFor="number">Number</label>
                <input type="number" id="number" />
            </p>
            <p>
                <label htmlFor="tel">Tel</label>
                <input type="tel" id="tel" />
            </p>
            <p>
                <label htmlFor="url">URL</label>
                <input type="url" id="url" />
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" autoComplete="name" />
            </p>
            <p>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" autoComplete="country" />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" autoComplete="email" />
            </p>
            <CustomTextInput>   </CustomTextInput>
        </div>

    )
}


export default App
