namespace MovieTutorial.Default {
    export class MovieForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Movie';

    }

    export interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CastList: MovieCastEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
        GenreList: Serenity.LookupEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['CastList', () => MovieCastEditor], ['PrimaryImage', () => Serenity.ImageUploadEditor], ['GalleryImages', () => Serenity.MultipleImageUploadEditor], ['Storyline', () => Serenity.TextAreaEditor], ['Year', () => Serenity.IntegerEditor], ['ReleaseDate', () => Serenity.DateEditor], ['Runtime', () => Serenity.IntegerEditor], ['Kind', () => Serenity.EnumEditor], ['GenreList', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(MovieForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

