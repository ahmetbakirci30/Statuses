import { Guid } from 'guid-typescript';
import { VideoService } from './../../../services/video.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute
  ) {}

  categoryId: Guid = Guid.createEmpty();
  loading: boolean = true;
  pageNumber: number = 1;
  videoItem: any = null;
  videos: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const parameter = params['categoryId'];
      if (parameter && Guid.isGuid(parameter)) this.categoryId = parameter;
      this.pageNumber = 1;
      this.videos = [];
      this.getVideos();
    });
  }

  onScroll() {
    this.getVideos();
  }

  getVideos() {
    this.loading = true;
    this.videoService.get(this.categoryId, this.pageNumber).subscribe(
      (result) => {
        if (result && result.length && result.length > 0) {
          this.videos.push(...result);
          this.pageNumber++;
        }
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
