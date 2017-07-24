
namespace MovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow))]
    public class MovieCastColumns
    {
        [EditLink, AlignRight]
        public String PersonFullname { get; set; }
        [EditLink]
        public String Character { get; set; }
    }
}