namespace MovieTutorial.Default {
    export interface MovieRow {
        MovieId?: number;
        Title?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
        Kind?: MovieKind;
        GenreList?: number[];
        CastList?: MovieCastRow[];
        PrimaryImage?: string;
        GalleryImages?: string;
    }

    export namespace MovieRow {
        export const idProperty = 'MovieId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Default.Movie';

        export namespace Fields {
            export declare const MovieId: string;
            export declare const Title: string;
            export declare const Description: string;
            export declare const Storyline: string;
            export declare const Year: string;
            export declare const ReleaseDate: string;
            export declare const Runtime: string;
            export declare const Kind: string;
            export declare const GenreList: string;
            export declare const CastList: string;
            export declare const PrimaryImage: string;
            export declare const GalleryImages: string;
        }

        ['MovieId', 'Title', 'Description', 'Storyline', 'Year', 'ReleaseDate', 'Runtime', 'Kind', 'GenreList', 'CastList', 'PrimaryImage', 'GalleryImages'].forEach(x => (<any>Fields)[x] = x);
    }
}

