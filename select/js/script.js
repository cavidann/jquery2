var a = true;
var b=true;
var c=true;
$(document).ready(function () {
    $('#first').change(function () {
        console.log("!!")
        if (a) {
            $('#second').removeAttr("disabled");
            a = false;
        } else {
             $('#third').attr("disabled","disabled");
              $('#fourth').attr("disabled","disabled");
            $('#second').prop('selectedIndex', 0);
            $('#third').prop('selectedIndex', 0);
            $('#fourth').prop('selectedIndex', 0);
            b=true;
        }
    });
});





$(document).ready(function () {
    $('#second').change(function () {
   if (b) {
            $('#third').removeAttr("disabled");
            b = false;
        } else {
              $('#fourth').attr("disabled","disabled");
        
            $('#third').prop('selectedIndex', 0);
            $('#fourth').prop('selectedIndex', 0);
            c=true
        }
    });
});







$(document).ready(function () {
    $('#third').change(function () {
        if (c) {
            $('#fourth').removeAttr("disabled");
            c = false;
        } else {
              $('#fourth').attr("disabled","disabled");

            $('#fourth').prop('selectedIndex', 0);
            
        }
    });
});