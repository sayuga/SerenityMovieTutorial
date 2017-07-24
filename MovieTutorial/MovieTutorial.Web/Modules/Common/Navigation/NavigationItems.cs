using Serenity.Navigation;
using Administration = MovieTutorial.Administration.Pages;
using myDefault = MovieTutorial.Default.Pages;
using movieGenre = MovieTutorial.Default.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]
[assembly: NavigationMenu(2000, "Movie Database", icon: "icon-film")]
[assembly: NavigationLink(2100, "Movie Database/Movies", typeof(myDefault.MovieController), icon: "icon-camrecorder")]
[assembly: NavigationLink(2200, "Movie Database/Genre", typeof(movieGenre.GenreController))]
