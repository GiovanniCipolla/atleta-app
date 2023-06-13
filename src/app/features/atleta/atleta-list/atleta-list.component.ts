import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AtletaService } from '../../atleta.service';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent implements OnInit {
  constructor(private atletaService: AtletaService) { }

  subscription?: Subscription;

  listaAtleta: Atleta[] = [];


  ngOnInit(): void {
    this.subscription = this.atletaService.listAll()
      .subscribe(listaAtleta => { this.listaAtleta = listaAtleta })
  }

}
