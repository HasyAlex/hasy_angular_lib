import { Component } from '@angular/core';
import { HasyLoggerService } from 'hasy-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hasy_lib';

  constructor(private logger: HasyLoggerService){
    logger.errorLogger('Error provide sutable inputs')
  }
}
