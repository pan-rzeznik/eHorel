import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-meassage',
  templateUrl: './validation-meassage.component.html',
  styleUrls: ['./validation-meassage.component.scss']
})
export class ValidationMeassageComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
