import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  translateMap = new Map<string, string>();

  constructor() {
    setTimeout(() => {
      this.translateMap.set('1','jeden');
      this.translateMap.set('2','dwa');
    },500);

  }

  public translate(key: string): string {
    if (this.translateMap.has(key)){
      return this.translateMap.get(key);
    } else {
      return `???${key}???`;
    }
  }
}
