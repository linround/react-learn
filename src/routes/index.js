
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
import ColorSchemes from '../view/colorSchemes/index'
import MediaScroll from '../view/mediaScroll/index'
import SpitText from '../view/splitText/index'
import ImageChange from '../view/imageChange/index'

export const Programs = [
  {
    path:'/home',
    element: Home,
    title: '居中布局方案demo'
  },
  {
    path:'/ImageChange', element: ImageChange,
    title:'渐进切换图像demo'
  },
  {
    path:'/SpitText',
    element: SpitText,
    title: '动画方案demo'
  },
  {
    path:'/MediaScroll',
    element: MediaScroll,
    title: '滚动捕捉demo'
  },
  {
    path:'/ColorSchemes',
    element: ColorSchemes,
    title: '换肤方案demo'
  },
  {
    path:'/Switch',
    element: Switch,
    title:'自定义选着按钮demo'
  },
  {
    path:'/Menu3D',
    element: Menu3D,
    title: '3D菜单按钮'
  },
  {
    path:'/Svg',
    element: Svg,
    title: '.ico电脑主题色适配demo'
  },
  {
    path: '/Toast',
    element:Toast,
    title: '自定义Toast'
  }
]

export const CodePrograms = [
  {
    path:'/lazy',
    element: Lazy,
    title: '资源懒加载'
  },
  {
    path:'/fragment',
    element: MyFragment,
    title: 'Fragment标签'
  }
]

export const base = [
  {
    path:'/MultiSelect',
    element: MultiSelect,
    title: '多选demo'
  },
  {
    path:'/context',
    element: Context,
    title: '组件通信Context'
  },
  {
    path:'/errorBoundary',
    element: ErrorBoundary,
    title: '错误捕获'
  },
  {
    path:'/ref',
    element: Ref,
    title: 'Ref'
  },
  {
    path:'/hocks',
    element: Hocks,
    title: '生命周期钩子'
  },
  {
    path:'/thirdLibrary',
    element: ThirdLibrary,
    title: 'backbone第三方库'
  },
  {
    path:'/thirdLibrary2',
    element: ThirdLibrary2,
    title: 'backbone第三方库'
  },
  {
    path:'/jsx',
    element: Jsx,
    title: 'Jsx'
  },
  {
    path: '/shouldComponentUpdate',
    element: ShouldComponentUpdate,
    title: '组件更新的优化'
  },
  {
    path: '/noES6',
    element: NoES6,
    title: 'NoES6'
  },
  {
    path: '/mixin',
    element: Mixin,
    title: 'Mixin'
  },
  {
    path: '/renderAndProp',
    element: RenderAndProp,
    title: '组件解耦方案'
  },
  {
    path:'/memo',
    element: Memo,
    title: 'Memo的使用'
  },
  {
    path: '/hook',
    element: Hook,
    title: '状态管理'
  },
  {
    path: '/useEffect',
    element: UseEffect,
    title: '自动更新useEffect'
  },
  {
    path: '/StateHook',
    element:StateHook,
    title: '自动更新useEffect'
  },
  {
    path: '/Litter',
    element:Litter,
    title: '列表渲染'
  }
]