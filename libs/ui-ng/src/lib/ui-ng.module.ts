import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {

  constructor(injector: Injector) {
    const ButtonComponent = createCustomElement(MatButton, { injector });
    customElements.define('mat-nx-button', ButtonComponent);
    const SliderComponent = createCustomElement(MatSlider, { injector });
    customElements.define('mat--nx-slider', SliderComponent);
  }

  ngDoBootstrap() {
    console.log("ANGULAR UI-NG STARTED")
  }
}
