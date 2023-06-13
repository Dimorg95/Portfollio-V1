//deuxieme facon avec renderer et elementref
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    //Animation machine a ecrire
    let isTyping = false;
    const paragraphe = this.el.nativeElement.querySelector(
      '.p1'
    ) as HTMLElement;
    const text = 'Je suis Mathias, développeur web en pleine apprentissage.';

    /**
     * Fonction machine a ecrire au tableau
     * @param word
     * @param index
     * @param onComplete
     */
    const typeWriter = (
      word: string,
      index: number,
      onComplete: () => void
    ) => {
      if (index < word.length) {
        setTimeout(() => {
          const span = document.createElement('span');
          // span.textContent = word[index];
          this.renderer.setProperty(span, 'textContent', word[index]);
          span.style.fontFamily = 'Fredericka the Great, cursive';
          this.renderer.appendChild(paragraphe, span);
          typeWriter(word, index + 1, onComplete);
        }, 150);
      } else {
        onComplete();
      }
    };

    //Fonction qui declenche l'ecriture au scroll
    function typeWriterOnScroll() {
      const { scrollTop, clientHeight } = document.documentElement;
      const topElementToTopViewport = paragraphe.getBoundingClientRect().top;

      if (
        scrollTop >
        parseFloat((scrollTop + topElementToTopViewport).toFixed()) -
          Number(clientHeight) * 0.5
      ) {
        if (!isTyping) {
          isTyping = true;
          typeWriter(text, 0, () => {
            window.removeEventListener('scroll', typeWriterOnScroll);
            isTyping = false;
          });
        }
      }
    }
    //Envoie de la fonction typeWritter
    window.addEventListener('scroll', typeWriterOnScroll);
  }
}
