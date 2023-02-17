import { Component } from '@angular/core';
import { FeroService } from 'src/app/fero.service';

import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-artform-page',
  templateUrl: './artform-page.component.html',
  styleUrls: ['./artform-page.component.css']
})
export class ArtformPageComponent {
  
  ngOninit():void
  {
  }

  constructor(private router: Router,private fero:FeroService) { }
  artform=this.fero.giveData();
gotoHere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/single']);
}
}
