import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { BookService } from '../services/book.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.page.html',
  styleUrls: ['./form-edit.page.scss'],
})
export class FormEditPage implements OnInit {

  public FormSimpanData: FormGroup;
  public years = [];
  public cats = {};
  playlist: [];

  constructor(
    private bs: BookService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.playlist = JSON.parse(params.special);
      }
    })
  }
  ngOnInit(): void {

  }
  // async save(playlist: any) {
  //    let postData = {
  //     "id": playlist['id'],
  //     "nama_playlist": this.in_playlist
  //     //"id_user":  user['id]
  //   }
  //   console.log(postData);
  //   this.simpan.updatePlaylist(postData).subscribe(result => {
  //     this.toastSuccess();
  //     console.log(result);
  //     this.clear();
  //   }, error => {
  //     this.toastError();
  //     console.log(error);
  //   });
  // }
  // clear() {
  //   this.in_playlist = "";
  // }



  // ngOnInit(): void {
  //   for (let i = 2000; i <= 2021; i++) {
  //     this.years.push(i);
  //   }

  //   this.bs.getCategories().subscribe(result => {
  //     this.cats = result;
  //   });

  // }

  // public in_title;
  // public in_author;
  // public in_pubs;
  // public in_sin;
  // public in_year;
  // public in_cats;

  // simpan() {
  //   let putData = {
  //     "judul_buku": this.in_title,
  //     "pengarang_buku": this.in_author,
  //     "penerbit_buku": this.in_pubs,
  //     "sampul_buku": "-",
  //     "sinopsis_buku": this.in_sin,
  //     "tahun_buku": this.in_year,
  //     "id_kategori": this.in_cats
  //   }

  //   this.bs.putBooks(putData).subscribe(result => {
  //     alert("Success edit data");
  //     console.log(result);

  //   });
  // }


}


