const span = (text, index) => {
  const node = document.createElement('span')

  node.textContent = text
  // 通过对span中的style中添加一个--index变量，从而针对具体每个span进行不一样的动画事件过度
  node.style.setProperty('--index', index)
  
  return node
}

export const byLetter = text =>
  [...text].map(span)

export const byWord = text =>
  text.split(' ').map(span)
