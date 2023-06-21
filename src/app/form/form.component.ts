import { Component, OnInit ,EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  serverName:string;
  serverDescription:string;

  @Output('onServerCreation') onServerCreation =  new EventEmitter<{serverName:string, serverDescription:string}>();
  @Output('onBluePrintCreation') onBluePrintCreation =  new EventEmitter<{serverName:string, serverDescription:string}>();
  constructor() { }

  ngOnInit() {
  }
  onServerCreating(serverName:HTMLInputElement,serverDescription:HTMLInputElement){

     const data =  {'serverName':serverName.value, 'serverDescription':serverDescription.value};
    this.onServerCreation.emit(data)
  }

  onBluePrintCreating(serverName:HTMLInputElement,serverDescription:HTMLInputElement){

    const data =  {'serverName':serverName.value, 'serverDescription':serverDescription.value};
    this.onBluePrintCreation.emit(data)
  }

}
