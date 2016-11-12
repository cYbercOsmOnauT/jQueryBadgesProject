$(function() {
  // your code will go here
    $.ajax({
        url: 'https://www.codeschool.com/users/955481.json',
        dataType: 'jsonp',
        success: function(response) {
            var createdHTML,
                    badges = $('#badges');
            if (response.hasOwnProperty('courses') && response.courses.hasOwnProperty('completed')) {
                $.each(response.courses.completed, function (idx, completed) {
                    createdHTML = $('<div>')
                        .addClass('course')
                        .append($('<h3>')
                            .text(completed.title)
                        )
                        .append($('<img>')
                            .attr('src', completed.badge)
                        )
                        .append($('<a>')
                            .attr('href', completed.url)
                            .attr('target', '_blank')
                            .addClass('btn btn-primary')
                            .text('See Course')
                        );
                    badges.append(createdHTML);
                });
            }
        }
    });
});
