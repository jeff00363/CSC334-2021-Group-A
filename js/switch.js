'use strict';

const sidebtns = document.querySelectorAll('.nav-item');
const home = document.querySelector('.home');
const courses = document.querySelector('.courses');
const calendar = document.querySelector('.calendar');
const assignments = document.querySelector('.assignments');
const grades = document.querySelector('.grades');
const course_p = document.querySelectorAll('div.course-panel');
const course_pa = document.querySelectorAll('div.course-panel-active');
const grps = document.getElementsByClassName('group');
const hw_dd = document.getElementsByName('currentassignments');

// add event listeners to side buttons
for (let i=0;i<sidebtns.length;i++){
    sidebtns[i].addEventListener('click', function(){
        /**
         * 
         *  This is a function for side navigation.
         */


        // active logo and active div for page content
        let active_l = document.querySelector('.active');
        let active_d = document.querySelector('div.'+active_l.parentElement.id);

        // this is for events on the window
        let e = window.event;

        // grab the parent id of the element so we can load the correct data
        let e_name = e.target.parentElement.id;

        // query DOM for page content
        let tgt = document.querySelector(String('.'+e_name));

        // error handling on erroneous clicks
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

// add event listeners to active panels
for (let i=0;i<course_pa.length;i++){
    course_pa[i].addEventListener('click', cp_switch);
}

// add event listeners to panels
for (let i=0;i<course_p.length;i++){
    course_p[i].addEventListener('click', cp_switch);
}

// switch our course panels
function cp_switch() {
    /**
     * 
     * 
     * This function appends or removes the active class from 
     * the DOM elements.
     * 
     */

    // grab active panel
    let active_p = document.querySelector('.course-panel-active');

    // select all of our content tables (grades content)
    let cntnt_active = document.querySelectorAll('#cntnt');

    // loop through panels, clear active class
    for (let i=0;i<cntnt_active.length;i++){
        // hides elements
        cntnt_active[i].style.display = 'none';
        // remove shown class
        cntnt_active[i].className = cntnt_active[i].className.replace('shown', '');
    }

    active_p.className = 'course-panel';
    let e = window.event;
    // parent element of clicked course panel
    e.currentTarget.className = 'course-panel-active';
    // get elements id of content
    let x = document.getElementsByClassName(e.currentTarget.id);
    // reveal the content
    x[0].style.display = 'flex';
    x[0].className = x[0].className + ' shown';
}

// event listeners for drop down menu
for (let i=0;i<hw_dd.length;i++) {
    hw_dd[i].addEventListener('click', hideSeek);
}

/**
 * 
 * 
 * This function shows or hides embeded documents for assingments page.
 * 
 */
function hideSeek (){
    // hide embedded documents
    for (let i=0;i<grps.length;i++){
        grps[i].style.display = 'none';
    }
    // get element from selected drop down item
    let x = document.getElementById('current').value;
    let y = document.getElementById(x);

    // feedback for submission
    let z = document.getElementById('confirm');
    z.innerHTML = '';
    y.style.display = 'flex';
}

// add event listener on button
document.getElementById('sbtn').addEventListener('click', submitted);

/**
 * 
 * This displays Submitted after submit is pressed.
 * 
 */
function submitted (){
    let y = document.getElementById('confirm');
    y.innerHTML = 'Submitted';
}

