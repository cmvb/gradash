import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  URLactual: any;
  mostrarChat: any;

  constructor() {
  	this.URLactual = window.location.href;
  	if(this.URLactual.includes("home")){
		this.mostrarChat = "displayNone";
	}
	else{
		this.mostrarChat = "";
	}
  }

  ngOnInit() {
    $('#preloader').fadeOut()
  }
}
