const App = {
  $form: $('form'),
  $inputs: $('input'),

  clearMessages: function (event) {
    const input = event.target;
    const $input = $(input);

    $input.next().text('');
  },

  labelText: function (name) {
    return $(`label[for="${name}"]`).text();
  },

  validateInput: function (event) {
    const input = event.target;
    const $input = $(input);
    const name = input.name;

    if (input.checkValidity()) {
      $input.removeClass('invalid_field');
      $input.addClass('valid_field');
    } else {
      $input.addClass('invalid_field');
      this.showError(input);
    };

  },

  showError: function (input) {
    const $input = $(input);
    const name = input.name;

    if (input.validity.valueMissing) {
      $input.next().text(`${this.labelText(name)} is a required field`);
    };

    if (input.validity.patternMismatch) {
      $input.next().text(`Please enter a valid ${this.labelText(name)}`);
    }

    if (input.validity.tooShort) {
      $input.next().text(`Passwords must be at least 10 characters long`);
    };

  },

  handleSubmit: function (event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      $('.form_errors').text('');
      console.log($form.serialize());
    }
    else {
      $('.form_errors').text('Please correct all errors before submitting')
    };

  },

  activateSubmit: function (event) {
    console.log('inputted');
  },

  bind: function () {
    // debugger
    this.$inputs.on('blur', this.validateInput.bind(this));
    this.$inputs.on('focus', this.clearMessages.bind(this));
    this.$form.on('submit', this.handleSubmit.bind(this));
  },

  init: function () {
    this.bind();
  },
}

$(function () {
  App.init();
});