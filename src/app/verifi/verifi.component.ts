import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NameCheckService } from '../name-check.service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verifi',
  templateUrl: './verifi.component.html',
  styleUrls: ['./verifi.component.css']
})
export class VerifiComponent {
  name: string = '';

  constructor(private nameCheckService: NameCheckService, private router: Router) {}

  checkName() {
    console.log('Nombre ingresado:', this.name);
    if (this.nameCheckService.isNameAllowed(this.name)) {
      console.log('Nombre permitido');
      this.router.navigate(['/inicio']);
    } else {
      console.log('Nombre no permitido');
      alert('Nombre no permitido');
    }
  }
  

 }
