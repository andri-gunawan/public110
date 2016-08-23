import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';
import {ContactPage} from './pages/contact/contact';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage: any;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;
    this.pages = [
      { title: 'Beranda', component: HomePage },
      { title: 'Laporan Polisi', component: AboutPage },
      { title: 'Kasus', component: ContactPage },
      { title: 'Ganti Petugas', component: ContactPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
