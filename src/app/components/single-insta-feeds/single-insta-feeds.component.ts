import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-insta-feeds',
  templateUrl: './single-insta-feeds.component.html',
  styleUrls: ['./single-insta-feeds.component.css']
})
export class SingleInstaFeedsComponent implements OnInit {
  @Input() instaFeeds :any ;

  constructor() { }

  ngOnInit() {
  }

}
