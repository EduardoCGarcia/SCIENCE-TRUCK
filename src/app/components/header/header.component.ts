import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    headerTransparent();
  }

}

function headerTransparent() {
  const header = document.querySelector("header")!;
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scrollY>0) {
      header.style.backgroundColor="rgb(69,69,69,0.5)";
      header.style.boxShadow= "5px 0 10px white";
    }else{
      header.style.backgroundColor="transparent";
      header.style.boxShadow= "none";
    }
})
}