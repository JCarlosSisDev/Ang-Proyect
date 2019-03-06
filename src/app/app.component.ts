import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Proyecto Angular';
  msg:string = '';

  empleados = [
    {'name': 'Juan', position: 'Encargado', email: 'email_1@test.com'},
    {'name': 'Carlos', position: 'Diseñador', email: 'email_2@test.com'},
    {'name': 'Alberto', position: 'Desarrollador', email: 'email_3@test.com'}
  ];

  model:any = {};
  model_up:any = {};
  hideUpdate:boolean = true;

  addEmpleado():void{
    this.empleados.push(this.model);
    this.msg = "El registro se realizó satisfactoriamente.";
  }

  deleteEmpleado(i):void{
    var answer = confirm('Desea eliminar el registro?');
    if(answer){
      this.empleados.splice(i, 1);
      this.msg = "El registro se eliminó satisfactoriamente.";
    }
  }

  myValue;
  editEmpleado(i):void{
    this.hideUpdate = false;
    this.model_up.name = this.empleados[i].name;
    this.model_up.position = this.empleados[i].position;
    this.model_up.email = this.empleados[i].email;
    this.myValue = i;
  }

  updateEmpleado():void{
    //console.log(this.model_up);
    let i = this.myValue;
    for(let j = 0; j < this.empleados.length; j++){
      if(i == j){
        this.empleados[i] = this.model_up;
        this.msg = "Los cambios se realizaron de forma satisfactoria.";
        this.hideUpdate = true;
        this.model_up = {};
      }
    }
  }

  closeAlert():void{
    this.msg = "";
  }
}
