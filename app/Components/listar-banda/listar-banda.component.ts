import { Component, OnInit } from '@angular/core';
import { BandaService } from 'src/app/servicios/banda.service';
import { Banda } from 'src/app/modelos/banda';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-listar-banda',
  templateUrl: './listar-banda.component.html',
  styleUrls: ['./listar-banda.component.css'],
})
export class ListarBandaComponent implements OnInit {
  bandaForm: FormGroup;
  listBandas: Banda[] = [];
  mensaje: string = 'Campo obligatorio';
  constructor(
    private fb: FormBuilder,
    private _bandaService: BandaService,
    private toastr: ToastrService
  ) {
    this.bandaForm = this.fb.group({
      nombre: ['', Validators.required],
      estilo: ['', Validators.required],
      miembros: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerBandas();
  }
  obtenerBandas() {
    this._bandaService.getBandas().subscribe(
      (data) => {
        console.log(data);
        this.listBandas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarBanda(id: any) {
    this._bandaService.eliminarBanda(id).subscribe((data) => {
      this.toastr.error('Banda eliminada con éxito', 'Banda eliminada');
      this.obtenerBandas();
    });
  }
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
