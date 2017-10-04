import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { BusinessSegmentService } from '../service/businessSegment.service';
import { PayerService } from '../service/payer.service';
import { AuditTeamService } from '../service/auditTeam.service';
import { RoleService } from '../service/role.service';

import * as _model from '../../shared/model/models';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
// growl...
import { AlertService } from '../../../sdk/core/shared/services/alert.service';
import { MessageType } from '../../../sdk/core/shared/models/messageType.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { TestApi } from '../../shared/api/TestApi';
declare var jQuery: any;

@Component({
    selector: 'app-edit-user',
    templateUrl: './edituser.component.html'
})

// tslint:disable:max-line-length
export class EditUserComponent {
    public studyGuide: _model.TestViewModel = <_model.TestViewModel>{};
    successfulSave: boolean;
    cards: Array<_model.CardViewModel> = [];
    selectedCard: _model.CardViewModel = {};
    displayDialog: boolean;

    @ViewChild('editUserForm') currentForm: NgForm;

    constructor(private route: ActivatedRoute, private testApi: TestApi,
        private businessSegmentService: BusinessSegmentService,
        private alertService: AlertService,
        private router: Router,
        private confirmationService: ConfirmationService) {
    }// ctor

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.getUserById();
    }// ngOnInit()

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        jQuery(document).ready(function () {
            document.getElementById('edituserTbxFirstName').focus();
        });
    }

    getUserById() {
        this.testApi.GetById(this.route.snapshot.params['id']).subscribe(result => {
            this.studyGuide = result.data as _model.TestViewModel;
            this.cards = this.studyGuide.card;
        });
    }// getUserById()

    editUser() {

        // call service to insert new user, and create client growls based on results...
        this.testApi.UpdateStudyGuide(this.studyGuide).subscribe(result => {
            const apiResult = result as _model.ResponseTestViewModel;

            let success = true;
            let errorMessages = '';
            for (let i = 0; i < apiResult.status.messages.length; i++) {
                if (apiResult.status.messages[i].code !== '200') {
                    errorMessages += '<br>' + apiResult.status.messages[i].description;
                    success = false;
                } else {
                    success = true;
                    this.studyGuide = apiResult.data as User;
                    break;
                }
            }// for

            if (success) {
                this.alertService.showSuccess('Success', 'Edits to this study guide were saved.');
                this.successfulSave = true;
                this.router.navigate(['/user']);
            }
            // tslint:disable-next-line:one-line
            else {
                this.alertService.showError('Failure', 'Edits to this study guide were not saved:'
                    + errorMessages);
            }
        });
    }// editUser()

    addCard() {
        const card: _model.CardViewModel = {};
        this.cards.push({ rowId: 0, testId: 0, question: '', answer: '', image: '' });

        this.cards = this.cards.slice();

        this.selectedCard = this.cards[this.cards.length - 1];

        this.displayDialog = true;
    }

    onDialogHide() {

    }

    editCard(card: _model.CardViewModel) {
        this.selectedCard = card;
        this.displayDialog = true;
    }

    canDeactivate() {
        if (!this.successfulSave && this.currentForm.dirty) {
            return Observable.create((observer: Observer<boolean>) => {
                this.confirmationService.confirm({
                    message: 'You are about to leave this form without saving. Do you want to exit and lose your changes?',
                    header: 'Unsaved Changes',
                    icon: 'fa fa-question-circle',
                    accept: () => {
                        observer.next(true);
                        observer.complete();
                    },
                    reject: () => {
                        observer.next(false);
                        observer.complete();
                    },
                });
            });
        }

        return true;
    }// canDeactivate()

}// class EditUserComponent
