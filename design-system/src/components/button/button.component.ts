import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Button';
  @Input() icon = 'info_icon';
  @Input() color = 'primary';
  @Input() variant = 'primary';
  @Input() showLeftIcon: Boolean = false;
  @Input() showRightIcon: Boolean = false;


  /* @Output()
  onClick = new EventEmitter<Event>(); */

  constructor() { }

  ngOnInit(): void {
  }
}
