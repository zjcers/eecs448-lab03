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
}