Package.describe({
    name: 'xerdi:common-helpers',
    version: '0.0.2',
    summary: 'Common Meteor Template helpers',
    git: 'https://github.com/Xerdi/meteor-common-helpers.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.8.0');
    api.use([
        'ecmascript',
        'blaze-html-templates@1.2.1'
    ]);
    api.mainModule('helpers.js', 'client');
});
