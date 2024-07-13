import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LastRouteService } from '../last-route.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(
    private router: Router,
    private lastRouteService: LastRouteService
  ) {}

  ngOnInit(): void {
    const lastRoute = this.lastRouteService.getLastRoute();
    if (lastRoute === '/inicio') {
      this.router.navigate(['/verifi']);
    }
    this.lastRouteService.setLastRoute('/inicio');
  }
}
