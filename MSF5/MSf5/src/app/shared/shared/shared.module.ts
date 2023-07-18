import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { DataFormComponent } from 'src/app/components/data-form/data-form.component';
import { FooterComponent } from '../components/footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DataFormComponent
  ],
  exports: [
    HeaderComponent,
    DataFormComponent,
    FooterComponent
  ]
})
export class SharedModule { }
