
# Gulp Email [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> A gulp plugin for send Emails


## Getting Started

#### Install:

```
npm install --save-dev gulp-email
```

#### How to use:

for example, using mailgun.com

```javascript
    var email = require('gulp-email'),
        options = {
            user: 'api:key-564dfgfead753fghef11c54c1fb',
        	url: 'https://api.mailgun.net/v2/sandbox0fe54675eff6624145da45.mailgun.org/messages',
        	form: {
        		from: 'John Doe <John.Doe@gmail.com>',
        		to: 'Fulano Mengano <fulano.mengano@hotmail.com>',
        		subject: 'You have an new email',
        		text: 'text plain',
        		attachment: '@demo/html/email2.html'
        	},
        	form_string: {
        		html: '<html>Overwrite html content of files</html>'
        	}
        };

    gulp.task('email', function () {
        return gulp.src('./demo/html/*.html')
    	.pipe(email(options, function(data, error){
    		console.log(data.message);
    	}));
    });
```

[npm-url]: https://www.npmjs.org/package/gulp-email
[npm-image]: http://img.shields.io/npm/v/gulp-email.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-email
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-email.svg

