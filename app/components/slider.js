import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class SliderComponent extends Component {
  slider() {
    const delay = 600000; //ms

    const slides = document.querySelector('.slides');
    const slidesCount = slides.childElementCount;
    const maxLeft = (slidesCount - 1) * 100 * -1;

    let current = 0;

    let changeSlide = function (next = true) {
      if (next) {
        current += current > maxLeft ? -100 : current * -1;
      } else {
        current = current < 0 ? current + 100 : maxLeft;
      }

      slides.style.left = current + '%';
    };

    let autoChange = setInterval(changeSlide, delay);
    const restart = function () {
      clearInterval(autoChange);
      autoChange = setInterval(changeSlide, delay);
    };

    // Controls
    document
      .querySelector('.next-slide')
      .addEventListener('click', function () {
        changeSlide();
        restart();
      });

    document
      .querySelector('.prev-slide')
      .addEventListener('click', function () {
        changeSlide(false);
        restart();
      });
  }

  @tracked items = [
    [
      {
        id: 1,
        name: 'Slider One',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 2,
        name: 'Slider Two',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 3,
        name: 'Slider Three',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 4,
        name: 'Slider Four',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 5,
        name: 'Slider Five',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 6,
        name: 'Slider Six',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 7,
        name: 'Slider Seven',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 8,
        name: 'Slider Eight',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 9,
        name: 'Slider Nine',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 10,
        name: 'Slider Ten',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 11,
        name: 'Slider Eleven',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
      {
        id: 12,
        name: 'Slider Tweleve',
        images: [
          'https://picsum.photos/1280/720?random=1',
          'https://picsum.photos/1280/720?random=2',
          'https://picsum.photos/1280/720?random=3',
        ],
      },
    ],

    [
      {
        id: 1,
        name: 'Slider One',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 2,
        name: 'Slider Two',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 3,
        name: 'Slider Three',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 4,
        name: 'Slider Four',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 5,
        name: 'Slider Five',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 6,
        name: 'Slider Six',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 7,
        name: 'Slider Seven',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 8,
        name: 'Slider Eight',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 9,
        name: 'Slider Nine',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 10,
        name: 'Slider Ten',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 11,
        name: 'Slider Eleven',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
      {
        id: 12,
        name: 'Slider Tweleve',
        images: [
          'https://picsum.photos/1280/720?random=4',
          'https://picsum.photos/1280/720?random=5',
          'https://picsum.photos/1280/720?random=6',
        ],
      },
    ],
  ];
}
