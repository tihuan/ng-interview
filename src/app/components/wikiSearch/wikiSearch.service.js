export class WikiSearch {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  search(term) {
    return this.$http({
      url: 'http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK',
      method: 'jsonp',
      params: {
        action: 'opensearch',
        search: term,
        format: 'json'
      }
    }).then(function(result) {
      console.log('SEARCH result here:');
      console.log(result);
      return result.data;
    });
  }
}
