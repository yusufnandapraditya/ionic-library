import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormEditPage } from '../form-edit/form-edit.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public books = [];
  public id = {};

  constructor(private bs: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe(result => {
      this.books = result['data'];
      console.log(this.books);
    });
  }

  toggleSection(index) {
    this.books[index].open = !this.books[index].open;
  }

  delete(b: any): void {
    console.log(b);
    this.id = b.id;
    console.log(this.id);

    this.bs.delBook(this.id).subscribe(result => {
      alert("Success hapus data");
      console.log(result);
    }, error => {
      alert("Error while deleting data");
      console.log(error);
    });
  }
  FormEditPage(b: any) {
    // let books = {
    //   in_title: b['judul_buku'],
    //   in_author: b['pengarang_buku'],
    //   in_pubs: b['penerbit_buku'],
    //   in_sin: b['sinopsis_buku'],
    //   in_cats: b['id_kategori']
    // }
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(b)
      }
    }
    this.router.navigate(['/form-edit'], extras);
  }
}






