import { Component, OnInit } from '@angular/core';
import { ReproService } from 'src/app/servicios/repro.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  audio5;
  constructor(private repro: ReproService) {}

  ngOnInit(): void {}
}
