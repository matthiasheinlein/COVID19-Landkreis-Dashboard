import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestEndpointsService {

  constructor(private httpClient: HttpClient) { }

  ARCGIS_BASE_URL = "https://services7.arcgis.com/"

  RKI_API_LANDKREIS_MELDUNGEN : string = "https://services7.arcgis.com/?where=IdLandkreis%20%3D%20%2701059%27&outFields=Altersgruppe,Geschlecht,AnzahlFall,AnzahlTodesfall,Meldedatum,Datenstand,Refdatum,AnzahlGenesen&orderByFields=Meldedatum&outSR=4326&f=json";


  public getRkiApiDistrictCasesPer100k7Days(): Observable<any> {
    let apiUrl = this.ARCGIS_BASE_URL + "mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query";
    let params = new HttpParams();
    params = params.append("where", "1=1");
    params = params.append("outFields", "OBJECTID,GEN,cases7_per_100k,last_update");
    params = params.append("returnGeometry", "false");
    params = params.append("f", "json");

    return this.httpClient.get<any>(apiUrl, { params: params }).pipe(
      map(response => response.features)
    );
  }

  public getRkiApiCaseHistory(district: number): Observable<any>{
    let apiUrl = this.ARCGIS_BASE_URL + "mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query";
    let params = new HttpParams();
    params = params.append("where", "IdLandkreis='" + district + "'");
    params = params.append("outFields", "Altersgruppe,Geschlecht,AnzahlFall,AnzahlTodesfall,ObjectId,Datenstand,NeuerFall,NeuerTodesfall,Refdatum,NeuGenesen,AnzahlGenesen,IstErkrankungsbeginn,Meldedatum");
    params = params.append("orderByFields", "Meldedatum");
    params = params.append("f", "json");

    return this.httpClient.get<any>(apiUrl, { params: params }).pipe(
      map(response => response.features)
    );
  }
}
