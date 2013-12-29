Package.describe({
    summary: "Medium editor repackaged for Meteor"
});

Package.on_use(function (api) {
    api.export(['MediumEditor'], ['client', 'server']);
    api.add_files(['medium-editor.css', 'medium-editor.js'], ['client']);
});