//All Sections
const dashBoard = document.querySelectorAll('.dash');
//Courses
const dashCourse = document.querySelector('#dashCourse');
const dashCourseBtn = document.querySelector('#dashCourseBtn')
//My Students
const dashMyStudents = document.querySelector('#dashMyStudents');
const dashMyStudentsBtn = document.querySelector('#dashMyStudentsBtn');
//Media
const dashMedia = document.querySelector('#dashMedia');
const dashMediaBtn = document.querySelector('#dashMediaBtn');
//Assignment
const dashAssignment = document.querySelector('#dashAssignment');
const dashAssignmentBtn = document.querySelector('#dashAssignmentBtn');
//Evaluation
const dashEvaluation = document.querySelector('#dashEvaluation');
const dashEvaluationBtn = document.querySelector('#dashEvaluationBtn');
//Schedule
const dashSchedule = document.querySelector('#dashSchedule');
const dashScheduleBtn = document.querySelector('#dashScheduleBtn');
//Inbox
const dashInbox = document.querySelector('#dashInbox');
const dashInboxBtn = document.querySelector('#dashInboxBtn');
//Profile
const dashProfile = document.querySelector('#dashProfile');
const dashProfileBtn = document.querySelector('#dashProfileBtn');
//Settings
const dashSettings = document.querySelector('#dashSettings');
const dashSettingsBtn = document.querySelector('#dashSettingsBtn');

const hide = () => {
    dashBoard.forEach(element => {
    element.style.display = 'none';
    });
};

const displayCourse = () => {
    hide();
    dashCourse.style.display = '';
};

const displayMyStudents = () => {
    hide();
    dashMyStudents.style.display = '';
};

const displayMedia = () => {
    hide();
    dashMedia.style.display = '';
};

const displayAssignment = () => {
    hide();
    dashAssignment.style.display = '';
};

const displayEvaluation = () => {
    hide();
    dashEvaluation.style.display = '';
};

const displaySchedule = () => {
    hide();
    dashSchedule.style.display = '';
};

const displayInbox = () => {
    hide();
    dashInbox.style.display = '';
};

const displayProfile = () => {
    hide();
    dashProfile.style.display = '';
};

const displaySettings = () => {
    hide();
    dashSettings.style.display = '';
};


dashCourseBtn.addEventListener('click', displayCourse);
dashMyStudentsBtn.addEventListener('click', displayMyStudents);
dashMediaBtn.addEventListener('click', displayMedia);
dashAssignmentBtn.addEventListener('click', displayAssignment);
dashEvaluationBtn.addEventListener('click', displayEvaluation);
dashScheduleBtn.addEventListener('click', displaySchedule);
dashInboxBtn.addEventListener('click', displayInbox);
dashProfileBtn.addEventListener('click', displayProfile);
dashSettingsBtn.addEventListener('click', displaySettings);