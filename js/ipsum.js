function getProps(form, fields)
{
    var colorObj = new Object();
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
    for (var color in colorObj)
    {
        if (!checkInput(color, colorObj[color]))
            return false;
    }
    return "rgb(" + colorObj["red"] + ", " + colorObj["green"] + ", " + colorObj["blue"]+")";
}
function checkInput(name, width)
{
    var val = parseInt(width);
    if (isNaN(val) || val < 0 || val > 255) {
        alert("Input invalid: "+ name);
        return false;
    } else {
        console.log(name, val);
    }
    return true;
}
function applyColors()
{
    var ipsum = document.getElementById("ipsum-container");
    //Background color
    var backgroundProps = getProps(document.forms["background"]);
    var bgColor = makeColor(backgroundProps);
    if (bgColor)
        ipsum.style.backgroundColor = bgColor;
    //Border color & width
    var bkForm = document.forms["border"];
    var borderProps = getProps(bkForm, ["red", "green", "blue", "width"]);
    var bkColor = makeColor(borderProps);
    if (bkColor)
        ipsum.style.borderColor = bkColor;
    if (checkInput("width", borderProps["width"]))
        ipsum.style.borderWidth = borderProps["width"];
}