$(document).ready(
    function() {
        Info = {

            width: "100%",
            height: "100%",
            debug: false,
            j2sPath: "jsmol/jsmol/j2s",
            color: "#000000",
            disableJ2SLoadMonitor: true,
            disableInitialConsole: true,
            addSelectionOptions: false,
            serverURL: "jsmol/jsmol/php/jsmol.php",
            use: "HTML5",
            readyFunction: null,
            script: "set zoomLarge off; set language sv;"
        }

        $("#jmolpane").html(Jmol.getAppletHtml("jmolApplet0",Info))
    }
);
