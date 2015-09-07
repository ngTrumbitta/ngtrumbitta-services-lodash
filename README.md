# ngTrumbitta Lodash Angular service

[![Build Status](https://travis-ci.org/ngTrumbitta/ngtrumbitta-services-lodash.svg?branch=master)](https://travis-ci.org/ngTrumbitta/ngtrumbitta-services-lodash)

Inject Lodash in any Angular application, and use it via the good old `_` handler.

Just a little something I find myself rewriting every time I work on an Angular application.  
Well, no more I guess ;)

## Install

```sh
bower install ngtrumbitta-services-lodash
```

## Use

```html
<script src="//code.angularjs.org/1.4.5/angular.min.js"></script>
<script src="bower_components/lodash/lodash.min.js"></script>
<script src="bowser_components/ngtrumbitta-services-lodash/src/lodash.service.js"></script>
```

```javascript
angular.module('app.services.myservice', [
  'ngtrumbitta.services.lodash'
  ])
  .service('myService', function(_) {

    this.getMyGirls = function() {
      var myCollection = ['Buffy', 'Xander', 'Willow', 'Giles'];
      var myGirls = ['Buffy', 'Willow'];
      return _.at(myCollection, [0, 2]);
    };

  });

```

## License

MIT – See [license file](LICENSE)
