function myFunction() {

//    var elements = ["rt", "b1", "b2", "b3", "b5", "b6"];
//
//    for (var i = 0; i < elements.length; i++) {
//        document.getElementById(elements[i]).innerHTML = '0';
//    }

    var values = document.getElementsByName('txt')[0].value.split(',');
    var count = 0;
    for (var a = 0; a < values.length; a++) {
        //document.writeln(values[a]);
        count++;
    }


    if (count <= 2) {
        document.getElementById("tx").style.borderColor = "red";
        document.getElementsByName('txt')[0].value = '';
        document.getElementsByName('txt')[0].placeholder = 'Enter more values';
        
    } else if (count === 6) {
        var toggle = ["b1", "b2", "b3", "b5", "b6", "l1", "l2", "l3", "l4", "l5", "l_s1", "l_s2", "l_s3", "l_s4"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "visible";
        }

        document.getElementById("rt").innerHTML = values[0];
        document.getElementById("b1").innerHTML = values[2];
        document.getElementById("b2").innerHTML = values[1];
        document.getElementById("b3").innerHTML = values[3];
        document.getElementById("b5").innerHTML = values[4];
        document.getElementById("b6").innerHTML = values[5];
        
    } else if (count === 5) {

        document.getElementById("b3").style.visibility = "hidden";
        document.getElementById("l5").style.visibility = "hidden";

        var toggle = ["b1", "b2", "b5", "b6", "l1", "l2", "l3", "l4", "l_s1", "l_s2", "l_s3", "l_s4"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "visible";
        }

        document.getElementById("rt").innerHTML = values[0];
        document.getElementById("b1").innerHTML = values[2];
        document.getElementById("b2").innerHTML = values[1];
        document.getElementById("b5").innerHTML = values[3];
        document.getElementById("b6").innerHTML = values[4];
        
    } else if (count === 4) {
        var toggle = ["b2", "b6", "l3", "l4", "l_s3", "l_s4"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "hidden";
        }

        var toggle = ["b1", "b3", "b5", "l1", "l2", "l5", "l_s1", "l_s2"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "visible";
        }

        document.getElementById("rt").innerHTML = values[0];
        document.getElementById("b1").innerHTML = values[1];
        document.getElementById("b3").innerHTML = values[2];
        document.getElementById("b5").innerHTML = values[3];
        
    } else if (count === 3) {
        var toggle = ["b1", "b3", "b5", "l1", "l2", "l5", "l_s1", "l_s2"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "hidden";
        }

        var toggle = ["b2", "b6", "l3", "l4", "l_s3", "l_s4"],
                l = toggle.length, i;
        for (i = 0; i < l; i++) {
            document.getElementById(toggle[i]).style.visibility = "visible";
        }

        document.getElementById("rt").innerHTML = values[0];
        document.getElementById("b2").innerHTML = values[1];
        document.getElementById("b6").innerHTML = values[2];
    }
}


