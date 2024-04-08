import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: "[app-dropdown]" //used as <div app-dropdown>
})
export class DropdownDirective { 
    
    // constructor(private elRef:ElementRef , private renderer: Renderer2){} //elref gives the refernce to the html element on which this directive is used, rederer should be used to access the DOM elements as angular maintains the dom generally
    //directives can also have inputs like say we want the user to tell the background color"
    //@Input() clickColor: String = "blue"; //the color can be passes in html like
    // <div app-dropdown [clickColor] = "'yellow'" //yellow will overwrite blue 

    @HostBinding('class.open') isOpen: Boolean = false; //biding to the "open" class

    // @HostBinding('style.backgroundColor') bgcolor = "transparent"  

    @HostListener('click') toggleDropdown(){ //listen to the click even
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgorund-color', 'red'); //change color on click event using renderer
        //this.bgcolor = "red" //without renderer 
        this.isOpen = !this.isOpen;
    }
}