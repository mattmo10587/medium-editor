Package.describe({
    summary: "Medium editor repackaged for Meteor"
});

Package.on_use(function (api) {
    api.export('MediumEditor', 'client');
    api.add_files(['medium-editor.css'], 'client');
    api.add_files(['medium-editor.js'], 'client');
});