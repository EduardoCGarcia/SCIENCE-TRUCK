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

  mostrar_menu(){
    const nav = document.getElementById("nav")!;
    const background_menu = document.getElementById("back_menu")!;
    const icon = document.getElementById("btn_menu")!;
    nav.style.right = "0px";
    background_menu.style.display = "block";
    icon.style.display = "none";
  }

  ocultar_menu(){
    const nav = document.getElementById("nav")!;
    const background_menu = document.getElementById("back_menu")!;
    const icon = document.getElementById("btn_menu")!;
    icon.style.display = "flex";
    nav.style.right = "-250px";
    background_menu.style.display = "none";
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

