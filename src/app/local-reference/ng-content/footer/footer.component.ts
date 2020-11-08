import {AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterContentInit {

  @ContentChild('footer', {static: false}) footerContent: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('From OnInit');
    console.log(this.footerContent);
  }

  ngAfterContentInit(): void {
    console.log('From AfterContentInit');
    console.log(this.footerContent);
  }



}
