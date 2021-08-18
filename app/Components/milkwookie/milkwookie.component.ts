import { Component, OnInit } from '@angular/core';
import { ReproService } from 'src/app/servicios/repro.service';

@Component({
  selector: 'app-milkwookie',
  templateUrl: './milkwookie.component.html',
  styleUrls: ['./milkwookie.component.css'],
})
export class MilkwookieComponent implements OnInit {
  audio5;
  audio6;
  audio7;
  audio8;
  audio9;
  constructor(private repro: ReproService) {}

  ngOnInit(): void {}
  reproducir5() {
    this.audio5 = this.repro.reproducir5();
  }
  parar5() {
    this.audio5 = this.repro.parar5();
  }
  reproducir6() {
    this.audio6 = this.repro.reproducir6();
  }
  parar6() {
    this.audio6 = this.repro.parar6();
  }
  reproducir7() {
    this.audio7 = this.repro.reproducir7();
  }
  parar7() {
    this.audio7 = this.repro.parar7();
  }
  reproducir8() {
    this.audio8 = this.repro.reproducir8();
  }
  parar8() {
    this.audio8 = this.repro.parar8();
  }
  reproducir9() {
    this.audio9 = this.repro.reproducir9();
  }
  parar9() {
    this.audio9 = this.repro.parar9();
  }
}
