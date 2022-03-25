import './style.scss'
export default function Home() {
    return (
        <main className={'home-outter'} style={{ padding: "1rem" }}>

            <div className={'home-container bg-image-change'}></div>
            <h1>五种居中方式布局</h1>
            <div className={'home-container home-center-grid'}>
                <div className={'home-item'}>grid居中</div>
            </div>
            <div className={'home-container home-center-flex'}>
                <div className={'home-item'}>flex 居中</div>
            </div>
            <div className={'home-container home-center-auto'}>
                <div className={'home-item'}>auto居中</div>
            </div>
            <div className={'home-container home-center-padding'}>
                <div className={'home-item'}>padding居中</div>
            </div>
            <div className={'home-container home-center-transform'}>
                <div className={'home-item'}>transform居中</div>
            </div>
        </main>
    );
}