import React from 'react'
import { useState } from 'react';

function Example() {
    // 声明一个叫 “count” 的 state 变量。
    console.log(useState(10000))
    const [count, setCount] = useState(0);
    const [num,setNum] = useState(10000)
    function changeCount(){
        setCount(count + 1)
    }
    function changeNum(){
        setNum(num+1)
    }
    return (
        <div>
            <button onClick={()=> changeNum()}>{count}You clicked {num} times</button>
            <button onClick={() => changeCount()}>
                Click me
            </button>
        </div>
    );
}
export default Example