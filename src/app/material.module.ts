import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatListModule } from '@angular/material/list'

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
