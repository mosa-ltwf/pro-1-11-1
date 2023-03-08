function loogo() {

    "use strict"

    var zsz = document.getElementById("inpat-1").value,

        result = zsz,

        message = document.getElementById("te-1"),

        message1 = document.getElementById("message-1");

    message.innerHTML = result;

    if (message.innerHTML === "") {
        
        alert("الرجاء تعبيئة الحقل"),
        
        message.innerHTML = ("_");

    } else {



        switch (zsz) {

            case "7171":

                message.innerHTML = ("50850-301-50100630-508220-230-50807030-282"),

                message1.innerHTML = ("-");

                break;  

            // case "2000":

            //     message.innerHTML = ("50850-301-50100630-508220-230-50807030-282"),

            //     message1.innerHTML = ("-");

            //     break;  

            case "0023":

                message.innerHTML = ("50850-301-50100630-508220-230-50807030-282"),

                message1.innerHTML = ("-");

                break;  

            case "2023":

                message.innerHTML = ("50850-301-50100630-508220-230-50807030-282"),

                message1.innerHTML = ("-");

                break;  

            case "1923":

                message.innerHTML = ("50850-301-50100630-508220-230-50807030-282"),

                message1.innerHTML = ("-");

                break;  


            default:

                message.innerHTML = ("( ͡~ ͜ʖ ͡°) !!خطأ في ادخال الرمز ");

                break;

        }
    }
}