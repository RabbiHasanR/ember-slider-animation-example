import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class WaterfallOverlayComponent extends Component {
  // @tracked animationName;
  // animate(item, animationName){
  //     item.className += ' ' + animationName;
  //     item.className = item.className.replace('pre-animate', '');
  // }
  @action
  animate(item, animationName) {
    item.className += ' ' + animationName;
    item.className = item.className.replace('pre-animate', '');
    console.log('animating');
  }

  @action
  animateOut(item, animationName) {
    item.className += ' ' + animationName;
    // item.className += ' pre-animate';
    // console.log('animating out');
  }

  @action
  waterfall() {
    let animationName = 'slidein';
    var items = document.getElementsByClassName('animate-' + animationName);
    for (var i = 0; i < items.length; i++) {
    items[i].className += ' pre-animate';
    setTimeout(this.animate.bind(undefined,items[i], animationName), i * 300);
    }
  }

  @action
  reset() {
    this.waterfall();
  }

  @action
  hide(){
    let animationName = 'slidein';
    var items = document.getElementsByClassName('animate-' + animationName);
    for (var i = 0; i < items.length; i++) {
    // items[i].className += ' pre-animate';
    setTimeout(this.animateOut.bind(undefined,items[i], 'slideout'), i * 300);
    // items[i].className += ' pre-animate';
    }
  }
}
