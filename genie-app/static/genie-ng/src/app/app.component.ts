import { Component } from '@angular/core';

import { invoke } from '@forge/bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    console.log("In init, invoking...");
    invoke('getText', { example: 'my-invoke-variable' }).then(result => {
      console.log("Received invoke result", result);
    });
  }
}
