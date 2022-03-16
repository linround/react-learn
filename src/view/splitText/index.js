import React from "react";
import {byLetter, byWord} from './splitting.js'
import './style.scss'
class App extends React.Component{
    componentDidMount() {

        const {matches:motionOK} = window.matchMedia(
            '(prefers-reduced-motion: no-preference)'
        )

        if (motionOK) {
            const splitTargets = document.querySelectorAll('[split-by]')

            splitTargets.forEach(node => {
                const type = node.getAttribute('split-by')
                let nodes = null

                if (type === 'letter')
                    nodes = byLetter(node.innerText)
                else if (type === 'word')
                    nodes = byWord(node.innerText)

                if (nodes)
                    node.firstChild.replaceWith(...nodes)
            })
        }
    }

    render(){
        return (
            <div className={'splitText-container'}>
                <div className={'splitText-desc'}>
                    <h1>动画的一些注意和创意点</h1>
                    1.--index主要控制动画的时间
                    <br/>
                    2.--index span的样式，由于每个span时内联重写了自己的--index变量值,因此每个的动画事件会比较有规律地开始
                    <br/>
                    3.alternate 则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。
                </div>
                <section>
                    <h1 split-by="letter" letter-animation="breath">
                        animated letters
                    </h1>
                </section>

                <section>
                    <h1 split-by="letter" letter-animation="hover">
                        hover-me letters
                    </h1>
                </section>

                <section>
                    <p split-by="word" word-animation="trampoline">
                        split a paragraph of content 🤘💀
                    </p>
                </section>

            </div>
        )
    }
}
export default App