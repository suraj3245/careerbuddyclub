function cchmScriptloaded() {
    window.ee_form_widget_baseurl = "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";
    
    if (!document.getElementById("__formWidgetCss")) {
        var e = document.createElement("link");
        e.id = "__formWidgetCss";
        e.rel = "stylesheet";
        e.href = window.ee_form_widget_baseurl + "css/stylesheet.min.css";
        e.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(e);
    }
    var t = document.createElement("script");
    t.type = "text/javascript";
    t.onload = async function () {
        try {
            _eeFormWidget = new eeFormWidget();
            // Get UTM parameters from the URL
            const urlParams = new URLSearchParams(window.location.search);
            const utm_source = urlParams.get("utm_source") || "default_source";
            const utm_medium = urlParams.get("utm_medium") || "default_medium";
            const utm_campaign = urlParams.get("utm_campaign") || "default_campaign";

            // Pass UTM parameters to init function
            await _eeFormWidget.init("applycbc", "form-19", "ee-form-19", {
                utm_source: utm_source,
                utm_medium: utm_medium,
                utm_campaign: utm_campaign
            });
        } catch (error) {
            console.error("Error initializing the form widget:", error);
        }
    };

    t.src = window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
    t.onerror = function (error) {
        console.error("Failed to load the script:", error);
    };

    document.getElementsByTagName("head")[0].appendChild(t);
}
cchmScriptloaded();

