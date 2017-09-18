function CircularSequence(length)
{
    var index = 0;
    this.next = function()
    {
        index++;
        if (index >= length)
            index = 0;
        return index;
    }
    this.prev = function()
    {
        index--;
        if (index <= 0)
            index = length-1;
        return index;
    }
    this.peek = function()
    {
        return index;
    }
}
function SlideShow(images)
{
    var seq = new CircularSequence(images.length);
    this.display = function()
    {
        var screen = document.getElementById("slide");
        screen.src = "images/" + images[seq.peek()];
    }
    this.next = function()
    {
        seq.next();
        this.display();
    }
    this.prev = function()
    {
        seq.prev();
        this.display();
    }
}
slideShow = new SlideShow(["beastie.png", "debian.svg", "Gentoo_Linux_logo_matte.svg", "NetBSD-smaller.png", "openindiana.png"])