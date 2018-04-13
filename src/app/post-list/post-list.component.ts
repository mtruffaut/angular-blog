import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: String;
  @Input() postCreated_at: Date;
  @Input() postContent: string;
  @Input() postloveIts: number;

  constructor() { }

  ngOnInit() {
    //this.postCreated_at = new Date();
  }

  getPeopleLoveIt() {
    return (this.postloveIts >= 0);
  }

  onLoveIt() {
    this.postloveIts++;
    console.log(this.postloveIts);
  }

  onHateIt() {
    this.postloveIts--;
    console.log(this.postloveIts);
  }


}
