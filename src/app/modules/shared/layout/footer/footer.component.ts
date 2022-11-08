import { Component } from '@angular/core';
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  version: string | undefined;

  constructor(
    private versionService: VersionService
  ) {}

  ngOnInit(): void {
    this.version = this.versionService.getVersion();
  }
}
