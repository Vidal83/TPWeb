import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public miForm: FormGroup;
  passwordUser: string;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.miForm = this.fb.group({
      passwordUser: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  guardar() {
    this.passwordUser = this.miForm.get('passwordUser').value;
    if (this.passwordUser == 'angular123') {
      this.toastr.success('Bienvenido administrador', 'Login correcto');
      this.router.navigate(['listar']);
    } else {
      this.toastr.error('Contraseña incorrecta', 'Login incorrecto');
      this.router.navigate(['inicio']);
    }
  }
}
