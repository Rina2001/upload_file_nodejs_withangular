import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private base64textString:String="";
    constructor(private http: HttpClient) {}

  upload(){


      var body=JSON.stringify({"body":this.base64textString});
      var options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      this.http.post('http://localhost:3000/api/upload',body,options).subscribe();
       console.log(body);
  }



  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this.base64load.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  base64load(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
    }
}
