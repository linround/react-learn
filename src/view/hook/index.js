import React from 'react'
import { useState } from 'react';

function Example() {
    // 声明一个叫 “count” 的 state 变量。
    console.log(useState(10000))
    const [count, setCount] = useState(0);
    const [num,setNum] = useState(10000)
    let change = 1000000000
    function changeCount(){
        setCount(count + 1)
    }
    function changeNum(){
        setNum(num+1)
    }
    return (
        <div>
            <p onClick={()=> changeNum()}>{change}You clicked {num} times</p>
            <button onClick={() => changeCount()}>
                Click me
            </button>
        </div>
    );
}
export default Example