import { Component } from '@angular/core';
import { FeroService } from 'src/app/fero.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent 
{
  constructor(private fero:FeroService){}
  data=this.fero.giveData();
single :any
ngOnInit()
{
let id=Number(localStorage.getItem('id'))
this.single=this.data.filter(e => e.id== id)
console.log("name",this.single)
}
}
