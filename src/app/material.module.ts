import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule
} from '@angular/material'
import { MatMomentDateModule } from '@angular/material-moment-adapter'

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatCheckboxModule
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
