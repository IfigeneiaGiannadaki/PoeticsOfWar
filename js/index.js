$(document).ready(function ()
{
    $('.page-content .tab.lectures').fadeIn(250);

    $('.navitem').click(function ()
    {
        clearAll();
        $(this).addClass('active');

        hideAll();
        var id = $(this).attr('id');
        $('.page-content .tab.' + id).fadeIn(250);
    });
});

function clearAll()
{
    $('.navitem').removeClass('active');
}

function hideAll()
{
    $('.page-content .tab').hide();
}
