'use strict';

const sidebtns = document.querySelectorAll('.nav-item');
const home = document.querySelector('.home');
const courses = document.querySelector('.courses');
const calendar = document.querySelector('.calendar');
const assignments = document.querySelector('.assignments');
const grades = document.querySelector('.grades');
const course_p = document.querySelectorAll('div.course-panel');
const course_pa = document.querySelectorAll('div.course-panel-active');

// add event listeners to side buttons
for (let i=0;i<sidebtns.length;i++){
    sidebtns[i].addEventListener('click', function(){
        let active_l = document.querySelector('.active');
        let active_d = document.querySelector('div.'+active_l.parentElement.id);
        // this is for events on the window
        let e = window.event;
        // grab the parent id of the element so we can load the correct data
        let e_name = e.target.parentElement.id;
        let tgt = document.querySelector(String('.'+e_name));
        if (tgt == '.') {}
        else {
            // previous class inactive
            // make logo inactive/active
            active_l.className = active_l.className.replace('active', '');
            e.target.className = e.target.className + ' active';
            // make content inactive/active
            active_d.className = active_d.className.replace('active', '');
            tgt.className = tgt.className + ' active';
        };
        }
    )
}

for (let i=0;i<course_pa.length;i++){
    console.log(course_pa[i]);
    course_pa[i].addEventListener('click', cp_switch);
}

for (let i=0;i<course_p.length;i++){
    console.log(course_p[i]);
    course_p[i].addEventListener('click', cp_switch);
}

function cp_switch() {
    let active_p = document.querySelector('.course-panel-active');
    active_p.className = 'course-panel';
    let e = window.event;
    e.target.className = 'course-panel-active';
    // console.log(course_pa);
    // console.log(course_p);
}
