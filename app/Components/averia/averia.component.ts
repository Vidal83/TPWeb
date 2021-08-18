import { Component, OnInit } from '@angular/core';
import { ReproService } from 'src/app/servicios/repro.service';
@Component({
  selector: 'app-averia',
  templateUrl: './averia.component.html',
  styleUrls: ['./averia.component.css'],
})
export class AveriaComponent implements OnInit {
  audio;
  audio2;
  audio3;
  audio4;
  constructor(private repro: ReproService) {}

  ngOnInit(): void {}
  reproducir() {
    this.audio = this.repro.reproducir();
  }
  parar() {
    this.audio = this.repro.parar();
  }
  reproducir2() {
    this.audio2 = this.repro.reproducir2();
  }
  parar2() {
    this.audio2 = this.repro.parar2();
  }
  reproducir3() {
    this.audio3 = this.repro.reproducir3();
  }
  parar3() {
    this.audio3 = this.repro.parar3();
  }
  reproducir4() {
    this.audio4 = this.repro.reproducir4();
  }
  parar4() {
    this.audio4 = this.repro.parar4();
  }
}
