"use strict";
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher() {
            if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
