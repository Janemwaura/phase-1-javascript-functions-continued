// code your solution here
function saturdayFun(activity = "roller skating"){
    console.log(`This Saturday I want to go for ${activity}.`);
     console.log(`This Saturday I want to go for ${activity}.`);
}

saturdayFun();
console.log(saturdayFun("bathing my dog"));
(function (){ console.log("Yet more razzling")

}
);

const fn = function mondayWork (agenda = "go to the office") {
    console.log(`This Monday I will ${agenda}.`);
}
fn();

function outer(message = "You are"){
return function(feeling = "*"){
return`${message},${feeling}`;
};
}
console.log(outer()("*"));
