import './style.scss'
function App(){
    let docLink = 'https://web.dev/shows/gui-challenges/_KqccADghcA/'
    return(
        <div className={'switch-container'}>
            解析说明：
            1.定义一个伪元素before，默认移动0，
            2.定义一个css变量，通过check的状态去改变这个变量值；从而实现左右移动；
            <div>
                <a href={docLink} target={'_blank'}>文档链接</a>
            </div>
            <main>
                <section>
                    <h2>States</h2>

                    <label htmlFor="switch-1" className="gui-switch">
                        Default
                        <input type="checkbox" role="switch" id="switch-1"/>
                    </label>

                    <label htmlFor="switch-3" className="gui-switch">
                        Indeterminate
                        <input type="checkbox" role="switch" id="switch-3"/>
                    </label>

                    <label htmlFor="switch-4" className="gui-switch">
                        Disabled
                        <input type="checkbox" role="switch" id="switch-4" disabled/>
                    </label>

                    <label htmlFor="switch-5" className="gui-switch">
                        Disabled (checked)
                        <input type="checkbox" role="switch" id="switch-5" disabled checked/>
                    </label>

                    <label htmlFor="switch-vertical" className="gui-switch -vertical">
                        Vertical
                        <input type="checkbox" role="switch" id="switch-vertical"/>
                    </label>

                </section>
            </main>
        </div>
    )
}
export default App