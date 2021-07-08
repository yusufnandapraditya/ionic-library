import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public years = [];
  public cats = {};

  constructor(private bs: BookService) { }

  ngOnInit(): void {


  }

  public in_title;
  public in_author;
  public in_pubs;
  public in_sin;
  public in_year;
  public in_cats;

  save() {
    let postData = {
      "judul_buku": this.in_title,
      "pengarang_buku": this.in_author,
      "penerbit_buku": this.in_pubs,
      "sampul_buku": "-",
      "sinopsis_buku": this.in_sin,
      "tahun_buku": this.in_year,
      "id_kategori": this.in_cats
    }

    this.bs.postBook(postData).subscribe(result => {
      alert("Success add data");
      console.log(result);
      this.clear();
    }, error => {
      alert("Error while saving data");
      console.log(error);
    });
  }

  clear() {
    this.in_title = "";
    this.in_author = "";
    this.in_pubs = "";
    this.in_sin = "";
  }

}
