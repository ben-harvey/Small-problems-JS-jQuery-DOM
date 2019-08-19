const createStudent = function (name, year, id) {
  return {
    name: name,
    year: year,
    id: id,
    courses: [],
    info: function () {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    listCourses: function () {
      console.log(this.courses);
    },
    addCourse: function (course) {
      this.courses.push(course);
    },
    addNote: function (code, note) {
      const currentCourse = this.getCurrentCourse(code);
      if (currentCourse) {
        if (currentCourse.notes) {
          currentCourse.notes.push(note);
        } else {
          currentCourse.notes = [note];
        };
      }
    },
    viewNotes: function () {
      this.courses.forEach(course => {
        if(course.notes) {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        };
      });
    },
    updateNote: function (code, note) {
      const currentCourse = this.getCurrentCourse(code);
      if (currentCourse) {
        currentCourse.notes = [note];
      }
    },
    getCurrentCourse: function (code) {
      return this.courses.filter(course => {
        return course.code === code;
      })[0];
    }
  };
};
