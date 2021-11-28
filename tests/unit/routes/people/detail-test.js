import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | people/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:people/detail');
    assert.ok(route);
  });
});
