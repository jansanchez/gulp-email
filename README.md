
# Gulp Email [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> A gulp plugin to send emails with or without attachments from a stream of html.


## Getting Started

#### Install:

```
npm install --save-dev gulp-email
```

#### How to use:

For example, using mailgun.com(registration it's free and you can send up to 10,000 emails every day.)

Sending an email like report HTML and attaching a file.

```javascript
    var gulp = require('gulp'),
        email = require('gulp-email');
    
    var options = {
        user: 'api:key-564dfgfead753fghef11c54c1fb',
        url: 'https://api.mailgun.net/v2/sandbox4825.mailgun.org/messages',
        form: {
            from: 'John Doe <John.Doe@gmail.com>',
            to: 'Fulano Mengano <fulano.mengano@gmail.com>',
            subject: 'The last dist',
            attachment: '@path/to/folder/dist.zip'
        }
    };

    gulp.task('email', function () {
        return gulp.src(['./demo/reports/*.html'])
            .pipe(email(options));
    });
```

Sending an email without the content of a stream.


```javascript
    var gulp = require('gulp'),
        email = require('gulp-email');
    
    var options = {
            user: 'api:key-564dfgfead753fghef11c54c1fb',
            url: 'https://api.mailgun.net/v2/sandbox4825.mailgun.org/messages',
            form: {
                from: 'John Doe <John.Doe@gmail.com>',
                to: 'Fulano Mengano <fulano.mengano@gmail.com>',
                cc: 'Regis Messac <regis.messac@gmail.com>',
                bcc: 'John Smith <john.smith@gmail.com>',
                subject: 'You have an new email',
                text: 'text version'
            },
            form_string: {
                html: '<p>Overwrite to html content of stream files.</p>'
            }
        };

    gulp.task('email', function () {
        return gulp.src(['./demo/no-matter.html'])
            .pipe(email(options));
    });
```

For these examples I am using the API of mailgun.com(I recommend). In this first release only supports [mailgun API](http://documentation.mailgun.com/api-sending.html#sending "mailgun API") and is more than enough.



[npm-url]: https://www.npmjs.org/package/gulp-email
[npm-image]: http://img.shields.io/npm/v/gulp-email.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-email
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-email.svg

