import axios from "axios";
import { headerAll } from "./header.js";
import { endHeader } from "./endHeader.js";


let header = document.querySelector('.All-header')
let EndBG = document.querySelector('.header-end')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let img = document.querySelector('#img')
let money = document.querySelector('#price')
let rating = document.querySelector('#rating')
let box_item = document.querySelector('.div-item')
const id = location.search.split('=').at(-1)



//Название продукта
axios.get('http://localhost:9120/goods/' + id)
      .then(res => h1.innerHTML = res.data.title)
//Изображение
axios.get('http://localhost:9120/goods/' + id)
      .then(res => img.src = res.data.media)
//Описание
axios.get('http://localhost:9120/goods/' + id)
      .then(res => p.innerHTML = res.data.description)
//Деньги
axios.get('http://localhost:9120/goods/' + id)
      .then(res => money.innerHTML = res.data.price + "Сум")
//Оценка
axios.get('http://localhost:9120/goods/' + id)
      .then(res => rating.innerHTML = res.data.rating)
      
endHeader(EndBG)
headerAll(header)

