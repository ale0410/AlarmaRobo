import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(router: Router) {
    setTimeout(() => {
      router.navigate(['home']);
    }, 1000);
  }

  ngOnInit() {}

}
