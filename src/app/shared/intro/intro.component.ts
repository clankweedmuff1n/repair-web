import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  template: `
    <div
      class="relative bg-[url('/assets/images/portfolio/cosmos.jpg')] mb-10 h-[90vh] flex justify-center bg-center bg-cover text-center py-52">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="flex items-center justify-center flex-col text-white">
        <h1 class="z-10 text-6xl text-center mb-8">
          ИП "ХОТУКЕВ"
        </h1>
        <h2 class="z-10 text-4xl mb-8">
          ОБСЛУЖИВАНИЕ, РЕМОНТ, МОДЕРНИЗАЦИЯ ПЛАСТИЧНЫХ ТЕПЛООБМЕННИКОВ
          <br>
          <br>
          кратчайшие сроки - быстро и качественно
        </h2>
        <p class="z-10 pt-7 text-2xl text-center">
          - услуги по комплексному обслуживанию, ремонту и модернизации пластинчатых теплообменников
          <br>
          - работы по ремонту и обслуживанию теплообменников белорусских и зарубежных производителей
        </p>
        <div class="z-10 mt-16 flex items-center gap-16 justify-center flex-row">
          <button
            class="text-2xl transition-all hover:bg-white hover:text-black bg-transparent border-white border-3 rounded-4xl px-10 py-5">
            ремонт
          </button>
          <button
            class="text-2xl transition-all hover:bg-white hover:text-black bg-transparent border-white border-3 rounded-4xl px-10 py-5">
            обслуживание
          </button>
          <button
            class="text-2xl transition-all hover:bg-white hover:text-black bg-transparent border-white border-3 rounded-4xl px-10 py-5">
            галерея
          </button>
          <button
            class="text-2xl transition-all hover:bg-white hover:text-black bg-transparent border-white border-3 rounded-4xl px-10 py-5">
            наши партнеры
          </button>
        </div>
      </div>
    </div>
  `,
})
export class IntroComponent {

}
