'use strict';

const sidebtns = document.querySelectorAll('.nav-item');
const home = document.querySelector('.home');
const courses = document.querySelector('.courses');
const calendar = document.querySelector('.calendar');
const assignments = document.querySelector('.assignments');
const graded = document.querySelector('.graded');


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