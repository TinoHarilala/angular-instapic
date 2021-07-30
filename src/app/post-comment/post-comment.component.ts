import { Component, OnInit } from '@angular/core';
import { postService } from '../Services/Post-service';
import { ActivatedRoute } from '@angular/router';
import { commentService } from '../Services/comment-service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  pathimg !: string;
  iduser !: number;
  comments !: any[];

  constructor(private postservice : postService, private route : ActivatedRoute, private commentservice : commentService) { 
  
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pathimg = this.postservice.GetPostById(+id)!.imgpath;
    this.iduser = this.postservice.GetPostById(+id)!.id_user;

    this.comments = this.commentservice.comments;
  }

}
