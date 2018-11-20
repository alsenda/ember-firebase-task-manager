import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Linux Torvalds', 'Bill Gates', 'Jeff Bates'];
  }
});