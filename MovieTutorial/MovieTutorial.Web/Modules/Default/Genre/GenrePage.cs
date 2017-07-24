

namespace MovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Genre"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GenreRow))]
    public class GenreController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Genre/GenreIndex.cshtml");
        }
    }
}