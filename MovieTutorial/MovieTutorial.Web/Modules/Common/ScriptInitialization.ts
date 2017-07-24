/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace MovieTutorial.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('MovieTutorial');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}