import './style.scss'
import React from "react";
class App extends React.Component{
    componentDidMount() {
        const switcher = document.querySelector('#theme-switcher')
        const doc = document.querySelector('.colorSchemes-container')

        switcher.addEventListener('input', e =>
            setTheme(e.target.value))

        const setTheme = theme =>
            doc.setAttribute('color-scheme', theme)
        setTheme('dark')
    }

    render() {
        let docLink = 'https://web.dev/shows/gui-challenges/oHcTn83M1ls/'
        return (
            <div className={'colorSchemes-container'}>
                <h3 className={'title'}>详解：</h3>
                <div className={'description'}>
                    HSL函数根据色调，饱和度和亮度分量来表示一个颜色，例如：
                    hsl(235 100% 50% / .5);；
                    <div>
                        实现思路：定义一系列颜色变量，通过js选项动态修改css变量的值即可；
                    </div>
                    <div><a href={docLink} target={'_blank'}>文档链接</a></div>
                </div>
                <header>
                    <form id="theme-switcher">
                        <div>
                            <input  type="radio" id="auto" name="theme" value="auto" />
                            <label htmlFor="auto">Auto</label>
                        </div>
                        <div>
                            <input type="radio" id="light" name="theme" value="light" />
                            <label htmlFor="light">Light</label>
                        </div>
                        <div>
                            <input defaultChecked type="radio" id="dark" name="theme" value="dark" />
                            <label htmlFor="dark">Dark</label>
                        </div>
                        <div>
                            <input type="radio" id="dim" name="theme" value="dim" />
                            <label htmlFor="dim">Dim</label>
                        </div>
                    </form>
                </header>

                <main>
                    <section>
                        <div className="surface-samples">
                            <div className="surface1 rad-shadow">1</div>
                            <div className="surface2 rad-shadow">2</div>
                            <div className="surface3 rad-shadow">3</div>
                            <div className="surface4 rad-shadow">4</div>
                        </div>
                    </section>

                    <section>
                        <div className="text-samples">
                            <h1 className="text1">
                                <span className="swatch brand rad-shadow"></span>
                                Brand
                            </h1>
                            <h1 className="text1">
                                <span className="swatch text1 rad-shadow"></span>
                                Text Color 1
                            </h1>
                            <h1 className="text2">
                                <span className="swatch text2 rad-shadow"></span>
                                Text Color 2
                            </h1>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default App