import { Component, OnInit } from '@angular/core';
import { RestEndpointsService } from '../service/rest-endpoints.service'

@Component({
  selector: 'app-inzidenz-average-all',
  templateUrl: './inzidenz-average-all.component.html',
  styleUrls: ['./inzidenz-average-all.component.css']
})
export class InzidenzAverageAllComponent implements OnInit {

  average: number = 0;
  districts: number = 0;
  date: string;

  constructor(private restEndpointsService: RestEndpointsService) { }

  ngOnInit(): void {
    this.restEndpointsService.getRkiApiDistrictCasesPer100k7Days().subscribe((data: any) => {
      data.forEach((element: any) => {
          if(this.date == null){
            this.date = element.attributes.last_update;
          } else if(this.date != element.attributes.last_update){
            this.date = "Unterschiedliche Zeitstempel"
          }
          this.average += element.attributes.cases7_per_100k;
          this.districts++;
        }
      );
      this.average = this.average/this.districts;
    })
  }

}
