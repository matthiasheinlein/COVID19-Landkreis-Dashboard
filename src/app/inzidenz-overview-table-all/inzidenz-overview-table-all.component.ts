import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RestEndpointsService } from '../service/rest-endpoints.service'
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-inzidenz-overview-table-all',
  templateUrl: './inzidenz-overview-table-all.component.html',
  styleUrls: ['./inzidenz-overview-table-all.component.css']
})

export class InzidenzOverviewTableAllComponent implements OnInit  {

  data : any[] = new Array();
  dataSource : any = new MatTableDataSource();
  displayedColumns: string[] = ['OBJECTID', 'GEN', 'cases7_per_100k'];

  constructor(private restEndpointsService: RestEndpointsService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.restEndpointsService.getRkiApiLandkreis().subscribe((data : any) =>{
      //console.log(data);
      data.features.forEach((element) => {
        this.data.push(element.attributes);
      });
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
