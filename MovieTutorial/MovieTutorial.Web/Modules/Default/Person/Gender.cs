

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    namespace MovieTutorial.Default
    {
        [EnumKey("Default.Gender")]
        public enum Gender
        {
            [Description("Male")]
            Male = 1,
            [Description("Female")]
            Female = 2
        }
    }
