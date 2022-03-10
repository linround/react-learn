function App(){
    // 不需要用额外的元素包裹列表元素！
    return [
        // 不要忘记设置 key :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
        <ListOfTenThings key="D"></ListOfTenThings>
    ];
}
// 调用子元素回调 numTimes 次，来重复生成组件
let res = 1
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div className="parent">
        {false}{items}
    </div>;
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div className="children" key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

export default App