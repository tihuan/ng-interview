// 1. wikiSearch is the service you need
// 2. create a search box that takes user input
// 3. create a button that trigger wikiSearch
// 4. bind search result in view and ng-repeat it
// 5. use this to repeat result: <h4>{{$index}}.</h4> {{result | json}}
export function SearchPanelDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: `
      <h3>Search WikiPedia Here:</h3>
    `,
    link: linkFn
  };

  function linkFn(scope, ele, attr) {
  }

  return directive;
}
