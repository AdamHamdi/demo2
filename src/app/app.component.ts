import {Component, OnInit} from "@angular/core";
import { JsonDataService } from "./main.service";
 
import { STATICUSERS_2 } from "src/fakeData_2";
import { STATICUSERS } from "src/fakeData";
import { Inventaire } from "./inventaire";
 
 

 

@Component({
  selector: "pv-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
 
  searchTerm: string = '';
  
  fakeData:any=STATICUSERS_2 
  inventoryData: Inventaire[] = [];
  searchTerm2: string = '';
  fakeData2:any=STATICUSERS 
  inventoryData2: Inventaire[] = [];
  
  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    
    if (this.fakeData && this.fakeData[0].results && this.fakeData[0].results.length > 0) {
      
      this.inventoryData = this.fakeData[0]?.results[0]?.items;
      this.fakeData= this.fakeData[0]?.results[0]?.items;
    } else {
      console.error('Invalid JSON data structure');
    }
    
    if (this.fakeData2 && this.fakeData2[0].results && this.fakeData2[0].results.length > 0) {
      
      this.inventoryData2 = this.fakeData2[0]?.results[0]?.items;
      this.fakeData2= this.fakeData2[0]?.results[0]?.items;
    } else {
      console.error('Invalid JSON data structure');
    }
  }
 
  filterElement(){
    this.fakeData = this.inventoryData.filter(item =>
      Object.values(item).some(value => value && value.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
    console.log('tableau',this.fakeData);
  }
  filterElement2(){
    this.fakeData2 = this.inventoryData2.filter(item =>
      Object.values(item).some(value => value && value.toString().toLowerCase().includes(this.searchTerm2.toLowerCase()))
    );
    console.log('tableau',this.fakeData2);
  }
   //Filter List
   filterElementChange(event:any){
    console.log('event',event.target.value);
    this.fakeData=this.inventoryData.filter((el:Inventaire)=>{
      return el.ref_inventaire.toLowerCase().includes(event.target.value.toLowerCase()) //title (en miniscule) est ce qu'il contient ce qui est ecrit dans l'input (en miniscule)
    })
    console.log('tableau',this.fakeData);
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  toggleAllRows(checked: boolean) {
    this.fakeData.forEach((row: { selected: boolean; }) => (row.selected = checked));
    console.log("selected", this.fakeData);
    
  }
 
}
