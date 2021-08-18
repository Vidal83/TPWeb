import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Banda } from 'src/app/modelos/banda';
import { BandaService } from 'src/app/servicios/banda.service';
@Component({
  selector: 'app-crear-banda',
  templateUrl: './crear-banda.component.html',
  styleUrls: ['./crear-banda.component.css'],
})
export class CrearBandaComponent implements OnInit {
  bandaForm: FormGroup;
  mensaje: string = 'Campo obligatorio';
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _bandaService: BandaService
  ) {
    this.bandaForm = this.fb.group({
      nombre: ['', Validators.required],
      estilo: ['', Validators.required],
      miembros: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  agregarBanda() {
    const BANDA: Banda = {
      nombre: this.bandaForm.get('nombre')?.value,
      estilo: this.bandaForm.get('estilo')?.value,
      miembros: this.bandaForm.get('miembros')?.value,
    };
    console.log(BANDA);
    this._bandaService.guardarBanda(BANDA).subscribe(
      (data) => {
        this.toastr.success('Banda registrada con éxito', 'Banda registrada');
      },
      (error) => {
        console.log(error);
        this.bandaForm.reset();
      }
    );
  }
  public verError(controlName: string): string {
    let error = '';
    const control = this.bandaForm.get(controlName);
    if ((control.touched || control.dirty) && control.errors != null) {
      error = this.mensaje;
    }
    return error;
  }
}
