/* -------------------------- Examples page -------------------------- */

const dropdowns = document.querySelectorAll('#dropdowns')
// const dropdownsInnerHTML = [...dropdowns].map(item=>item.innerHTML).sort(()=>.5-Math.random())


const data = [
  {
    h1: 'MeToo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.baidu.com'
  },
  {
    h1: 'Hoo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.taobao.com'
  },
  {
    h1: 'Zoo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.baidu.com'
  },
  {
    h1: 'Eoo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.taobao.com'
  },
  {
    h1: 'Coo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.baidu.com'
  },
  {
    h1: 'Uoo',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.taobao.com'
  },
  {
    h1: 'Uii',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.baidu.com'
  },
  {
    h1: 'MMMe',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.taobao.com'
  },
  {
    h1: 'hahaha',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'http://www.baidu.com'
  },
  {
    h1: 'nonono',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'https://twitter.com/search?q=%23SayHerName&src=typed_query'
  },
  {
    h1: 'ohohooh',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas impedit inventore omnis architecto vel? Deleniti minima laborum rerum amet nisi iste ab impedit illo omnis, nobis esse veritatis alias?',
    p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis quaerat minima nobis officia, iusto praesentium officiis recusandae. Repellat sint id, blanditiis dolorum voluptatibus qui voluptates nemo. Assumenda, quam eligendi!',
    href: 'https://twitter.com/search?q=%23SayHerName&src=typed_query'
  },
]

// 随机生成newData 打乱顺序
const newData = data.sort(()=>{
  return 0.5 - Math.random()
})

// 数据插入DOM
for(let i=0;i<dropdowns.length;i++){
  dropdowns[i].innerHTML = `
  <h1>${data[i].h1}</h1>
  <div class="dropdownContent">
    <div class="p1">${data[i].p1}</div>
    <div class="p2">${data[i].p2}</div>
    <a href="${data[i].href}">See more</a>
  </div>
  `
}

Array.from(dropdowns).forEach((item, index)=>{

  // item.innerHTML = dropdownsInnerHTML[index]

  const currentDropdown = item
  const currentContent = currentDropdown.querySelector('.dropdownContent')

  /* -------------------------- 
    1. 当鼠标移入currentDropdown时
    2. 检测currentContent底部和右边的边界是否超出屏幕
    3. 如果超出屏幕，则让content移动到标签上方去
  -------------------------- */

  currentDropdown.addEventListener('mouseover', ev=>{
    const contentRect = currentContent.getBoundingClientRect()
    const maxWidth = window.innerWidth - 20
    const maxHeight = window.innerHeight - 20

    if(contentRect.bottom > maxHeight && contentRect.right > maxWidth){
      currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px) translateX(${maxWidth-contentRect.right-15}px)`
    }else {
      if(contentRect.bottom > maxHeight){
        currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px)`
      }
      if(contentRect.right > maxWidth){
        currentContent.style.transform = `translateX(${maxWidth-contentRect.right-15}px)`
      }
    }

  })
})