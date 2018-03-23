import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  message: string;

  @ViewChild('fileInput') el:ElementRef;

  //constructor(private http:HttpClient) { }

  onFileSelected(){
    //console.log(this.el);
    //this.message = "File uploaded is :"+this.el.nativeElement.files[0].name;
  }

  onUpload(){
    this.message = "File uploaded is :"+this.el.nativeElement.files[0].BaseURL;

    console.log(this.el);
  }

  ngOnInit():any {
      
  }

/*
reader:any;
file:any;

data:any;

 onChange(){
   //this.data = 
 }
  
  onFileSelected(element){
    this.file = element.files;
    this.reader = new FileReader();    
    this.reader.readAsDataURL(this.file);
    console.log(element);
    //this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    document.getElementById("dataOutput").innerHTML = this.reader.result;
  }


  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd)
    .subscribe(res =>{
      console.log(res);
    })
  }*/

}
