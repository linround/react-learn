
import Home from "../view/home";
import MyFragment from '../view/fragment/index'
import Lazy from '../view/lazy/index'
import Context from '../view/context/index'
import ErrorBoundary from '../view/errorBoundary/index'
import Ref from '../view/ref/index'
import Hocks from '../view/hocks/index'
import ThirdLibrary from '../view/thirdLibrary/index'
import ThirdLibrary2 from '../view/thirdLibrary/index2'
import Jsx from '../view/jsx/index'
import ShouldComponentUpdate from '../view/shouldComponentUpdate/index'
import NoES6 from '../view/noES6/index'
import Mixin from '../view/mixin/index'
import RenderAndProp from '../view/renderAndProp/index'
import Memo from '../view/memo/index'
import Hook from '../view/hook/index'
import UseEffect from '../view/useEffect/index'
import StateHook from '../view/stateHook/index'
import Litter from '../view/litter/index'
import Toast from "../view/toast/index";
import Svg from '../view/svg/index'
import Menu3D from '../view/menu3D'
import MultiSelect from '../view/multiSelect/index'
import Switch from '../view/switch/index'

let routes = [
    {
        path:'/home',
        element: Home
    },
    {
        path:'/Switch',
        element: Switch
    },
    {
        path:'/MultiSelect',
        element: MultiSelect
    },
    {
        path:'/Menu3D',
        element: Menu3D
    },
    {
        path:'/Svg',
        element: Svg
    },
    {
        path:'/fragment',
        element: MyFragment
    },
    {
        path:'/lazy',
        element: Lazy
    },
    {
        path:'/context',
        element: Context
    },
    {
        path:'/errorBoundary',
        element: ErrorBoundary
    },
    {
        path:'/ref',
        element: Ref
    },
    {
        path:'/hocks',
        element: Hocks
    },
    {
        path:'/thirdLibrary',
        element: ThirdLibrary
    },
    {
        path:'/thirdLibrary2',
        element: ThirdLibrary2
    },
    {
        path:'/jsx',
        element: Jsx
    },
    {
        path: '/shouldComponentUpdate',
        element: ShouldComponentUpdate
    },
    {
        path: '/noES6',
        element: NoES6
    },
    {
        path: '/mixin',
        element: Mixin
    },
    {
        path: '/renderAndProp',
        element: RenderAndProp
    },
    {
        path:'/memo',
        element: Memo
    },
    {
        path: '/hook',
        element: Hook
    },
    {
        path: '/useEffect',
        element: UseEffect
    },
    {
        path: '/StateHook',
        element:StateHook
    },
    {
        path: '/Litter',
        element:Litter
    },
    {
        path: '/Toast',
        element:Toast
    }
]
export default routes