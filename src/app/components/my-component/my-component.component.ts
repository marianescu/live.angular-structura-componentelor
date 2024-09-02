import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"my-component",
    standalone: true,
    templateUrl: "./my-component.component.html",
    styleUrl: "./my-component.component.css"
})
export class MyComponent{
    private counter=0
    @Input() text="Apasa!"
    @Output() textChange=new EventEmitter<string>()

    clicked(){
        this.counter++
        if(this.counter>=3){
            this.text="Nu mai apasa!"
            this.textChange.emit(this.text)
        }
    }
}