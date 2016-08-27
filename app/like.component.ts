import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template:`
        <h1>
            <span 
                (click) ="onClick($event)" 
                class="glyphicon glyphicon-heart" aria-hidden="true">
            </span>
            {{likeNumber}}
        </h1>
    `,
    styles:[`
        .glyphicon-heart{
            color: lightgrey;
        }
        
        `]
})

export class LikeComponent{
    isLiked = false;
    @Input() likeNumber = 0;

    onClick($event){
        this.isLiked = !this.isLiked
        console.log("isLiked: "+ this.isLiked)
        if(this.isLiked){
            $event.target.style.color = 'red';
            this.likeNumber = this.likeNumber + 1;
        } else{
            $event.target.style.color = 'lightgrey';
            this.likeNumber = this.likeNumber - 1;
        }
        
    }
}