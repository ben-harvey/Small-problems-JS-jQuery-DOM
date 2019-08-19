const Tooltip = {
    showCaption: (e) => {
      $(e.target).next().fadeIn(300);
    },

    setTimer: (e) => {
      this.timeoutId = setTimeout(() => showCaption(e), 1000)
      $(e.target).next().fadeIn(300);
    },

    hideCaption: (e) => {
      if (this.timeoutId) { clearTimeout(this.timeoutId) };
      $(e.target).next().fadeOut(300);
    },

    bind: function () {
      $('#exotic_animals').on('mouseenter', 'img', this.setTimer.bind(this));
      $('#exotic_animals').on('mouseleave', 'img', this.hideCaption.bind(this));
    },

    init: function() {
      this.bind()
    },
  };

$(function () {
  Tooltip.init();
})


