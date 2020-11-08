import {Component, OnInit} from '@angular/core';
import {LoggingService} from './logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public text: string;

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit() {
  }

  public log() {
    this.loggingService.log(this.text);
  }

}
