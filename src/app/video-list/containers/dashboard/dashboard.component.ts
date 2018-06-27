import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  public videoList: any;
  @Input()
  urlSafe: SafeResourceUrl;
  getData: any = [];

  constructor(
    private dashboardService: DashboardService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo(): void {
    this.dashboardService.getVideoList().subscribe(
      data => { 
        let items: any = data;
        this.videoList = items.items;

        this.genVideo();
      },
      err => console.error(err)
    );
  }
  
  genVideo(): void {
    this.videoList.forEach(eachObj => {
      let url: string

      if(eachObj.id.videoId != undefined) {
        url = "https://www.youtube.com/embed/" + eachObj.id.videoId;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      } else {
        this.urlSafe = null
      }
      

      let param = {
        title: eachObj.snippet.title,
        desc: eachObj.snippet.description,
        video: this.urlSafe
      };
      this.getData.push(param);
    });
    console.log(this.getData)
  }

}
