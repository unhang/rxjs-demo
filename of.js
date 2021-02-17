const { of } = require("rxjs");

of(1,2,3,3).subscribe(x => console.log(x))