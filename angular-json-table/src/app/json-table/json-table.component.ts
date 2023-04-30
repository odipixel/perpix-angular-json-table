import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent {

  data: any[] = [];
  page: any = 1;
  prop: string = 'id';
  reverse: boolean = false;
  order: "asc" | "desc" = "asc";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.data = res as any[];
    });
  }

  sort(prop: string) {
    this.reverse = !this.reverse;
    this.prop=prop;
    this.order=this.order=='asc'?'desc':'asc';
  }

}
