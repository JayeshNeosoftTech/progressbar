/* Circular progressbar code start */
let circular_progress = document.querySelector('.circularprogress-bar');
let circular_progress_val =20;              //Percentage value write here
let progressbar_start_val= 0;
let speed= 80;

let circular_progressbar= setInterval(()=>{
    progressbar_start_val++;

    circular_progress.style.background= `conic-gradient(#FFA621 ${progressbar_start_val*3.6}deg, #ededed 0deg)`;

    if(progressbar_start_val == circular_progress_val){
        clearInterval(circular_progressbar);
    }
}, speed);
/* Circular progressbar code end */

/* Cohort percentile speedometer code start*/
let cohortpercentile_tick = document.querySelector('.cpmeter-tick');
let cohortpercentile_meter_val =50;              //Percentage value write here
let cpmeter_start_val= 1;
let speed_speedometer= 50;

let cp_meter= setInterval(()=>{
    cpmeter_start_val++;
    cohortpercentile_tick.style.transform= `rotate(${cpmeter_start_val}deg)`;
    cohortpercentile_tick.style.transformOrigin= 'right center';
    if(cpmeter_start_val == cohortpercentile_meter_val){
        clearInterval(cp_meter);
        console.log('interval clear');
    }
}, speed_speedometer);
/* Cohort percentile speedometer code end */