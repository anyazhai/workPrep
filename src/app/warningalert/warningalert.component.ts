import { Component } from "@angular/core";
import { FilterPipe } from "../shared/filter.pipe";

@Component({
    selector: 'app-warningalert',
    templateUrl: './warningalert.component.html',
    styles: [``],
})
export class WarningAlert{
    username= ""
    displayPara = false
    clicknum = 0
    clickLogarray = []

    filterarray = ['array', 'low', 'avatar',' apple', 'avacado']

    onButtonClick(){
        this.username = ""
        console.log("click")
        console.log(this.username)

    }

    onDisplayButton(){
        this.displayPara = this.displayPara? false: true
        this.clickLogarray[++this.clicknum] = "Click Number " + this.clicknum
        console.log(this.clickLogarray)
    }

    onIntervalFired(e:any){
        console.log(e)
    }
}