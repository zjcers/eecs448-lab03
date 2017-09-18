function CircularSequence(length)
{
    var index = 0;
    function next()
    {
        index++;
        if (index >= length)
            index = 0;
        return index;
    }
    function prev()
    {
        index--;
        if (index <= 0)
            index = length-1;
        return index;
    }
    function peek()
    {
        return index;
    }
}
function SlideShow(images)
{
    var seq = new CircularSequence(images.length);
    function display()
    {
        var screen = document.getElementById("slide");
        screen.src = images[seq.peek()];
    }
    function next()
    {
        seq.next();
        this.display();
    }
    function prev()
    {
        seq.prev();
        this.display();
    }
}