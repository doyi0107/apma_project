$("input[type=date].placeholder-date").on("change", (e) => {
    const target = $(e.target);
    if (target.val() == "") target.addClass("date_empty");
    else target.removeClass("date_empty");
  })