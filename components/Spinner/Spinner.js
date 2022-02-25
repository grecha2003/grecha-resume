import { ROOT_SPINNER } from '../../constants/root';

class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    const html = `
      <div class="spinner-container">
        <div class="spinner__img" /div>
      </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();

spinnerPage.render();

let CATALOG = [];

fetch('../../public/index.html').then((body) => {
  CATALOG = body;
  setTimeout(function () {
    spinnerPage.handleClear();
  });
});

fetch('../../public/exper.html').then((body) => {
  CATALOG = body;
  setTimeout(function () {
    spinnerPage.handleClear();
  });
});

fetch('../../public/learn.html').then((body) => {
  CATALOG = body;
  setTimeout(function () {
    spinnerPage.handleClear();
  });
});

fetch('../../public/sertification.html').then((body) => {
  CATALOG = body;
  setTimeout(function () {
    spinnerPage.handleClear();
  });
});
