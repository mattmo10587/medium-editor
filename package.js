Package.describe({
    summary: "Medium editor repackaged for Meteor"
});

Package.on_use(function (api) {
    api.add_files(['medium-editor.css', 'medium-editor.js'], ['client']);
    api.export(['MediumEditor'], ['client']);
});