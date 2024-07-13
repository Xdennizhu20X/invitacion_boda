import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastRouteService {
  private lastRouteKey = 'lastRoute';
  
  getLastRoute(): string {
    return localStorage.getItem(this.lastRouteKey) || '/'; // Redirige a '/verifi' por defecto si no hay una última ruta guardada
  }

  setLastRoute(route: string): void {
    localStorage.setItem(this.lastRouteKey, route);
  }
}
