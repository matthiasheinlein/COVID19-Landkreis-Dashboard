import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestEndpointsService {

  constructor(private httpClient: HttpClient) { }

  RKI_API_LANDKREIS_CASES_PER_100K_7DAYS : string = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,GEN,cases7_per_100k,last_update&returnGeometry=false&outSR=4326&f=json";
  RKI_API_LANDKREIS_MELDUNGEN : string = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=IdLandkreis%20%3D%20%2701059%27&outFields=Altersgruppe,Geschlecht,AnzahlFall,AnzahlTodesfall,Meldedatum,Datenstand,Refdatum,AnzahlGenesen&orderByFields=Meldedatum&outSR=4326&f=json";


  public getRkiApiLandkreis(){
    return this.httpClient.get(this.RKI_API_LANDKREIS_CASES_PER_100K_7DAYS);
  }
}
