import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public patientInfo:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.patientInfo = data;
    })

  }

}
