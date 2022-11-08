import {Component, Input, OnInit} from "@angular/core";
import {VersionService} from "../../../../services/version.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'This is a header';

  array = [1, 2, 3, 4, 5];

  capitalText = 'CAPITAL TEXT';

  isoDate = '2011-10-05T14:48:00.000Z';

  amount = '99';

  num = 56.78;

  birthday: Date = new Date(1988, 3, 15); // April 15, 1988

  // Our goal is to have: My birthday is on ...

  version: string | undefined;

  constructor(
    private versionService: VersionService
  ) {}

  ngOnInit(): void {
    this.version = this.versionService.getVersion();
  }
}
