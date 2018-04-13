import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postTitle: String = 'Titre du Post';
  postCreated_at: Date;
  postContent: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim...';
  postloveIts = -2;


  constructor() { }

  ngOnInit() {
    this.postCreated_at = new Date();
  }

  getPeopleLoveIt() {
    return (this.postloveIts > 0);
  }

}
