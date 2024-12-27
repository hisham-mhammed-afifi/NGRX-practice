import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltersComponent } from '../components/filters/filters.component';
import { UsersComponent } from '../components/users/users.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { AttrsComponent } from '../components/attrs/attrs.component';

const components = [
  FiltersComponent,
  UsersComponent,
  MessagesComponent,
  AttrsComponent,
];

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  standalone: true,
  imports: [SharedModule, ...components],
})
export class MobileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
