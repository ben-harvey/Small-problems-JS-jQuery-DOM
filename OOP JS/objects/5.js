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

const makeSchool = function () {
  const students = [];
  const allowedYears = ['1st', '2nd', '3rd', '4th', '5th'];
  return {
    courses: [],
    currentID: 0,
    getCurrentStudent: function (id) {
      return students.filter(student => {
        return student.id === id;
      })[0];
    },
    addStudent: function (name, year, id) {
      if (!allowedYears.includes(year)) { console.log('Invalid Year') };
      const student = createStudent(name, year, this.currentID);
      this.currentID += 1;
      students.push(student);
    },
    enrollStudent: function (id, course) {
      const student = this.getCurrentStudent(id);
      if (!student) { return 'Invalid Student ID' };
      student.addCourse(course);
    },
    addGrade: function (id, code, grade) {
      const student = this.getCurrentStudent(id);
      if (!student) { return 'Invalid Student ID' };
      const course = student.getCurrentCourse(code);
      course.grade = grade;
    },
    getReportCard: function (id) {
      const student = this.getCurrentStudent(id);
      if (!student) { return 'Invalid Student ID' };
      student.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In Progress'}`);
      });
    },
    courseReport: function (courseName, code) {
      console.log(`=${courseName} Grades=`);
      const grades = [];

      students.forEach(student => {
        const course = student.getCurrentCourse(code);
        if (course && course.grade) {
          grades.push(course.grade);
          console.log(`${student.name}: ${course.grade}`);
        };
      });

        if (grades.length === 0) {
          console.log('No grades for this course');
          return;
        }

        console.log('---');
        const average = (grades.reduce((total, grade) => total + grade)) / grades.length;
        console.log(`Course Average: ${average}`);
    },
  };
};

const school = makeSchool();
school.addStudent('foo', '3rd'); //0
school.addStudent('bar', '1st'); //1
school.addStudent('qux', '2nd'); //2
school.enrollStudent(0, { name: 'Math', code: 101 });
school.enrollStudent(1, { name: 'Math', code: 101 });
school.enrollStudent(2, { name: 'Math', code: 101 });
school.enrollStudent(0, { name: 'Advanced Math', code: 102 });
school.enrollStudent(2, { name: 'Advanced Math', code: 102 });
school.enrollStudent(0, { name: 'Physics', code: 202 });
school.addGrade(0, 101, 95);
school.addGrade(0, 102, 90);
school.addGrade(1, 101, 91);
school.addGrade(2, 101, 93);
school.addGrade(2, 102, 90);
school.getReportCard(0);
school.courseReport('Math', 101)
school.courseReport('Advanced Math', 102)
school.courseReport('Physics', 202)