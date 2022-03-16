import React from "react";
import './style.scss'
class App extends React.Component{
    render() {
        return(
            <div className={'mediaScroll-container'}>
                <h2>
                    滚动捕捉
                </h2>
                <p>
                    在父容器中使用scroll-snap-type来说明滚动的类型和方向，同时在子元素上使用scroll-snap-align属性才能设置滚动将捕捉
                    的位置，scroll-snap-align在子元素上使用来指示滚动应该停止的点。
                </p>
                <p>
                    该scroll-snap-type属性需要知道滚动捕捉发生的方向。这可以是xor y，或者逻辑映射block or inline。您还可以使用关键字both沿两个轴进行滚动捕捉
                </p>
                <p>
                    该scroll-snap-align属性的值可以是start、end或center— 指示内容应在滚动容器中对齐的点。在下面的示例中，您可以更改 的值scroll-snap-align以查看这如何更改滚动行为。
                </p>
                <article className="scroller">
                    <section>
                        <h2>Section one</h2>
                    </section>
                    <section>
                        <h2>Section two</h2>
                    </section>
                    <section>
                        <h2>Section three</h2>
                    </section>
                    <section>
                        <h2>Section one</h2>
                    </section>
                    <section>
                        <h2>Section two</h2>
                    </section>
                    <section>
                        <h2>Section three</h2>
                    </section>
                </article>
                <h2>end-scroll-snap-align</h2>
                <article className="scroller">
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section one</h2>
                    </section>
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section two</h2>
                    </section>
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section three</h2>
                    </section>
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section three</h2>
                    </section>
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section three</h2>
                    </section>
                    <section className={'end-scroll-snap-align'}>
                        <h2>Section three</h2>
                    </section>
                </article>
            </div>
        )
    }
}
export default App
