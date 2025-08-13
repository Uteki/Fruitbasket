import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer>
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="1440" height="127" viewBox="0 0 1440 127" fill="none">
      <path d="M0 127H1440V24.9102C1257.5 7.95 981.576 -0.999994 719.5 -0.999994C457.835 -0.999994 210.28 4.9 0 24.7883V127Z" fill="#09212A"/>
  </svg>
  <div>
          <p>&copy; 2023 DAwarldo GmbH</p>
  </div>
</footer>`,
  styles: [`
    footer {
    position: relative;
    height: 128px;
    width: 100%;
    background-color: #06171E;
    >svg {
        height: 128px;
        width: 100%;
      }
    >div {
        position: absolute;
        flex-direction: column;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        >p {
            color: #627B84;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
        }
      }
    }
  `]
})
export class FooterComponent {

}
