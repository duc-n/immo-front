import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../../models/page';
import { BienResume } from '../../models/bien-resume';
import { DataLayerService } from '../../services/data-layer.service';

@Component({
  selector: 'app-bien-datatable',
  templateUrl: './bien-datatable.component.html',
  styleUrls: ['./bien-datatable.component.scss']
})
export class BienDatatableComponent implements OnInit {
  page = new Page();
  rows = new Array<BienResume>();

  @Input() critere;

  @Input() typeBien;

  constructor(private dataLayerService: DataLayerService) {
    this.page.pageNumber = 0;
  }

  ngOnInit() {
  }

  /**
 * Populate the table with new data based on the page number
 * @param page The page to select
 */
  setPage(pageInfo) {
    console.log(pageInfo);
    this.page.pageNumber = pageInfo.offset;
    if (this.typeBien && this.typeBien === 'creation') {
      this.dataLayerService.getBiensEtatCreation().subscribe(pagedData => {
        this.processData(pagedData);
      });
    } else if (this.critere) {
      this.dataLayerService.rechercherBien(this.critere).subscribe(pagedData => {
        this.processData(pagedData);
      });
    }

  }
  private processData(pagedData) {
    this.page.size = pagedData.size;
    this.page.totalElements = pagedData.totalElements;
    this.page.totalPages = pagedData.totalPages;
    this.page.pageNumber = pagedData.number;

    // calc start
    const start = this.page.pageNumber * this.page.size;

    // copy rows
    const rows = [...this.rows];

    // insert rows into new position
    rows.splice(start, 0, ...pagedData.content);

    // set rows to our new rows
    this.rows = rows;
  }

  detail(id) {
    console.log(id);
  }

}
