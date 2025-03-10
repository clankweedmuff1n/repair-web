import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  template: `
    <section class="my-20 py-20 py-5 border-none mx-0 bg-[url(https://bactoforce.com/wp-content/uploads/2021/08/graabaggrund.png)] bg-center bg-scroll bg-no-repeat bg-cover">
        <section class="text-center h-auto flex flex-col items-center">
          <div class="h-auto flex flex-row justify-center items-start flex-wrap gap-10">
            <div class="text-center h-auto flex flex-col items-center">
              <div class="m-auto">
                <figure class="items-center w-full">
                  <img decoding="async" width="200" height="256" src="https://bactoforce.com/wp-content/uploads/2021/08/lup_bactoforce.png" alt="" style="width:80px;height:102px">
                </figure>
              </div>
              <div class="mt-2.5 mb-0">
                <h2 class="mt-2.5 mb-0 text-5xl text-stats text-center">1995</h2>
                <p class="text-lg text-center">Operational Since</p>
              </div>
            </div>
            <div class="text-center h-auto flex flex-col items-center">
              <div class="m-auto">
                <figure class="items-center w-full">
                  <img loading="lazy" decoding="async" width="200" height="256" src="https://bactoforce.com/wp-content/uploads/2021/08/lup_globus.png" alt="" style="width:80px;height:102px">
                </figure>
              </div>
              <div class="mt-2.5 mb-0">
                <h2 class="mt-2.5 mb-0 text-5xl text-stats text-center">20+</h2>
                <p class="text-lg text-center">Operational Countries</p>
              </div>
            </div>
            <div class="text-center h-auto flex flex-col items-center">
              <div class="m-auto">
                <figure class="items-center w-full">
                  <img loading="lazy" decoding="async" width="200" height="256" src="https://bactoforce.com/wp-content/uploads/2021/08/lup_check.png" alt="" style="width:80px;height:102px">
                </figure>
              </div>
              <div class="mt-2.5 mb-0">
                <h2 class="mt-2.5 mb-0 text-5xl text-stats text-center">11.000+</h2>
                <p class="text-lg text-center">Inspections in 2020</p>
              </div>
            </div>
            <div class="text-center h-auto flex flex-col items-center">
              <div class="m-auto">
                <figure class="items-center w-full">
                  <img loading="lazy" decoding="async" width="200" height="256" src="https://bactoforce.com/wp-content/uploads/2021/08/lup_person.png" alt="" style="width:80px;height:102px">
                </figure>
              </div>
              <div class="mt-2.5 mb-0">
                <h2 class="mt-2.5 mb-0 text-5xl text-stats text-center">60</h2>
                <p class="text-lg text-center">Employees in Europe</p>
              </div>
            </div>
          </div>
        </section>
    </section>
  `,
})
export class StatsComponent {
}
