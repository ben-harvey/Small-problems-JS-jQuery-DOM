let bookingData;
let bookingDetails;

document.addEventListener('DOMContentLoaded', function() {
  const countSchedulesButton = document.querySelector('#count-schedules');
  const addStaffButton = document.querySelector('#add-staff');
  const submitSchedulesButton = document.querySelector('#schedule-staff')
  const addScheduleButton = document.querySelector('#add-schedule');
  const bookScheduleButton = document.querySelector('#book-schedule');
  const addStudentButton = document.querySelector('#add-student');

  const staffCountUl = document.querySelector('#count-ui');
  const bookingsUl = document.querySelector('#bookings-container');

  const addStaffForm = document.querySelector('#staff-form');
  const bookingForm = document.querySelector('#booking-form');
  const addStudentForm = document.querySelector('#add-student-form');


  const staffSelect = document.querySelector('#staff-select');
  const scheduleSelect = document.querySelector('#schedule-select');

  const clearChildren = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    };
  };

  const clearAddStaff = () => {
    addStaffForm.email.value = '';
    addStaffForm.name.value = '';
  };

  const clearBookingForm = () => {
    bookingForm.student_email.value = ''
  };

  const clearScheduleForm = (form) => {
    [...form.elements].slice(1).forEach(element => element.value = '');
  };

  const extractBookingSequence = (response) => {
        return response.split(' ').slice(-1);
  };

  const createStaffOptions = () => {
    clearChildren(staffSelect);

    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/staff_members');
    request.responseType = 'json';
    request.send();

    request.addEventListener('load', function(event) {
      staffMembers = request.response;

      staffMembers.forEach(member => {
        const newOption = document.createElement('option');
        newOption.setAttribute('value', String(member.id));
        newOption.textContent = member.name;
        staffSelect.appendChild(newOption);
      });

    });
  };

  const matchNameToId = (staffMembers, staffId) => {
    return staffMembers.filter(staffMember => staffMember.id === staffId)[0].name
  }

  const createScheduleOptions = () => {
    clearChildren(scheduleSelect);

    (function () {
      const request = new XMLHttpRequest();

      request.open('GET', 'http://localhost:3000/api/schedules');
      request.responseType = 'json';
      request.send();

      request.addEventListener('load', function(event) {
        const schedules = request.response;

          (function() {
            const request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/api/staff_members');
            request.responseType = 'json';
            request.send();
            request.addEventListener('load', function(event) {
              staffMembers = request.response;  // assigns staffMembers
              const openSchedules = schedules.filter(schedule => schedule.student_email === null);

              if (openSchedules.length === 0){
                const disabledOption = document.createElement('option');
                disabledOption.disabled = true;
                disabledOption.selected = true;
                disabledOption.textContent = 'There are no schedules available to book'
                scheduleSelect.appendChild(disabledOption);
              };

              openSchedules.forEach(schedule => {
                const newOption = document.createElement('option');
                newOption.setAttribute('value', String(schedule.id));
                const staffName = matchNameToId(staffMembers, schedule.staff_id);
                newOption.textContent = `${staffName} | ${schedule.date} | ${schedule.time}`
                scheduleSelect.appendChild(newOption);
              });
            });
          })();

      });
    })();

  };

  const createScheduleForm = () => {
    const scheduleForms = document.querySelectorAll('.schedule-form');
    const previousForm = scheduleForms[scheduleForms.length - 1];
    const newForm = previousForm.cloneNode(true);
    let scheduleNumber = +previousForm.querySelector('h4')
      .textContent
      .split(' ')
      .slice(-1)[0];

    scheduleNumber += 1;
    newForm.querySelector('h4').textContent = `Schedule ${scheduleNumber}`;
    clearScheduleForm(newForm);

    previousForm.insertAdjacentElement('afterend', newForm);
  };

  const toggleStudentForm = () => {
    const addStudentElements = [...document.querySelectorAll('.add-student')]
    addStudentElements.forEach(element => element.classList.toggle('hide-student-form'));
  }

  const displaySchedules = (schedules) => {
    schedules.forEach(schedule => {
      const newLi = document.createElement('li');
      newLi.textContent = schedule;
      staffCountUl.appendChild(newLi);
    });
  };

  const formatSchedules = (schedules) => {
    const staffIds = schedules.map(schedule => schedule.staff_id);
    const uniqueStaffIds = staffIds.filter((staffId, index) => staffIds.indexOf(staffId) === index);

    if (schedules.length === 0) {
      return ['No schedules are currently available for booking.']
    };

    const countIds = function(id) {
      return staffIds.filter(currentId => currentId === id).length;
    };

    return uniqueStaffIds.map(id => `staff ${id}: ${countIds(id)}`);
  };

  const displayBookings = () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/api/bookings');
    request.responseType = 'json';
    request.send();

    request.addEventListener('load', function (event) {
      const bookings = request.response;

      if (bookings.length === 0) {
        const newLi = document.createElement('li');
        newLi.textContent = 'There are no current bookings to display'
        bookingsUl.appendChild(newLi);
      };

      bookings.forEach((booking, index) => {
        const newLi = document.createElement('li');
        newLi.textContent = booking;
        newLi.setAttribute('id', `booking-${index}`);
        bookingsUl.appendChild(newLi);
      });
    })
  };

  const renderBookingDetails = (e) => {
    let response = null;

    const target = e.target;
    const parent = target.parentElement;
    const otherParent = target.parentElement;
    const date = target.textContent;

    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:3000/api/bookings/${date}`)

    request.addEventListener('load', function(event) {
      debugger;
      if (event.status === 200) {
        response = JSON.parse(event.response);
        const newUl = document.createElement('UL');
        response.forEach(item => {
          const newLi = document.createElement('LI');
          newLi.textContent = `${response[0]} ${response[1]} ${response[2]}`
          newUl.appendChild(newLi);
        });
        parent.appendChild(newUl);
      }
    });

    request.send();
  };

  //  Listeners -------------------

  bookingsUl.addEventListener('click', function(event){
    if(event.target.tagName === 'LI') {
      renderBookingDetails(event);
    };
  })



  addStaffButton.addEventListener('click', function(event) {
    event.preventDefault();


    const data = new FormData(addStaffForm);
    const jsonData = {};

    for (let [key, value] of data) {
      jsonData[key] = value;
    };

    const request = new XMLHttpRequest();

    request.open('POST', 'http://localhost:3000/api/staff_members');

    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(jsonData));

    request.addEventListener('load', function(event) {
      switch (request.status) {
        case 201:
          const response = JSON.parse(request.response);
          alert(`Successfully created staff with id: ${response.id}`)
          clearAddStaff();
          createStaffOptions();
          break;
        case 400:
          alert(request.responseText);
          break;
      }

    });
  });

  countSchedulesButton.addEventListener('click', function(event) {
    clearChildren(staffCountUl);

    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/schedules');

    request.timeout = 5000;
    request.responseType = 'json';
    request.send();

    request.addEventListener('timeout', function(event) {
      alert('Request unsuccessful!  Please try again with fewer schedules');
    });

    request.addEventListener('load', function(event) {
      alert('Successful request!');

      const response = request.response;
      const formattedSchedules = formatSchedules(response);
      displaySchedules(formattedSchedules);
    });

  });

  submitSchedulesButton.addEventListener('click', function(event) {
    event.preventDefault();

    const scheduleForms = document.querySelectorAll('.schedule-form');
    const allSchedulesData = {
      schedules: [],
    };

    [...scheduleForms].forEach(scheduleForm => {
      const scheduleData = {};

      [...scheduleForm.elements].forEach(element => {
        scheduleData[element.name] = element.value
      });

      scheduleData.staff_id = +scheduleData.staff_id;

      allSchedulesData.schedules.push(scheduleData);
    });

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/schedules');
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(allSchedulesData));

    request.addEventListener('load', function(event) {
      alert(request.responseText);
      if (request.status === 201) { createScheduleOptions() };
    });
  });

  addScheduleButton.addEventListener('click', function(event) {
    event.preventDefault()
    createScheduleForm();
  });


  bookScheduleButton.addEventListener('click', function(event) {
    event.preventDefault();

    bookingData = {};

    [...bookingForm.elements].forEach(element => bookingData[element.name] = element.value);
    bookingData.id = +bookingData.id;

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/bookings');
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(bookingData));

    request.addEventListener('load', function(event) {
      if (request.status === 204) {
        alert('Booking successful');
        clearBookingForm();
        createScheduleOptions();
        return;
      };

      const response = request.responseText;

      alert(response);
      const bookingSequence = extractBookingSequence(response);
      toggleStudentForm();

      addStudentForm.email.value = bookingData.student_email;
      addStudentForm.booking_sequence.value = bookingSequence
    });
  });

  addStudentButton.addEventListener('click', function(event) {
    event.preventDefault();

    const addStudentData = {};

    [...addStudentForm.elements].forEach(element => addStudentData[element.name] = element.value);
    addStudentData.booking_sequence = +addStudentData.booking_sequence

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/students');
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(addStudentData));

    request.addEventListener('load', function (event) {
      alert(request.response);
      if (request.response === 201) {
        bookScheduleButton.dispatchEvent(new Event('click'));
        toggleStudentForm();
      }
    });
  });

  createStaffOptions();
  createScheduleOptions();
  displayBookings();
});