export function endHeader(place) {
    place.innerHTML = ""
    place.innerHTML += `
    <div class="bg-end">
    <div class="div-center">
    <div class="end-header">
    <div class="about">
      <h4>О нас</h4>
      <br>
      <p>Пункты выдачи</p>
      <br>
      <p>Вакансии</p>
      <br>
    </div>
    <div class="users">
      <h4>Пользователям</h4>
      <br>
      <p>Связаться с нами</p>
      <br>
      <p>Вопрос - Ответ</p>
      <br>
    </div>
    <div class="entrepreneurs">
      <h4>Пользователям</h4>
      <br>
      <p>Связаться с нами</p>
      <br>
      <p>Вопрос - Ответ</p>
      <br>
    </div>
    <div class="page-internet">
      <h4>Скачать приложение</h4>
      <div class="download-app">
        <img src="/public/icons/AppStore.svg" alt="">
        <img src="/public/icons/googlePlay.svg" alt="">
      </div>
      <br>
      <br>
      <h4>Uzum в соцсетях</h4>
      <div class="internet">
          <img src="/public/icons/instargam.svg" alt="">
          <img src="/public/icons/telegram.svg" alt="">
          <img src="/public/icons/youtube.svg" alt="">
          <img src="/public/icons/facebook.svg" alt="">
      </div>
    </div>
    </div>
  </div>
  </div>
    `
}