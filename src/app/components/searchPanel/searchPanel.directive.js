export function SearchPanelDirective(wikiSearch) {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: `
      <h3>Search WikiPedia Here:</h3>
      <input type="text" ng-model="search.term">
      <button ng-click="startSearch()">Search</button>
      <div ng-repeat="result in search.results">
        <h4>{{$index}}.</h4> {{result | json}}
      </div>
    `,
    scope: {
        creationDate: '='
    },
    link: function(scope, ele, attr) {
      scope.search = {
        term: ''
      }

      scope.startSearch = function() {
        var searchResult = wikiSearch.search(scope.search.term);
        searchResult.then(function(results) {
          scope.search.results = results;
        });
      }
    }
  };

  return directive;
}
