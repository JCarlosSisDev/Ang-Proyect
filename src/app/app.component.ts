import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Proyecto Angular';

  empleados = [
    {'name': 'Juan', position: 'Encargado'},
    {'name': 'Carlos', position: 'Diseñador'},
    {'name': 'Alberto', position: 'Desarrollador'}
  ];

  model:any = {};

  addEmpleado():void{
    this.empleados.push(this.model);
  }

  deleteEmpleado():void{

  }

  editEmpleado():void{

  }

  updateEmpleado():void{

  }
}
