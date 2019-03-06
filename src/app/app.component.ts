import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Proyecto Angular';

  empleados = [
    {'name': 'Juan', position: 'Encargado', email: 'email_1@test.com'},
    {'name': 'Carlos', position: 'Diseñador', email: 'email_2@test.com'},
    {'name': 'Alberto', position: 'Desarrollador', email: 'email_3@test.com'}
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
