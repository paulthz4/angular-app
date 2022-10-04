import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  
  // doing this informs angular that we need an instance of the logging service and you need to provide the serviec in the @Component decorator
  constructor(private loggingService: LoggingService, private accountsService: AccountService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('new status: ' + status)
    );
  }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
