import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Button';
  @Input() color = 'primary';
  @Input() mode = 'primary';


  /* @Output()
  onClick = new EventEmitter<Event>(); */

  constructor() { }

  ngOnInit(): void {
  }
}
