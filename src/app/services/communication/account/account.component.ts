import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: string = 'Olek';

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
  }

  public onUserEvent(event: string) {
    this.account = event;
  }

  public getAccount() {
    return this.accountService.account;
  }

}
