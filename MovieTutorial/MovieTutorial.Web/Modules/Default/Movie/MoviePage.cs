


namespace MovieTutorial.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Movie"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MovieRow))]
    public class MovieController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Movie/MovieIndex.cshtml");
        }
    }
}