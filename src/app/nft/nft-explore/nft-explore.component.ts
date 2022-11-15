import { Component, OnInit } from '@angular/core';
import {MainBarTitleService} from "../../core/main-bar-title.service";

@Component({
  selector: 'app-nft-explore',
  templateUrl: './nft-explore.component.html',
  styleUrls: ['./nft-explore.component.scss']
})
export class NftExploreComponent implements OnInit {

  constructor(
    private readonly mainBarTitleService: MainBarTitleService
  ) {
    const setMainBarTitle = () => {
      this.mainBarTitleService.title$.next("Search NFTs");
    }

    setMainBarTitle();
  }

  ngOnInit(): void {
  }

}
