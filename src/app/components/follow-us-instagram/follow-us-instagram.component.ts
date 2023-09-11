import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-us-instagram',
  templateUrl: './follow-us-instagram.component.html',
  styleUrls: ['./follow-us-instagram.component.css']
})
export class FollowUsInstagramComponent implements OnInit {

  instagram=[
    {image:"assets/img/bg-img/sushi-easy-receipy.jpg"},
    {image:"assets/img/bg-img/chinesse-noodles.jpg"},
    {image:"assets/img/bg-img/berry-desert.jpg"},
    {image:"assets/img/bg-img/zucchini-grilled-on-peper.jpg"},
    {image:"assets/img/bg-img/vegan-smoothie.jpg"},
    {image:"assets/img/bg-img/healthy-fruit-desert.jpg"},
    {image:"assets/img/bg-img/homemade-burger.jpg"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
