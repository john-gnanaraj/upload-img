import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';


//import ( platformBrowserDynamic ) from '@angular/platformBrowserDynamic';
//import { HttpClientModule } from '@angular/common/http';
//import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map'

//@Injectable()

platformBrowserDynamic().bootstrapModule(AppModule)

@NgModule({
  imports: [
    CommonModule, BrowserModule//, HttpClientModule
  ],
  declarations: [UploadComponent],
  bootstrap: [UploadComponent]
})

export class UploadModule {

  /*constructor(private http: Http){}

  postImg(){
    let data;
    data = this.http.get('http://10.98.20.105/trackR/index.php/custmimg').map((res:Response) => res.json());
    return data;
  }*/
}
