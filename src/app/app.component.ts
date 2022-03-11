
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VideoDownloaderService } from './video-downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  title = 'video-downloader';
  videoData: any;
  constructor(
    private vdoService: VideoDownloaderService,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      linkVideo: ['']
    })
  }
  search() {
    const link = this.form.get('linkVideo')?.value
    this.vdoService.getVdo(link).subscribe(data => {
     this.videoData = data;
     console.log(this.videoData);

    })
  }
}
