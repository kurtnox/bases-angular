import {NgModule} from '@angular/core';
import { ListComponent} from './lists/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  exports: [ListComponent]
})

export class ListModule {
}
