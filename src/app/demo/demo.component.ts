import { Component, OnInit } from '@angular/core';
import { RestEndpointsService } from '../service/rest-endpoints.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  data : any;

  constructor(private restEndpointsService: RestEndpointsService) { }

  ngOnInit(): void {
    this.restEndpointsService.getRkiApiLandkreis().subscribe((data) =>{
      console.log(data);
      this.data = data;
    })
  }

}
