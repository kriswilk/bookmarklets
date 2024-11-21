// Edit the content of the current web page. Press ESC to return to normal mode.
((d = document, b = d.body, s = b.style, spellcheck = b.spellcheck, border = s.border) => {
    s.border = "20px dashed red";
    b.spellcheck = false;
    d.designMode = "on";
    d.addEventListener("keyup", e => {
        if (e.key === "Escape") {
            d.designMode = "off";
            b.spellcheck = spellcheck;
            s.border = border;
            d.removeEventListener("keyup",e);
        }
    });
})();
