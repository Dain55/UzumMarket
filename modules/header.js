export function headerAll(place) {
  place.innerHTML = "";
  place.innerHTML = `    
    <header class="single-header">
    <div class="header-box">
      <div class="img">
        <img src="/public/icons/GPS.svg">
        <p>Город:Ташкент</p>
      </div>
      <div>
        <p>Пункты выдачи</p>
      </div>
      <div>
        <p>Доставим ваш заказ бесплатно — всего за 1 день!</p>
      </div>
      <div class="header-text">
        <p>Продавайте на Uzum</p>
        <p>Вопрос-ответ</p>
        <p> Мои заказы</p>
      </div>
      <div class="header-language">
        <img src="/public/icons/Russia.svg" alt="">
        <p>Русский</p>
      </div>
    </div>
  </header>
  <header class="header-logo">
    <div class="header-catalogy">
      <div class="logo">
        <img src="/public/icons/Uzum logo.svg" alt="">
      </div>
      <div id="btn-modal" class="button-catalogy">
        <img src="/public/icons/div.catalog-icon.svg" alt="">
        <p>Каталог</p>
      </div>
      <div class="div-search">
        <input class="search" type="search" placeholder="Искать товары и категории">
        <div class="button-search">
          <img class="" src="/public/icons/search.svg" alt="">
        </div>
      </div>
      <div class="all-button-header">
        <div class="div-login">
          <img src="/public/icons/Human.svg" alt="">
          <p>Войти</p>
        </div>
        <div class="div-heart">
          <img src="/public/icons/Heart.svg" alt="">
          <p>Избранное</p>
        </div>
        <div class="div-shop">
          <img src="/public/icons/Frame.svg" alt="">
          <p>Корзина</p>
        </div>
      </div>
    </div>
  </header>
  <header class="catalogy-decoret">
    <div class="header-catalogy-decoret">
      <p>Электроника</p>
      <p>Бытовая техника</p>
      <p>Одежда</p>
      <p>Обувь</p>
      <p>Аксессуары</p>
      <p>Красота</p>
      <p>Здоровье</p>
      <p>Товары для дома</p>
      <p>Строительство и ремонт</p>
      <p>Строительство и ремонт</p>
      <p>Автотовары</p>
      <p>Детские товары</p>
      <p>Ещё</p>
    </div>
  </header>`;

}
