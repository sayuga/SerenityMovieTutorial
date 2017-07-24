namespace MovieTutorial.Default {
    export class MovieCastForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MovieCast';

    }

    export interface MovieCastForm {
        PersonId: Serenity.LookupEditor;
        Character: Serenity.StringEditor;
    }

    [['PersonId', () => Serenity.LookupEditor], ['Character', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MovieCastForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

