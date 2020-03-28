import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from '../core/header/header.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
