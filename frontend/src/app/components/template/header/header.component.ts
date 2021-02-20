import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  titulo = "Teste GD9/SEBRAE - Lucca Feijó";

  ngOnInit(): void {
  }

}
