import { Component } from '@angular/core';
import { MsgService } from './services/msg.service';
import { NgForm } from '@angular/forms';
import { Msg } from './models/msg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:Msg;
  msgs: Msg[] = [];
  text: string;
  constructor(
    public _msgService: MsgService
  ) { 
  }

  sendMessage(form: NgForm) {
    if( form.invalid ) {
      return;
    }
    let msg = new Msg('usuario', form.value.text, new Date());
    this.msgs.push(msg);
    this._msgService.sendMessage(msg)
      .subscribe((resp: any) => {
        this.msgs.push({user: 'unamad', text: resp.msg, time: new Date()});
        console.log(this.msgs);
      })


  }
}
