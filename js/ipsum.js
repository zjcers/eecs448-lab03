function getColors(form, fields)
{
    var bgColor = new Object();
    if (fields === undefined)
        fields = ["red", "green", "blue"];
    fields.forEach(function(color)
    {
        colorObj[color] = form[color].value;
    });
    return colorObj;
}
function makeColor(colorObj)
{
    return "rgb(" + colorObj["red"] + ", " + colorObj["green"] + ", " + colorObj["blue"]+")";
}
function applyColors()
{
    var ipsum = document.getElementById("ipsum-container");
    //Background color
    var bgColor = getColors(document.forms["background"]);
    ipsum.style.backgroundColor = makeColor(bgColor);
    //Border color & width
    var bkForm = document.forms["border"];
    var borderProps = getColors(bkForm, ["red", "green", "blue", "width"]);
    ipsum.style.borderColor = makeColor(borderProps);
    ipsum.style.borderWidth = borderProps["width"];
}