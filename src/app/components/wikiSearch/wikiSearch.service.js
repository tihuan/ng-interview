export class WikiSearch {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  search(term) {
    // this search function is incomplete
    return this.$http({
      url: 'http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK',
      method: 'jsonp',
      params: {
        action: 'opensearch',
        search: term,
        format: 'json'
      }
    })
  }
}
