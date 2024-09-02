import { AfterViewInit, Component, Input, OnInit } from "@angular/core";

@Component({
    selector:"my-popup",
    standalone: true,
    templateUrl: "./my-popup.component.html",
    styleUrl: "./my-popup.component.css"
})
export class MyPopup implements OnInit, AfterViewInit{
    constructor(){
        console.log("here")
    }

    ngOnInit(): void {
        console.log("init")
    }

    ngAfterViewInit(): void {
        
    }

}