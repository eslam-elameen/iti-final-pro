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

  constructor(private single: ActivatedRoute, private blogService: BlogServiceService) { }
  cards;
  postItem;
  ngOnInit() {
    this.single.paramMap.subscribe(param => {
      this.getSinglePost(param.get('id'));
      console.log(param)
    })  
  }
  getSinglePost(postId) {
    this.blogService.getSingleData(postId).subscribe(postObj => {
      this.postItem = postObj;
      console.log(this.postItem);

      
    })

    
  }

}