import { Component } from '@angular/core';
import { NavigationComponent } from '../Share/navigation-component/navigation-component';
import { TituloComponent } from '../inicio/titulo-component/titulo-component';

@Component({
  selector: 'app-inicio-component',
  imports: [NavigationComponent, TituloComponent],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.css',
})
export class InicioComponent {

}
