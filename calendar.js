/* Simple jQuery calendar
   - Renders into #jquery-calendar
   - Prev/Next month, highlights today and selected date
   - Uses Tailwind utility classes present via CDN in index.html
*/
(function () {
  if (typeof window === 'undefined') return;
  var $ = window.jQuery;

  function startWhenReady() {
    var attempts = 0;
    var maxAttempts = 60;
    var iv = setInterval(function () {
      attempts++;
      // Wait until both the container exists and jQuery is loaded
      var el = document.getElementById('jquery-calendar');
      if (el && window.jQuery) {
        clearInterval(iv);
        initCalendar(window.jQuery(el));
        return;
      }
      if (attempts >= maxAttempts) {
        clearInterval(iv);
      }
    }, 100);
  }

  function formatMonthYear(date) {
    return date.toLocaleString(undefined, { month: 'long', year: 'numeric' });
  }

  function buildCalendar($container, date, selected) {
    $container.empty();

    var year = date.getFullYear();
    var month = date.getMonth();

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);

    var startDay = firstDay.getDay(); // 0..6 (Sun..Sat)
    var daysInMonth = lastDay.getDate();

    var today = new Date();
    var isTodayMonth = today.getFullYear() === year && today.getMonth() === month;

    // Header
    var $head = $(`<div class="flex items-center justify-between mb-4"></div>`);
    var $btnPrev = $(`<button class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">◀</button>`);
    var $btnNext = $(`<button class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">▶</button>`);
    var $title = $(`<div class="font-semibold">${formatMonthYear(date)}</div>`);
    $head.append($btnPrev, $title, $btnNext);

    $container.append($head);

    $btnPrev.on('click', function () {
      var d = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      buildCalendar($container, d, selected);
    });
    $btnNext.on('click', function () {
      var d = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      buildCalendar($container, d, selected);
    });

    // Weekday labels
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var $grid = $(`<div class="grid grid-cols-7 gap-2 text-center"></div>`);
    weekdays.forEach(function (w) {
      $grid.append(`<div class="text-sm text-gray-500">${w}</div>`);
    });

    // Blank cells before first day
    for (var i = 0; i < startDay; i++) {
      $grid.append('<div></div>');
    }

    // Day cells
    for (var day = 1; day <= daysInMonth; day++) {
      var $cell = $(`<div class="p-2 rounded-md cursor-pointer">${day}</div>`);
      $cell.addClass('hover:bg-gray-100');

      // highlight today: use light blue background instead of white
      if (isTodayMonth && day === today.getDate()) {
        // light blue background with darker text for contrast
        $cell.addClass('bg-sky-200 text-sky-800 font-semibold');
      } else {
        $cell.addClass('bg-white');
      }

      // highlight selected
      if (selected && selected.getFullYear() === year && selected.getMonth() === month && selected.getDate() === day) {
        $cell.removeClass('bg-white hover:bg-gray-100');
        $cell.addClass('ring-2 ring-primary-300');
      }

      (function (d) {
        $cell.on('click', function () {
          selected = new Date(year, month, d);
          buildCalendar($container, date, selected);
        });
      })(day);

      $grid.append($cell);
    }

    $container.append($grid);

    // Footer: selected date info
    var $footer = $(`<div class="mt-4 text-sm text-gray-600"></div>`);
    if (selected) {
      $footer.text('Selected: ' + selected.toLocaleDateString());
    } else {
      $footer.text('Click a date to select');
    }
    $container.append($footer);
  }

  function initCalendar($container) {
    $container.addClass('calendar-root');
    var now = new Date();
    buildCalendar($container, new Date(now.getFullYear(), now.getMonth(), 1), null);
  }

  // Start when DOM / React has likely rendered the #jquery-calendar and jQuery is available
  startWhenReady();
})();
