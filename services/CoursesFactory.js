courseRoster.factory('CoursesFactory', function CoursesFactory() {
    var factory = {};
    factory.courses = [];

    //push input info into courses
    factory.addCourse = function() {
        var course = { name: factory.courseName, id:factory.courses.length + 1, students:[] };
        //factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
        factory.courses.push(course);
        factory.courseName = null;
    };



    return factory;

});
