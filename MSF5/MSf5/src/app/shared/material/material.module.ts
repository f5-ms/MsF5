import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
  ]
})
export class MaterialModule { }
