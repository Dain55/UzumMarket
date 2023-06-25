import axios from "axios"
import { headerAll } from "./header.js";
import { endHeader } from "./endHeader.js";
let header = document.querySelector('.All-header')
let div_items = document.querySelector('.div-item')
let EndBG = document.querySelector('.bg-end')
endHeader(EndBG)
headerAll(header)

axios.get('http://localhost:9120/goods')
.then(res => {
  reload(res.data)
})



export function reload(arr) {
  div_items.innerHTML = ""
  for(let item of arr){
    let box = document.createElement('div')
    let div_img = document.createElement('div')
    let img = document.createElement('img')
    let h5 = document.createElement('h5')
    let div_price = document.createElement('div')
    let p = document.createElement('p')

    box.classList.add('box')
    div_img.classList.add('div-img')
    div_price.classList.add('div-price')
    img.src = `${item.media}`
    h5.innerHTML = `${item.title}`
    p.innerHTML = `${item.price} сум`

    div_items.append(box)
    box.append(div_img,div_price)
    div_img.append(img)
    div_price.append(h5,p)
    
    box.onclick = () => {
     location.assign('/about.html?itemid=' + item.id)
    }
  }

  }
