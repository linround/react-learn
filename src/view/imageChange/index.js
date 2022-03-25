import React from "react";
import './style.scss'
let stories,median
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:5
        }
    }
    componentDidMount() {
        stories = document.querySelector('.stories')
        median = stories.offsetLeft + (stories.clientWidth / 2)
    }
    seen(event){
        if(!event) {
            return
        }
        const target = event.nativeEvent.target

        const nextElementSibling = target.nextElementSibling
        const previousElementSibling = target.previousElementSibling
        if(event.clientX > median ){
            if(!previousElementSibling){
                return;
            }
            target.classList.toggle('seen')

        }else {
            if(!nextElementSibling){
                return;
            }
            nextElementSibling.classList.remove('seen')
        }
    }
    render() {
        let links = [
            'https://picsum.photos/481/840',
            'https://picsum.photos/481/841',
            'https://picsum.photos/482/840',
            'https://picsum.photos/482/843',
            'https://picsum.photos/482/844',

        ]
        return (
            <div className={'image-change-container'}>
                <h1>使用css属性进行图片的渐进式切换</h1>
                <p>
                    1.利用透明度进行图片渐进式切换
                    <br/>
                    2.将透明度为0的设置点击穿透，也就是不可点击，从而点击下层的非透明图片
                    <br/>
                    3.根据offsetLeft和clientWidth计算点击的位置信息，从而判断是上一个还是下一个
                </p>
                <div className="stories">
                    <section className="user">
                        <img src={links[0]} className="story" onClick={this.seen} ></img>
                        <img src={links[1]} className="story" onClick={this.seen}></img>
                        <img src={links[2]} className="story" onClick={this.seen}></img>
                        <img src={links[3]} className="story" onClick={this.seen}></img>
                        <img src={links[4]} className="story" onClick={this.seen}></img>
                        <img src={links[5]} className="story" onClick={this.seen}></img>
                    </section>
                </div>
            </div>
        )
    }
}
export default App
