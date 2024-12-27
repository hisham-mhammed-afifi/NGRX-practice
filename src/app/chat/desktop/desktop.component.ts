import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersComponent } from '../components/filters/filters.component';
import { UsersComponent } from '../components/users/users.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { CommonModule } from '@angular/common';
import { AttrsComponent } from '../components/attrs/attrs.component';

const components = [
  FiltersComponent,
  UsersComponent,
  MessagesComponent,
  AttrsComponent,
];

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, ...components],
})
export class DesktopComponent implements OnInit {
  isTablet = window.innerWidth >= 425 && window.innerWidth <= 768;
  isDesktop = window.innerWidth > 768;
  tiles: any[] = [
    { text: 'One', cols: 6, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 12, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 6, rows: 1, color: 'lightpink' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
