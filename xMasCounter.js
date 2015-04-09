/****
Script by Jari Aarniala (foo@mbnet.fi)

This script counts how many days are left to christmas 
(or to any other date). This is one of the first scripts
i`ve ever written and it`s really simple. 

You may use this script freely if all credit is given to me...

*******/

var figureDate() {

            var today = new Date() 			
            var xmas = new Date("December 25, 2014")	// To use this script for counting days and
                                // hours to some other date than christmas 
                    //  ^^^^^^^--------------> remove the date "Dec. 25" and put your
                                // own date there
            xmas.setYear = today.getYear;		
            var daysLeft = (xmas.getTime() - today.getTime()) / (1000*60*60*24);
            //daysLeft = Math.round(daysLeft);
            document.getElementById('daysSpot').innerHTML = daysLeft;
    
}

