import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core'
import { AuthService } from 'src/app/auth/auth.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>()
  isAuth = false
  authSubscription: Subscription

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => (this.isAuth = authStatus)
    )
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }

  onLogout() {
    this.authService.logout()
    this.closeSidenav.emit()
  }
}
