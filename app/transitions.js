export default function () {
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('index'),
    this.toRoute('people'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('people.index'),
    this.toRoute('people.detail'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}
