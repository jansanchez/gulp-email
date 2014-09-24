
# Gulp Email [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> A gulp plugin to send emails with or without attachments from a stream of html.


## Getting Started

#### Install:

```
npm install --save-dev gulp-email
```

#### How to use:

For example, using mailgun.com(registration it's free and you can send up to 10,000 emails every day.)

```javascript
    var gulp = require('gulp'),
        email = require('gulp-email');
    
    var options = {
            user: 'api:key-564dfgfead753fghef11c54c1fb',
            url: 'https://api.mailgun.net/v2/sandbox4825.mailgun.org/messages',
            form: {
                from: 'John Doe <John.Doe@gmail.com>',
                to: 'Fulano Mengano <fulano.mengano@gmail.com>',
                subject: 'You have an new email',
                text: 'text plain',
                attachment: '@demo/html/report.zip'
            },
            form_string: {
                html: '<html>Overwrite html content of files</html>'
            }
        };

    gulp.task('email', function () {
        return gulp.src(['./demo/html/*.html'])
            .pipe(email(options, function(data, error){
                console.log(data.message);
            }));
    });
```




[npm-url]: https://www.npmjs.org/package/gulp-email
[npm-image]: http://img.shields.io/npm/v/gulp-email.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-email
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-email.svg

