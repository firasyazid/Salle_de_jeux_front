import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Session, UsersService } from '@eshop/products';
import { timer } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [],
})
export class CategoriesListComponent implements OnInit {
  sessions: Session[] = [];
  displayDialog = false;
  displayDialogUpdate = false;
  isModal = false;
  lastSession: any;
  selectedSession: Session = {};
  displayDialogCompteur = false;

  newSession: Session = {
    nameUser: '',
    fondInitial: '',
  };

  constructor(
    private sessionService: UsersService,
    private messageService: MessageService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSession();
  }

  _addSession(session: Session) {
    this.sessionService.createSession(session).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'session is added successfully',
          life: 3000,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.displayDialog = false;
            this.getSession();

            // close the dialog
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'session is not added!',
        });
      }
    );
  }

  getSession() {
    this.sessionService.getLastSession().subscribe((cats) => {
      this.lastSession = cats;
      console.log(cats);
    });
  }

  _updateSession(claim: Session) {
    this.sessionService.updateSession(claim).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'session is updated!',
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.displayDialogUpdate = false;
            this.getSession(); // refresh the claims list
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'session is not updated!',
        });
      }
    );
  }
  openUpdateDialog(session: Session) {
    this.selectedSession = { ...session }; // Make a copy of the session object
    this.displayDialogUpdate = true;
  }

  navigate(sessionId: string) {
    this.router.navigateByUrl(`categories/form/${sessionId}`);
  }

  openUpdat2eDialog(session: Session) {
    this.selectedSession = { ...session }; // Make a copy of the session object
    this.displayDialogCompteur = true;
  }

  refreshDialog(): void {
    this.getSession();
  }

  incrementCompteur(sessionId: string, postName: string): void {
    this.sessionService.incrementCompteur(sessionId, postName).subscribe(
      (response) => {
        this.selectedSession = response.session;
        this.getSession();
      },
      (error) => {
        console.error('Failed to increment compteur', error);
      }
    );
  }

  decrementCompteur(sessionId: string, postName: string): void {
    this.sessionService.decrementCompteur(sessionId, postName).subscribe(
      (response) => {
        this.selectedSession = response.session;
        this.getSession();
      },
      (error) => {
        console.error('Failed to increment compteur', error);
      }
    );
  }


  incrementCompteur2(sessionId: string, postName: string): void {
    this.sessionService.incrementCompteur2(sessionId, postName).subscribe(
      (response) => {
        this.selectedSession = response.session;
        this.getSession();
      },
      (error) => {
        console.error('Failed to increment compteur', error);
      }
    );
  }

  
}
