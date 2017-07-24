namespace MovieTutorial.Default {
    export interface GenreRow {
        GenreId?: number;
        Name?: string;
    }

    export namespace GenreRow {
        export const idProperty = 'GenreId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Genre';
        export const lookupKey = 'Default.Genre';

        export function getLookup(): Q.Lookup<GenreRow> {
            return Q.getLookup<GenreRow>('Default.Genre');
        }

        export namespace Fields {
            export declare const GenreId: string;
            export declare const Name: string;
        }

        ['GenreId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

