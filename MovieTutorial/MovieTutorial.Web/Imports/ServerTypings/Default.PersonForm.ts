namespace MovieTutorial.Default {
    export class PersonForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Person';

    }

    export interface PersonForm {
        Firstname: Serenity.StringEditor;
        Lastname: Serenity.StringEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        BirthDate: Serenity.DateEditor;
        BirthPlace: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Height: Serenity.IntegerEditor;
    }

    [['Firstname', () => Serenity.StringEditor], ['Lastname', () => Serenity.StringEditor], ['PrimaryImage', () => Serenity.ImageUploadEditor], ['GalleryImages', () => Serenity.MultipleImageUploadEditor], ['BirthDate', () => Serenity.DateEditor], ['BirthPlace', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['Height', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PersonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

