import './style.scss'

function App(){
    const docPosition = 'https://web.dev/building-an-adaptive-favicon/'
    return (
        <div className="svg-container">
            <div className={'svg-container-title'}>SVG的优化：
                <a href={docPosition} target={'_blank'}>文档详情地址</a>
            </div>
            <div className={'svg-container-body'}>
                <link rel="icon" href="/icon.svg" />
            </div>
            <div className={'svg-container-footer'}></div>
        </div>
    )
}
export default App