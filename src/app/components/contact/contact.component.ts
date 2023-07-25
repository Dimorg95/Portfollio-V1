import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailForm!: FormGroup;

  get email() {
    return this.emailForm.get('email');
  }
  get subject() {
    return this.emailForm.get('subject');
  }
  get content() {
    return this.emailForm.get('content');
  }

  get name() {
    return this.emailForm.get('name');
  }
  snackBarDuration: number = 5000;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    //Formulaire
    const validationRegex =
      /^(?![\s])[a-zA-ZÀ-ÿ0-9'"&(),_ .!?;:\r\n-]*[a-zA-ZÀ-ÿ0-9'"&(),_ .!?;\-]*$/;

    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern(validationRegex)]],
      subject: [
        null,
        [Validators.required, Validators.pattern(validationRegex)],
      ],
      content: [
        null,
        [Validators.required, Validators.pattern(validationRegex)],
      ],
    });
  }

  ngOnInit(): void {}

  /**
   * Methode d'envoie du mail via EmailJS
   */
  onSubmitForm() {
    //On recupere les champs de textes
    const email = this.emailForm.value.email;
    const name = this.emailForm.value.name;
    const subject = this.emailForm.value.subject;
    const content = this.emailForm.value.content;
    //On récupere nos ID
    const serviceID = environment.service_id;
    const templateID = environment.template_id;
    const userId = environment.user_id;
    //On crée nos parametres avec les champs de texte
    const toName = 'Mathias';
    const templateParams = {
      to_name: toName,
      email: email,
      name: name,
      subject: subject,
      content: content,
    };

    emailjs.send(serviceID, templateID, templateParams, userId).then(
      (response: EmailJSResponseStatus) => {
        console.log('Email envoyer avec succés', response);
        this.showSuccessNotification();
        this.resetForm();
      },
      (error) => {
        console.error("Erreur lors de l'envoie du mail", error);
        this.showErrorNotification();
      }
    );
  }
  //NOtification de succés
  showSuccessNotification() {
    this.snackBar.open('Message envoyé avec succès 👍', 'Fermer', {
      duration: this.snackBarDuration, // Durée pendant laquelle la notification est affichée (en millisecondes)
      panelClass: 'success-notification', // Classe CSS pour personnaliser le style de la notification de succès
    });
  }

  //Notification d'echec de l'envoie du mail
  showErrorNotification() {
    this.snackBar.open("Erreur lors de l'envoi du message ❌", 'Fermer', {
      duration: this.snackBarDuration,
      panelClass: 'error-notification', // Classe CSS pour personnaliser le style de la notification d'erreur
    });
  }

  resetForm() {
    this.emailForm.reset();
  }
}
