
function loogo() {

    "use strict"

    var zsz_1 = document.getElementById("inpat-1").value,
        zsz_2 = document.getElementById("inpat-2").value,
        zsz_3 = document.getElementById("inpat-3").value,

        result_1 = zsz_1,
        result_2 = zsz_2,
        result_3 = zsz_3,

        message_1 = document.getElementById("te-1"),
        message_2 = document.getElementById("te-2"),
        message_3 = document.getElementById("te-3");

        // message1 = document.getElementById("message-1");

        message_1.innerHTML = result_1,
        message_2.innerHTML = result_2,
        message_3.innerHTML = result_3;

    if (message_1.innerHTML === "") {
        alert(" الرجاء تعبئة جميع الحقول "),
        
        message_1.innerHTML = ("-_-");

    }else if (message_2.innerHTML === ""){
        alert(" الرجاء تعبئة جميع الحقول "),
        
        message_2.innerHTML = ("-_-");

    }else if (message_3.innerHTML === ""){
        alert(" الرجاء تعبئة جميع الحقول "),
        
        message_3.innerHTML = ("-_-");
    }
    else {



        switch (zsz_1) {

            case "1":
                message_1.innerHTML = ("لو سَألت قلبي عنك لرأيتهُ عاشقاً يهَواك . .");

                break;

            case "2":
                message_1.innerHTML = ("‏الغيرَة عليكِ أمرٌ خارج إرادَتي.");

                break;

            case "3":
                message_1.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "4":
                message_1.innerHTML = ("كم هي جميلة ودافئة تلك اللحظة التي تكتشف فيها أنك أنت المقصود بنص كُتب بطريقةٍ مبهرة، وأنك الشخص الوحيد الذي يستطيع إدراك ذلك.");

                break;

            case "5":
                message_1.innerHTML = ("بالنيابة عن أنّك شَمسي المُذهلة، أنا أحبّك جداً !");

                break;

            case "6":
                message_1.innerHTML = ("اريد أن آكون دائِما الفكره الاولى التي تطرأ عَليك.");

                break;

            case "7":
                message_1.innerHTML = ("أحبك باستمرار ولكن بخوف مستمر أيضاً.");

                break;

            case "8":
                message_1.innerHTML = ("العيُون لا تفضحُ الأنسان بقدر ما تَشرحهُ .");

                break;

            case "9":
                message_1.innerHTML = ("وقلبًا صادقًا يُرافقك، فتأمن.");

                break;

            case "10":
                message_1.innerHTML = ("‏تخيل أن تلتقي بأحداً يُشبهك ، فيحبك و تكملا الطريق سوياً.");

                break;

            case "11":
                message_1.innerHTML = ("كل الذكريات القديمة ستتبخر بمجرد أن تُقابل شخص حقيقي، مناسب لك، صادق.");

                break;

            case "12":
                message_1.innerHTML = ("الأشياء التي نُخفيها ، تُغيرنا .");

                break;

            case "13":
                message_1.innerHTML = ("لا احب التمثيل انني بالكاد امثل نفسي .");

                break;

            case "14":
                message_1.innerHTML = ("ظلّ صامتاً مدة طويلة، كأنه يتعافى من شيءٍ ما");

                break;

            case "15":
                message_1.innerHTML = ("الآلام أيضاً تمضي، مُخلِّفة وراءها آثاراً لا تُمحى.");

                break;

            case "16":
                message_1.innerHTML = ("رُبما لم يكن شيئًا مهمًا بالنسبةِ لك، لكنهُ كان قلبي.");

                break;

            case "17":
                message_1.innerHTML = ("‏تريد الحياة أن تمنحك درسًا فتختار شخصًا.");

                break;

            case "18":
                message_1.innerHTML = ("المُحب لا يؤذي قلبًا أحبه، مهما كانت الضغوطات.");

                break;

            case "19":
                message_1.innerHTML = ("الإستثناء دليل المحبة، استثنوا من تحبّون.");

                break;

            case "20":
                message_1.innerHTML = ("‏قُل للذي أذاك إِن الله لا ينسى .");

                break;

            case "21":
                message_1.innerHTML = ("بعيداً عن العاطفة أحياناً تستحق ما يحدث لك ، كي تغيّر تفكيرك وتفيق من غبائك قليلاً.");

                break;

            case "22":
                message_1.innerHTML = ("عليك أن تدرك تماماً أن عالمَك ، وظرُوفك ، وعقلك ، وأفكَارك ، وشخصيتك مُختلفة تماماً عن غيرك ، لذلك لا تُقارن نفسَك بأحد.");

                break;

            case "23":
                message_1.innerHTML = ("حافظ على روحك،لا أحد يستحقها.");

                break;

            case "24":
                message_1.innerHTML = ("‏أعز مَكاسب وجودكَ على هذّه الأرض، هو قلباً صادقاً يُرافقك فتأمن.");

                break;

            case "25":
                message_1.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "26":
                message_1.innerHTML = ("إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "27":
                message_1.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "28":
                message_1.innerHTML = ("الغريب في الأمر أنّك مازلت تنتظر ، رغم كل هذه الخيبات.");

                break;

            case "29":
                message_1.innerHTML = ("أنتَ أجملهُم في قلبي قبَل عينِي.");

                break;

            case "30":
                message_1.innerHTML = ("لا رغبات أخرى وجودكِ أكثر من كافٍ.");

                break;

            case "31":
                message_1.innerHTML = ("‏وفيكَ اشكر رب البشَر ثُم حظي و القَدر.");

                break;

            case "32":
                message_1.innerHTML = ("ماذا لو كانت النُّجوم خرائط هُروب من هذا العالم؟");

                break;

            case "33":
                message_1.innerHTML = ("كالذي ينتظر ردًا على رساله لم يُرسلها.");

                break;

            case "34":
                message_1.innerHTML = ("-‏لا تخجل من أخطاءك ، تعلّم منها .");

                break;

            case "35":
                message_1.innerHTML = ("يلزمُنا قلبًا أكبر ليتسع لكل هذا الأسى.");

                break;

            case "36":
                message_1.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "37":
                message_1.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "38":
                message_1.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "39":
                message_1.innerHTML = ("‏سَهيتْ بنظِرة عيونكْ واثّاري هالعيونُ بّلاد.");

                break;

            case "40":
                message_1.innerHTML = ("أنتِْ‌ شُعوري ‌الثابتَ ‌مهمَا مرني ‌أشخاص.");

                break;

            case "41":
                message_1.innerHTML = ("لااستِطيع‌‌‎تجاهلكِ‌‌‎فإذاتجاهلتُكِ‌‌‎انااتجاهل‌‌‎قلبْي.");

                break;

            case "42":
                message_1.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "43":
                message_1.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "44":
                message_1.innerHTML = ("ثابت كُل الثبوت في قَلبي و بالي . .");

                break;

            case "45":
                message_1.innerHTML = ("جابك الله ليّ على شكل جبر خاطر لقلبْي . .");

                break;

            case "46":
                message_1.innerHTML = ("حٌبك رضى وانا على حبك ، رضَيت . .");

                break;

            case "47":
                message_1.innerHTML = ("أنا ظلك وضيِك وأنا اللي مغرم فيك . .");

                break;

            case "48":
                message_1.innerHTML = ("‏وإني أحبُّ بك ، كل ما بك . .");

                break;

            case "49":
                message_1.innerHTML = ("أكرمني الله بـ شخص يصبّ الضحكات على قلبي. .");

                break;

            case "50":
                message_1.innerHTML = ("وفي النهاية يوجد شخص يراك مبهر جداً وبدون أدنى مجهود منَك.");

                break;

            case "51":
                message_1.innerHTML = ("ظننت يوماً أننا سنبقى دوماً.");

                break;

            case "52":
                message_1.innerHTML = ("Hold on to those who want you well. تمسك بمن أراد لك الخير.");

                break;

            case "53":
                message_1.innerHTML = ("صباح الخير كُن سعيدًا و راضٍ بتفاصيلك البَسيطة و الجميلة دون أن يفعَل لك أحدٌ شيء.");

                break;

            case "54":
                message_1.innerHTML = ("سيرني حنيني إليك.");

                break;

            case "55":
                message_1.innerHTML = ("لَعلَ الارضَ تنطويْ لأحظىَ بلقياكْ.");

                break;

            case "56":
                message_1.innerHTML = ("لو تحبك الدنيا بأهلها مايحبّك احد كثري.");

                break;

            case "57":
                message_1.innerHTML = ("و أنت وحدك بهالدنيا حبيبي.💛");

                break;

            case "58":
                message_1.innerHTML = ("كل ضحكة منك تهديني حياة.");

                break;

            case "59":
                message_1.innerHTML = ("أجمل حظوظ قلبي أنك سكنته.");

                break;

            case "60":
                message_1.innerHTML = ("اشوف صورتك وترد الروح فيني، وشلون روحي لو تشوفك حقيقة.");

                break;

            case "61":
                message_1.innerHTML = ("الكل يتمنى ان يحقق اهدافه لاكن الواقع بارع في حراسة المرمى.");

                break;

            case "62":
                message_1.innerHTML = ("في موطني كل شيى له ثمن إلا البكاء.");

                break;

            case "63":
                message_1.innerHTML = ("عندما تكون على حق لا احد يتذكرك وعندما تكون خطأ لا احد ينساك.");

                break;

            case "64":
                message_1.innerHTML = ("وااسجد واقترب مسافات الحزن و الألم تطويها شجدة");

                break;

            case "65":
                message_1.innerHTML = ("90% منكم منافقين المشكلة انو المنافقين بفكرو حالهم من 10% المناح");

                break;

            case "66":
                message_1.innerHTML = ("ستنسى وكأنك لم تكن");

                break;

            case "67":
                message_1.innerHTML = ("ماذا لو كان القلب الذي تكسره يحبه الله ؟");

                break;

            case "68":
                message_1.innerHTML = ("من اراد الرحيل فل ينقلع");

                break;

            case "69":
                message_1.innerHTML = ("حظ اوفر مجلد فارغ");

                break;

            case "70":
                message_1.innerHTML = ("سلام الله على عينيك");

                break;

            case "71":
                message_1.innerHTML = ("لكل قلب تألم, سلام على من رب السلام");

                break;

            case "72":
                message_1.innerHTML = ("لا تتجاهلو اخطائي عادي ازعلو !!");

                break;

            case "73":
                message_1.innerHTML = ("مادام الشاحن الاصلي بخير فليحترق الجميع");

                break;

            case "74":
                message_1.innerHTML = ("ولعل ما تريده في طريقه أليك...");

                break;

            case "75":
                message_1.innerHTML = ("لا حيات دون صلات");

                break;

            case "76":
                message_1.innerHTML = ("رغم تجاهلك المستمر لنداء الصلاة وهجرك للقرأن ماذال الله رحيم بك حتى الان !");

                break;

            case "77":
                message_1.innerHTML = ("افترقنا وانقطع حتا السلام");

                break;

            case "78":
                message_1.innerHTML = ("سأنتظرك حتى تمل ّ ّ ّ");

                break;

            case "79":
                message_1.innerHTML = ("كم اشتقتو إليك وهل تدري ؟");

                break;

            case "80":
                message_1.innerHTML = ("وبعدك الحياة فارغتااا ليتك تعلم");

                break;

            case "81":
                message_1.innerHTML = ("وانت/ي كالماء في الجسد ان انقطعت انقطعت الحياة");

                break;

            case "82":
                message_1.innerHTML = ("وهل انت بخير الان؟");

                break;

            case "83":
                message_1.innerHTML = ("وكم مضى من ابتعادي عنك");

                break;

            case "84":
                message_1.innerHTML = ("وهل انت بخير من بعدي المسافات");

                break;

            case "85":
                message_1.innerHTML = ("هل انا سعيد ام مكتئب ام حزين ام.. ام.. وما هو وضعي الحالي هل انا بخير ");

                break;

            case "86":
                message_1.innerHTML = ("وها نحن نادينا وننتظر ");

                break;

            case "87":
                message_1.innerHTML = ("واصتصعب ان ابتعد");

                break;

            case "88":
                message_1.innerHTML = ("تذكر اجمل ايامي معك ");

                break;

            case "89":
                message_1.innerHTML = ("وانجرح لاكني ابقى صامتا");

                break;

            case "90":
                message_1.innerHTML = ("انتي كقمر كل يوم بوجه جديد");

                break;

            case "91":
                message_1.innerHTML = ("اقم صلاتك قبل مماتك");

                break;

            case "92":
                message_1.innerHTML = ("كيف نخبر البحر اننا نغرق على اليابسة");

                break;

            case "93":
                message_1.innerHTML = ("وكم بعد يا قلب تريد ان تهوى ");

                break;

            case "94":
                message_1.innerHTML = ("ولم نكفي الم بعد اننا في بداية الطريق");

                break;

            case "95":
                message_1.innerHTML = ("وستصبح حياتا ذكرى");

                break;

            case "96":
                message_1.innerHTML = ("");

                break;

            case "97":
                message_1.innerHTML = ("");

                break;

            case "98":
                message_1.innerHTML = ("");

                break;

            case "99":
                message_1.innerHTML = ("");

                break;

            case "100":
                message_1.innerHTML = ("");

                break;

            case "":
                message_1.innerHTML = ("");

                break;



            default:

                message_1.innerHTML = ("لا يوجد مقولة بهذا الرقم!!");

                break;

        }



        switch (zsz_2) {

            case "1":
                message_2.innerHTML = ("لو سَألت قلبي عنك لرأيتهُ عاشقاً يهَواك . .");

                break;

            case "2":
                message_2.innerHTML = ("‏الغيرَة عليكِ أمرٌ خارج إرادَتي.");

                break;

            case "3":
                message_2.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "4":
                message_2.innerHTML = ("كم هي جميلة ودافئة تلك اللحظة التي تكتشف فيها أنك أنت المقصود بنص كُتب بطريقةٍ مبهرة، وأنك الشخص الوحيد الذي يستطيع إدراك ذلك.");

                break;

            case "5":
                message_2.innerHTML = ("بالنيابة عن أنّك شَمسي المُذهلة، أنا أحبّك جداً !");

                break;

            case "6":
                message_2.innerHTML = ("اريد أن آكون دائِما الفكره الاولى التي تطرأ عَليك.");

                break;

            case "7":
                message_2.innerHTML = ("أحبك باستمرار ولكن بخوف مستمر أيضاً.");

                break;

            case "8":
                message_2.innerHTML = ("العيُون لا تفضحُ الأنسان بقدر ما تَشرحهُ .");

                break;

            case "9":
                message_2.innerHTML = ("وقلبًا صادقًا يُرافقك، فتأمن.");

                break;

            case "10":
                message_2.innerHTML = ("‏تخيل أن تلتقي بأحداً يُشبهك ، فيحبك و تكملا الطريق سوياً.");

                break;

            case "11":
                message_2.innerHTML = ("كل الذكريات القديمة ستتبخر بمجرد أن تُقابل شخص حقيقي، مناسب لك، صادق.");

                break;

            case "12":
                message_2.innerHTML = ("الأشياء التي نُخفيها ، تُغيرنا .");

                break;

            case "13":
                message_2.innerHTML = ("لا احب التمثيل انني بالكاد امثل نفسي .");

                break;

            case "14":
                message_2.innerHTML = ("ظلّ صامتاً مدة طويلة، كأنه يتعافى من شيءٍ ما");

                break;

            case "15":
                message_2.innerHTML = ("الآلام أيضاً تمضي، مُخلِّفة وراءها آثاراً لا تُمحى.");

                break;

            case "16":
                message_2.innerHTML = ("رُبما لم يكن شيئًا مهمًا بالنسبةِ لك، لكنهُ كان قلبي.");

                break;

            case "17":
                message_2.innerHTML = ("‏تريد الحياة أن تمنحك درسًا فتختار شخصًا.");

                break;

            case "18":
                message_2.innerHTML = ("المُحب لا يؤذي قلبًا أحبه، مهما كانت الضغوطات.");

                break;

            case "19":
                message_2.innerHTML = ("الإستثناء دليل المحبة، استثنوا من تحبّون.");

                break;

            case "20":
                message_2.innerHTML = ("‏قُل للذي أذاك إِن الله لا ينسى .");

                break;

            case "21":
                message_2.innerHTML = ("بعيداً عن العاطفة أحياناً تستحق ما يحدث لك ، كي تغيّر تفكيرك وتفيق من غبائك قليلاً.");

                break;

            case "22":
                message_2.innerHTML = ("عليك أن تدرك تماماً أن عالمَك ، وظرُوفك ، وعقلك ، وأفكَارك ، وشخصيتك مُختلفة تماماً عن غيرك ، لذلك لا تُقارن نفسَك بأحد.");

                break;

            case "23":
                message_2.innerHTML = ("حافظ على روحك،لا أحد يستحقها.");

                break;

            case "24":
                message_2.innerHTML = ("‏أعز مَكاسب وجودكَ على هذّه الأرض، هو قلباً صادقاً يُرافقك فتأمن.");

                break;

            case "25":
                message_2.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "26":
                message_2.innerHTML = ("إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "27":
                message_2.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "28":
                message_2.innerHTML = ("الغريب في الأمر أنّك مازلت تنتظر ، رغم كل هذه الخيبات.");

                break;

            case "29":
                message_2.innerHTML = ("أنتَ أجملهُم في قلبي قبَل عينِي.");

                break;

            case "30":
                message_2.innerHTML = ("لا رغبات أخرى وجودكِ أكثر من كافٍ.");

                break;

            case "31":
                message_2.innerHTML = ("‏وفيكَ اشكر رب البشَر ثُم حظي و القَدر.");

                break;

            case "32":
                message_2.innerHTML = ("ماذا لو كانت النُّجوم خرائط هُروب من هذا العالم؟");

                break;

            case "33":
                message_2.innerHTML = ("كالذي ينتظر ردًا على رساله لم يُرسلها.");

                break;

            case "34":
                message_2.innerHTML = ("-‏لا تخجل من أخطاءك ، تعلّم منها .");

                break;

            case "35":
                message_2.innerHTML = ("يلزمُنا قلبًا أكبر ليتسع لكل هذا الأسى.");

                break;

            case "36":
                message_2.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "37":
                message_2.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "38":
                message_2.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "39":
                message_2.innerHTML = ("‏سَهيتْ بنظِرة عيونكْ واثّاري هالعيونُ بّلاد.");

                break;

            case "40":
                message_2.innerHTML = ("أنتِْ‌ شُعوري ‌الثابتَ ‌مهمَا مرني ‌أشخاص.");

                break;

            case "41":
                message_2.innerHTML = ("لااستِطيع‌‌‎تجاهلكِ‌‌‎فإذاتجاهلتُكِ‌‌‎انااتجاهل‌‌‎قلبْي.");

                break;

            case "42":
                message_2.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "43":
                message_2.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "44":
                message_2.innerHTML = ("ثابت كُل الثبوت في قَلبي و بالي . .");

                break;

            case "45":
                message_2.innerHTML = ("جابك الله ليّ على شكل جبر خاطر لقلبْي . .");

                break;

            case "46":
                message_2.innerHTML = ("حٌبك رضى وانا على حبك ، رضَيت . .");

                break;

            case "47":
                message_2.innerHTML = ("أنا ظلك وضيِك وأنا اللي مغرم فيك . .");

                break;

            case "48":
                message_2.innerHTML = ("‏وإني أحبُّ بك ، كل ما بك . .");

                break;

            case "49":
                message_2.innerHTML = ("أكرمني الله بـ شخص يصبّ الضحكات على قلبي. .");

                break;

            case "50":
                message_2.innerHTML = ("وفي النهاية يوجد شخص يراك مبهر جداً وبدون أدنى مجهود منَك.");

                break;

            case "51":
                message_2.innerHTML = ("ظننت يوماً أننا سنبقى دوماً.");

                break;

            case "52":
                message_2.innerHTML = ("Hold on to those who want you well. تمسك بمن أراد لك الخير.");

                break;

            case "53":
                message_2.innerHTML = ("صباح الخير كُن سعيدًا و راضٍ بتفاصيلك البَسيطة و الجميلة دون أن يفعَل لك أحدٌ شيء.");

                break;

            case "54":
                message_2.innerHTML = ("سيرني حنيني إليك.");

                break;

            case "55":
                message_2.innerHTML = ("لَعلَ الارضَ تنطويْ لأحظىَ بلقياكْ.");

                break;

            case "56":
                message_2.innerHTML = ("لو تحبك الدنيا بأهلها مايحبّك احد كثري.");

                break;

            case "57":
                message_2.innerHTML = ("و أنت وحدك بهالدنيا حبيبي.💛");

                break;

            case "58":
                message_2.innerHTML = ("كل ضحكة منك تهديني حياة.");

                break;

            case "59":
                message_2.innerHTML = ("أجمل حظوظ قلبي أنك سكنته.");

                break;

            case "60":
                message_2.innerHTML = ("اشوف صورتك وترد الروح فيني، وشلون روحي لو تشوفك حقيقة.");

                break;

            case "61":
                message_2.innerHTML = ("الكل يتمنى ان يحقق اهدافه لاكن الواقع بارع في حراسة المرمى.");

                break;

            case "62":
                message_2.innerHTML = ("في موطني كل شيى له ثمن إلا البكاء.");

                break;

            case "63":
                message_2.innerHTML = ("عندما تكون على حق لا احد يتذكرك وعندما تكون خطأ لا احد ينساك.");

                break;

            case "64":
                message_2.innerHTML = ("وااسجد واقترب مسافات الحزن و الألم تطويها شجدة");

                break;

            case "65":
                message_2.innerHTML = ("90% منكم منافقين المشكلة انو المنافقين بفكرو حالهم من 10% المناح");

                break;

            case "66":
                message_2.innerHTML = ("ستنسى وكأنك لم تكن");

                break;

            case "67":
                message_2.innerHTML = ("ماذا لو كان القلب الذي تكسره يحبه الله ؟");

                break;

            case "68":
                message_2.innerHTML = ("من اراد الرحيل فل ينقلع");

                break;

            case "69":
                message_2.innerHTML = ("حظ اوفر مجلد فارغ");

                break;

            case "70":
                message_2.innerHTML = ("سلام الله على عينيك");

                break;

            case "71":
                message_2.innerHTML = ("لكل قلب تألم, سلام على من رب السلام");

                break;

            case "72":
                message_2.innerHTML = ("لا تتجاهلو اخطائي عادي ازعلو !!");

                break;

            case "73":
                message_2.innerHTML = ("مادام الشاحن الاصلي بخير فليحترق الجميع");

                break;

            case "74":
                message_2.innerHTML = ("ولعل ما تريده في طريقه أليك...");

                break;

            case "75":
                message_2.innerHTML = ("لا حيات دون صلات");

                break;

            case "76":
                message_2.innerHTML = ("رغم تجاهلك المستمر لنداء الصلاة وهجرك للقرأن ماذال الله رحيم بك حتى الان !");

                break;

            case "77":
                message_2.innerHTML = ("افترقنا وانقطع حتا السلام");

                break;

            case "78":
                message_2.innerHTML = ("سأنتظرك حتى تمل ّ ّ ّ");

                break;

            case "79":
                message_2.innerHTML = ("كم اشتقتو إليك وهل تدري ؟");

                break;

            case "80":
                message_2.innerHTML = ("وبعدك الحياة فارغتااا ليتك تعلم");

                break;

            case "81":
                message_2.innerHTML = ("وانت/ي كالماء في الجسد ان انقطعت انقطعت الحياة");

                break;

            case "82":
                message_2.innerHTML = ("وهل انت بخير الان؟");

                break;

            case "83":
                message_2.innerHTML = ("وكم مضى من ابتعادي عنك");

                break;

            case "84":
                message_2.innerHTML = ("وهل انت بخير من بعدي المسافات");

                break;

            case "85":
                message_2.innerHTML = ("هل انا سعيد ام مكتئب ام حزين ام.. ام.. وما هو وضعي الحالي هل انا بخير ");

                break;

            case "86":
                message_2.innerHTML = ("وها نحن نادينا وننتظر ");

                break;

            case "87":
                message_2.innerHTML = ("واصتصعب ان ابتعد");

                break;

            case "88":
                message_2.innerHTML = ("تذكر اجمل ايامي معك ");

                break;

            case "89":
                message_2.innerHTML = ("وانجرح لاكني ابقى صامتا");

                break;

            case "90":
                message_2.innerHTML = ("انتي كقمر كل يوم بوجه جديد");

                break;

            case "91":
                message_2.innerHTML = ("اقم صلاتك قبل مماتك");

                break;

            case "92":
                message_2.innerHTML = ("كيف نخبر البحر اننا نغرق على اليابسة");

                break;

            case "93":
                message_2.innerHTML = ("وكم بعد يا قلب تريد ان تهوى ");

                break;

            case "94":
                message_2.innerHTML = ("ولم نكفي الم بعد اننا في بداية الطريق");

                break;

            case "95":
                message_2.innerHTML = ("وستصبح حياتا ذكرى");

                break;

            case "96":
                message_2.innerHTML = ("");

                break;

            case "97":
                message_2.innerHTML = ("");

                break;

            case "98":
                message_2.innerHTML = ("");

                break;

            case "99":
                message_2.innerHTML = ("");

                break;

            case "100":
                message_2.innerHTML = ("");

                break;

            case "":
                message_2.innerHTML = ("");

                break;
 



            default:

                message.innerHTML = ("لايوجد شخص بهذا الاسم تحقق من الاسم و حاول مجددا");

                break;

        }
        switch (zsz_3) {

            case "1":
                message_3.innerHTML = ("لو سَألت قلبي عنك لرأيتهُ عاشقاً يهَواك . .");

                break;

            case "2":
                message_3.innerHTML = ("‏الغيرَة عليكِ أمرٌ خارج إرادَتي.");

                break;

            case "3":
                message_3.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "4":
                message_3.innerHTML = ("كم هي جميلة ودافئة تلك اللحظة التي تكتشف فيها أنك أنت المقصود بنص كُتب بطريقةٍ مبهرة، وأنك الشخص الوحيد الذي يستطيع إدراك ذلك.");

                break;

            case "5":
                message_3.innerHTML = ("بالنيابة عن أنّك شَمسي المُذهلة، أنا أحبّك جداً !");

                break;

            case "6":
                message_3.innerHTML = ("اريد أن آكون دائِما الفكره الاولى التي تطرأ عَليك.");

                break;

            case "7":
                message_3.innerHTML = ("أحبك باستمرار ولكن بخوف مستمر أيضاً.");

                break;

            case "8":
                message_3.innerHTML = ("العيُون لا تفضحُ الأنسان بقدر ما تَشرحهُ .");

                break;

            case "9":
                message_3.innerHTML = ("وقلبًا صادقًا يُرافقك، فتأمن.");

                break;

            case "10":
                message_3.innerHTML = ("‏تخيل أن تلتقي بأحداً يُشبهك ، فيحبك و تكملا الطريق سوياً.");

                break;

            case "11":
                message_3.innerHTML = ("كل الذكريات القديمة ستتبخر بمجرد أن تُقابل شخص حقيقي، مناسب لك، صادق.");

                break;

            case "12":
                message_3.innerHTML = ("الأشياء التي نُخفيها ، تُغيرنا .");

                break;

            case "13":
                message_3.innerHTML = ("لا احب التمثيل انني بالكاد امثل نفسي .");

                break;

            case "14":
                message_3.innerHTML = ("ظلّ صامتاً مدة طويلة، كأنه يتعافى من شيءٍ ما");

                break;

            case "15":
                message_3.innerHTML = ("الآلام أيضاً تمضي، مُخلِّفة وراءها آثاراً لا تُمحى.");

                break;

            case "16":
                message_3.innerHTML = ("رُبما لم يكن شيئًا مهمًا بالنسبةِ لك، لكنهُ كان قلبي.");

                break;

            case "17":
                message_3.innerHTML = ("‏تريد الحياة أن تمنحك درسًا فتختار شخصًا.");

                break;

            case "18":
                message_3.innerHTML = ("المُحب لا يؤذي قلبًا أحبه، مهما كانت الضغوطات.");

                break;

            case "19":
                message_3.innerHTML = ("الإستثناء دليل المحبة، استثنوا من تحبّون.");

                break;

            case "20":
                message_3.innerHTML = ("‏قُل للذي أذاك إِن الله لا ينسى .");

                break;

            case "21":
                message_3.innerHTML = ("بعيداً عن العاطفة أحياناً تستحق ما يحدث لك ، كي تغيّر تفكيرك وتفيق من غبائك قليلاً.");

                break;

            case "22":
                message_3.innerHTML = ("عليك أن تدرك تماماً أن عالمَك ، وظرُوفك ، وعقلك ، وأفكَارك ، وشخصيتك مُختلفة تماماً عن غيرك ، لذلك لا تُقارن نفسَك بأحد.");

                break;

            case "23":
                message_3.innerHTML = ("حافظ على روحك،لا أحد يستحقها.");

                break;

            case "24":
                message_3.innerHTML = ("‏أعز مَكاسب وجودكَ على هذّه الأرض، هو قلباً صادقاً يُرافقك فتأمن.");

                break;

            case "25":
                message_3.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "26":
                message_3.innerHTML = ("إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "27":
                message_3.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "28":
                message_3.innerHTML = ("الغريب في الأمر أنّك مازلت تنتظر ، رغم كل هذه الخيبات.");

                break;

            case "29":
                message_3.innerHTML = ("أنتَ أجملهُم في قلبي قبَل عينِي.");

                break;

            case "30":
                message_3.innerHTML = ("لا رغبات أخرى وجودكِ أكثر من كافٍ.");

                break;

            case "31":
                message_3.innerHTML = ("‏وفيكَ اشكر رب البشَر ثُم حظي و القَدر.");

                break;

            case "32":
                message_3.innerHTML = ("ماذا لو كانت النُّجوم خرائط هُروب من هذا العالم؟");

                break;

            case "33":
                message_3.innerHTML = ("كالذي ينتظر ردًا على رساله لم يُرسلها.");

                break;

            case "34":
                message_3.innerHTML = ("-‏لا تخجل من أخطاءك ، تعلّم منها .");

                break;

            case "35":
                message_3.innerHTML = ("يلزمُنا قلبًا أكبر ليتسع لكل هذا الأسى.");

                break;

            case "36":
                message_3.innerHTML = ("كل الأشياء مؤقتة والأشخاص أحيانًا.");

                break;

            case "37":
                message_3.innerHTML = ("‏إنهُ الإطمئنان ، الشعور الأكثر ندرة في حياة كل شخص.");

                break;

            case "38":
                message_3.innerHTML = ("يأخذ الإنسان دروسه المؤلمة، من الأشياء التي أدخلها قلبه و استأمنها عليه .");

                break;

            case "39":
                message_3.innerHTML = ("‏سَهيتْ بنظِرة عيونكْ واثّاري هالعيونُ بّلاد.");

                break;

            case "40":
                message_3.innerHTML = ("أنتِْ‌ شُعوري ‌الثابتَ ‌مهمَا مرني ‌أشخاص.");

                break;

            case "41":
                message_3.innerHTML = ("لااستِطيع‌‌‎تجاهلكِ‌‌‎فإذاتجاهلتُكِ‌‌‎انااتجاهل‌‌‎قلبْي.");

                break;

            case "42":
                message_3.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "43":
                message_3.innerHTML = ("‏و قلباً صادقاً يُرافقَك فتأمَن.");

                break;

            case "44":
                message_3.innerHTML = ("ثابت كُل الثبوت في قَلبي و بالي . .");

                break;

            case "45":
                message_3.innerHTML = ("جابك الله ليّ على شكل جبر خاطر لقلبْي . .");

                break;

            case "46":
                message_3.innerHTML = ("حٌبك رضى وانا على حبك ، رضَيت . .");

                break;

            case "47":
                message_3.innerHTML = ("أنا ظلك وضيِك وأنا اللي مغرم فيك . .");

                break;

            case "48":
                message_3.innerHTML = ("‏وإني أحبُّ بك ، كل ما بك . .");

                break;

            case "49":
                message_3.innerHTML = ("أكرمني الله بـ شخص يصبّ الضحكات على قلبي. .");

                break;

            case "50":
                message_3.innerHTML = ("وفي النهاية يوجد شخص يراك مبهر جداً وبدون أدنى مجهود منَك.");

                break;

            case "51":
                message_3.innerHTML = ("ظننت يوماً أننا سنبقى دوماً.");

                break;

            case "52":
                message_3.innerHTML = ("Hold on to those who want you well. تمسك بمن أراد لك الخير.");

                break;

            case "53":
                message_3.innerHTML = ("صباح الخير كُن سعيدًا و راضٍ بتفاصيلك البَسيطة و الجميلة دون أن يفعَل لك أحدٌ شيء.");

                break;

            case "54":
                message_3.innerHTML = ("سيرني حنيني إليك.");

                break;

            case "55":
                message_3.innerHTML = ("لَعلَ الارضَ تنطويْ لأحظىَ بلقياكْ.");

                break;

            case "56":
                message_3.innerHTML = ("لو تحبك الدنيا بأهلها مايحبّك احد كثري.");

                break;

            case "57":
                message_3.innerHTML = ("و أنت وحدك بهالدنيا حبيبي.💛");

                break;

            case "58":
                message_3.innerHTML = ("كل ضحكة منك تهديني حياة.");

                break;

            case "59":
                message_3.innerHTML = ("أجمل حظوظ قلبي أنك سكنته.");

                break;

            case "60":
                message_3.innerHTML = ("اشوف صورتك وترد الروح فيني، وشلون روحي لو تشوفك حقيقة.");

                break;

            case "61":
                message_3.innerHTML = ("الكل يتمنى ان يحقق اهدافه لاكن الواقع بارع في حراسة المرمى.");

                break;

            case "62":
                message_3.innerHTML = ("في موطني كل شيى له ثمن إلا البكاء.");

                break;

            case "63":
                message_3.innerHTML = ("عندما تكون على حق لا احد يتذكرك وعندما تكون خطأ لا احد ينساك.");

                break;

            case "64":
                message_3.innerHTML = ("وااسجد واقترب مسافات الحزن و الألم تطويها شجدة");

                break;

            case "65":
                message_3.innerHTML = ("90% منكم منافقين المشكلة انو المنافقين بفكرو حالهم من 10% المناح");

                break;

            case "66":
                message_3.innerHTML = ("ستنسى وكأنك لم تكن");

                break;

            case "67":
                message_3.innerHTML = ("ماذا لو كان القلب الذي تكسره يحبه الله ؟");

                break;

            case "68":
                message_3.innerHTML = ("من اراد الرحيل فل ينقلع");

                break;

            case "69":
                message_3.innerHTML = ("حظ اوفر مجلد فارغ");

                break;

            case "70":
                message_3.innerHTML = ("سلام الله على عينيك");

                break;

            case "71":
                message_3.innerHTML = ("لكل قلب تألم, سلام على من رب السلام");

                break;

            case "72":
                message_3.innerHTML = ("لا تتجاهلو اخطائي عادي ازعلو !!");

                break;

            case "73":
                message_3.innerHTML = ("مادام الشاحن الاصلي بخير فليحترق الجميع");

                break;

            case "74":
                message_3.innerHTML = ("ولعل ما تريده في طريقه أليك...");

                break;

            case "75":
                message_3.innerHTML = ("لا حيات دون صلات");

                break;

            case "76":
                message_3.innerHTML = ("رغم تجاهلك المستمر لنداء الصلاة وهجرك للقرأن ماذال الله رحيم بك حتى الان !");

                break;

            case "77":
                message_3.innerHTML = ("افترقنا وانقطع حتا السلام");

                break;

            case "78":
                message_3.innerHTML = ("سأنتظرك حتى تمل ّ ّ ّ");

                break;

            case "79":
                message_3.innerHTML = ("كم اشتقتو إليك وهل تدري ؟");

                break;

            case "80":
                message_3.innerHTML = ("وبعدك الحياة فارغتااا ليتك تعلم");

                break;

            case "81":
                message_3.innerHTML = ("وانت/ي كالماء في الجسد ان انقطعت انقطعت الحياة");

                break;

            case "82":
                message_3.innerHTML = ("وهل انت بخير الان؟");

                break;

            case "83":
                message_3.innerHTML = ("وكم مضى من ابتعادي عنك");

                break;

            case "84":
                message_3.innerHTML = ("وهل انت بخير من بعدي المسافات");

                break;

            case "85":
                message_3.innerHTML = ("هل انا سعيد ام مكتئب ام حزين ام.. ام.. وما هو وضعي الحالي هل انا بخير ");

                break;

            case "86":
                message_3.innerHTML = ("وها نحن نادينا وننتظر ");

                break;

            case "87":
                message_3.innerHTML = ("واصتصعب ان ابتعد");

                break;

            case "88":
                message_3.innerHTML = ("تذكر اجمل ايامي معك ");

                break;

            case "89":
                message_3.innerHTML = ("وانجرح لاكني ابقى صامتا");

                break;

            case "90":
                message_3.innerHTML = ("انتي كقمر كل يوم بوجه جديد");

                break;

            case "91":
                message_3.innerHTML = ("اقم صلاتك قبل مماتك");

                break;

            case "92":
                message_3.innerHTML = ("كيف نخبر البحر اننا نغرق على اليابسة");

                break;

            case "93":
                message_3.innerHTML = ("وكم بعد يا قلب تريد ان تهوى ");

                break;

            case "94":
                message_3.innerHTML = ("ولم نكفي الم بعد اننا في بداية الطريق");

                break;

            case "95":
                message_3.innerHTML = ("وستصبح حياتا ذكرى");

                break;

            case "96":
                message_3.innerHTML = ("");

                break;

            case "97":
                message_3.innerHTML = ("");

                break;

            case "98":
                message_3.innerHTML = ("");

                break;

            case "99":
                message_3.innerHTML = ("");

                break;

            case "100":
                message_3.innerHTML = ("");

                break;

            case "":
                message_3.innerHTML = ("");

                break;
 



            default:

                message.innerHTML = ("لايوجد شخص بهذا الاسم تحقق من الاسم و حاول مجددا");

                break;

        }
    }
}