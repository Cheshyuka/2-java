window.onload = function() {
    $(".like").click((e) => {
        var btn = $(e.currentTarget);
        var postId = btn.attr("data-post-id");

        // Блокируем кнопку, чтобы нельзя было кликнуть дважды
        btn.attr("disabled", "disabled");

        // AJAX POST-запрос
        $.post("/post/" + postId + "/like", (data) => {
            // data — это ответ сервера (новое количество лайков)
            btn.text(data + " ❤");
            btn.removeClass("btn-secondary");
            btn.addClass("btn-danger");
        });
    });
};

