Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Edit":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c","delete":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Search":"\u041f\u043e\u0438\u0441\u043a","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","All":"\u0412\u0441\u0435","Done":"\u0421\u0434\u0435\u043b\u0430\u043d\u043e!","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Hide":"\u0423\u0431\u0440\u0430\u0442\u044c","What is OpenID?":"\u0421\u043f\u0440\u0430\u0432\u043a\u0430 \u043f\u043e OpenID","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","Not in book":"\u041d\u0435 \u0432 \u043a\u043d\u0438\u0433\u0435","New book":"\u041d\u043e\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430","By @name on @date":"@name. @date","By @name":"\u0410\u0432\u0442\u043e\u0440: @name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0410\u0434\u0440\u0435\u0441: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u043f\u0440\u0430\u0432\u043a\u0430","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b.","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u0412\u0435\u0440\u0441\u0438\u0439 \u043d\u0435\u0442","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e","Restricted to certain pages":"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438","Hide summary":"\u041d\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Edit summary":"\u0412\u0432\u0435\u0441\u0442\u0438 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"@title \u0434\u0438\u0430\u043b\u043e\u0433","color":"\u0446\u0432\u0435\u0442","save":"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","Settings for":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f","Feedback when correct":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430","Feedback when wrong":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430","Feedback disabled":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430"}} };;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
