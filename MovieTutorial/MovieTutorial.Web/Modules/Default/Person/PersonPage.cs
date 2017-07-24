

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Default/Person", typeof(MovieTutorial.Default.Pages.PersonController))]

namespace MovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Person"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PersonRow))]
    public class PersonController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Person/PersonIndex.cshtml");
        }
    }
}