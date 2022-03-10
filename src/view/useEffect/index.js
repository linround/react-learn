import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [info,setInfo] = useState({
        name:'lin',
        age: 26
    })
    useEffect(()=>{
        console.log('=======info')
        // setInfo({
        //     name:'change',
        //     age: info.age
        // })
    },[])
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        console.log('=========count',count)
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
        // setInfo({
        //     name:'setLin',
        //     age:info.age
        // })
    },[]);
    function change(){
        setInfo({
            name:'lin',
            age:26
        })
        setCount(count + 1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => change() }>
                Click me===={info.name}
            </button>
        </div>
    );
}
export default Example