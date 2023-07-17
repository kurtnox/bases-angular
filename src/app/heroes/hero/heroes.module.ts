import { NgModule } from "@angular/core";
import { HeroComponent } from "./heroes/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeroComponent],

    imports: [CommonModule],

    exports: [HeroComponent]
})

export class HeroModule { }
