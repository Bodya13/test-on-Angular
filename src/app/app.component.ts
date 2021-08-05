import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'Press the button below to see a random string'
  statusBtn = 'block'

  randomString() {
    let randomString = '';
    const symbols = '1234567890qwertyuiopasdfghjklzxcvbnm';
    const symbolCounting = 5;

    for( let i = 0; i < symbolCounting; i++ ) {
      const index = Math.floor (Math.random() * symbols.length);
      randomString += symbols[index];
    }

    if ( randomString.includes('0')) {
      this.randomString()
    } else this.text = randomString;
  }

  randomStringLaunch () {
    timer(0, 3000).pipe().subscribe(() => {
      this.randomString()
    })

    this.statusBtn = 'none'
  }

  isPalindrome () {
    const reverseText = this.text.split('').reverse().join('')
    return this.text === reverseText 
  }

  isOnlyNumbers() {
    let isNumber = true

    for ( let i = 0; i < this.text.length; i++ ) {
      if (!Number(this.text[i])) {
        isNumber = false
        break
      }
    }
    
    return isNumber
  }
}
