import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { ApiService } from '../services/api.service';
import { links } from './links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: { role: string };
  userLink = links.user;
  adminLink = links.admin;

  login: string = '123';
  password: string = '123';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  sendCredentials(): void {
    this.apiService
      .sendCredentials(this.login, this.password)
      .pipe(
        mergeMap((res) =>
          this.apiService
            .getUserRoles(res.token)
            .pipe(map((user) => ({ ...user, role: 'admin' })))
        )
      )
      .subscribe((user) => {
        this.user = user;
      });
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //   private afs: AngularFirestore,
  // private db: AngularFireDatabase,
  // private auth: AngularFireAuth

  // this.firebaseLogin();
  // this.getUserData();
  // this.getFireStore();
  // this.realtimeDatabase();
  // this.getUserData();

  // firebaseLogin(): void {
  //   this.auth.signInWithEmailAndPassword('test@test.pl', 'test@test.pl').then();
  //   // const provider = new GoogleAuthProvider();
  //   // this.auth.signInWithPopup(provider);
  // }

  // getUserData() {
  //   this.auth.onAuthStateChanged((user) => {
  //     console.log({
  //       email: user?.email,
  //       uid: user?.uid,
  //       displayName: user?.displayName,
  //     });
  //   });
  // }

  // getFireStore() {
  //   this.afs
  //     .collection('users')
  //     .valueChanges()
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  //   // Add item
  //   // this.afs.collection('users').add({ name: 'Tomek', age: '20' });
  // }

  // realtimeDatabase() {
  //   // this.db.list('entry').push({id: 9999});
  //   // Display data
  //   this.db
  //     .object('entry')
  //     .valueChanges()
  //     .subscribe((res) => {
  //       console.log('Entry');
  //       console.log(res);
  //     });
  //   this.db
  //     .list('entry')
  //     .valueChanges()
  //     .subscribe((res) => {
  //       console.log('List');
  //       console.log(res);
  //     });
  // }
}
