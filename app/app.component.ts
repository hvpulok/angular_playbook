import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'


@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>Hello Angular</h1> 
            <courses></courses> 
            <authors></authors>
        
            <h1 (click)="onClick($event)">
                <span class="glyphicon" [class.glyphicon-star] ="isFull" [class.glyphicon-star-empty] ="!isFull" aria-hidden="true" ></span>
            </h1>
        </div>
        

    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    isFull = true;
    onClick($event){
        console.log("h1 clicked");
        this.isFull = !this.isFull;
    }
 }