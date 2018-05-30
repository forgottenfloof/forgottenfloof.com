import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-share-links',
  templateUrl: './share-links.component.html',
  styleUrls: ['./share-links.component.scss']
})
export class ShareLinksComponent implements OnInit {

  @Input() private title: string;

  public linkedinHref: string;
  public twitterHref: string;
  public emailHref: string;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.linkedinHref = `http://www.linkedin.com/shareArticle?mini=true
      &url=https://tradeteq.com${this.location.path()}
      &title=${this.title}`;

    this.twitterHref = `//twitter.com/intent/tweet?text=${this.title}&url=https://tradeteq.com${this.location.path()}`;

    this.emailHref = `mailto:?subject=${this.title}&body=https://tradeteq.com${this.location.path()}`;
  }
}
