import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private tts:  TextToSpeech) { this.tts.speak('Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
    
  }
 
}
