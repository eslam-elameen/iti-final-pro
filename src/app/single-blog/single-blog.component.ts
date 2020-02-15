import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogServiceService } from '../blog-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) { }
  cards;
  postItem;
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.getSinglePost(param.get('id'));
    })  
  }
  getSinglePost(postId) {
    this.blogService.getSingleData(postId).subscribe(postObj => {
      this.postItem = postObj;
    })

    
  }

}