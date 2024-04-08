import { Component, Injectable } from "@angular/core";

@Injectable() //to inject another service into this service, using this is a must
export class LoggingService{
    //constructor(private logging: anotherService){}

    logStatChange(status: string){
        console.log('a status change happened ' + status);
    }
}

//this service can be used in a component as follows

@Component({
    //...
    providers: [LoggingService] //to tell angular that we need it to be injected
})
class somecomponent{
    constructor(private logging: LoggingService){}
    somefunction(){
        this.logging.logStatChange("active");
    }
}   