# angular-dazhaohu

This angular filter supports the input of an datetime object and output the greeting in simplified Chinese, such as input 7:00AM output 早上好
## Installation
```
bower install angular-dazhaohu --save
```

## Usage

Include angular-dazhaohu.js in your application
```html
<script src="bower_components/angular-dazhaohu/angular-dazhaohu.js"></script>

```
```javascript
var app = angular.module('app', ['angular-dazhaohu']);
```

```html
<span>{{your_datetime_obj | dazhaohu }}</span>
```
```
早上好
```

## License
Released under the terms of the MIT License.
