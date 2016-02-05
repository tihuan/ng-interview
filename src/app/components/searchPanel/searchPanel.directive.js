// 1. wikiSearch is the service you need
// 2. create a search box that takes user input
// 3. create a button that trigger wikiSearch
// 4. bind search result in view and ng-repeat it
// 5. use this to repeat result: <h4>{{$index}}.</h4> {{result | json}}
export function SearchPanelDirective(wikiSearch) {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: `
      <h3>Search WikiPedia Here:</h3>
      <input type="text" ng-model="search.term">
      <button ng-click="startSearch(search.term)">Search</button>
      <div ng-repeat="result in results">
        <h4>{{$index}}.</h4> {{result | json}}
      </div>
    `,
    link: linkFn
  };

  function linkFn(scope, ele, attr) {
    scope.search = {
      term: ''
    }
    scope.startSearch = startSearch

    function startSearch(term) {
      wikiSearch.search(term).then(function(results) {
        scope.results = results
      })
    }
  }

  return directive;
}
