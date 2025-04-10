//TODO - Make a simple image slider with jQuery
// This code creates a simple image slider using jQuery. It allows users to navigate through images using "Next" and "Previous" buttons.



$(document).ready(function ()
{
    $.fn.myStudio = function ()
    {
        let currentIndex = 0;
        const $images = this;

        const imagesSrc = [];

        $images.each(function ()
        {
            imagesSrc.push($(this).attr("src"));
        });

        if (!$("#imageModal").length)
        {
            const modal = $(`
        <div id="imageModal" style="display:none;">
          <div class="overlay"></div>
          <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modalImg" src="" />
            <div class="nav left">&#10094;</div>
            <div class="nav right">&#10095;</div>
          </div>
        </div>
      `);

            $("body").append(modal);
        }

        function showModal(index)
        {
            $("#modalImg").attr("src", imagesSrc[index]);
            $("#imageModal").fadeIn(1000);
        }





        $images.on("click", function ()
        {
            currentIndex = imagesSrc.indexOf($(this).attr("src"));
            showModal(currentIndex);
        });

        $("body").on("click", ".close, .overlay", function ()
        {
            $("#imageModal").fadeOut(1000);
        });

        $("body").on("click", ".nav.left", function ()
        {
            currentIndex = (currentIndex - 1 + imagesSrc.length) % imagesSrc.length;
            showModal(currentIndex);
        });

        $("body").on("click", ".nav.right", function ()
        {
            currentIndex = (currentIndex + 1) % imagesSrc.length;
            showModal(currentIndex);
        });

        return this;
    };




    $(".gallery-item img").myStudio();
});
