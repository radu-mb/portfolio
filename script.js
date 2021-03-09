    window.onload = function(){ 
        img0 = document.getElementById("img0"); 
        img1 = document.getElementById("img1"); 
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");

        img_overlay0 = document.getElementById("img-overlay0");
        img_overlay = document.getElementById("img-overlay");
        img_overlay2 = document.getElementById("img-overlay2");
        img_overlay3 = document.getElementById("img-overlay3");
        img_overlay4 = document.getElementById("img-overlay4");

        closebtn0 = document.getElementById("closebtn0");
        closebtn1 = document.getElementById("closebtn1");
        closebtn2 = document.getElementById("closebtn2");
        closebtn3 = document.getElementById("closebtn3");
        closebtn4 = document.getElementById("closebtn4");

        img0.addEventListener("click", enlargeImg0);
        closebtn0.addEventListener("click", resetImg0);

        img1.addEventListener("click", enlargeImg1);
        closebtn1.addEventListener("click", resetImg1);
        
        img2.addEventListener("click", enlargeImg2);
        closebtn2.addEventListener("click", resetImg2);

        img3.addEventListener("click", enlargeImg3);
        closebtn3.addEventListener("click", resetImg3);

        img4.addEventListener("click", enlargeImg4);
        closebtn4.addEventListener("click", resetImg4);

        function enlargeImg0() {
            img_overlay0.style.height = "100%"; 
            img_overlay0.style.width = "100%";
            img_overlay0.style.transition = "transform 0.25s ease";
            img_overlay0.scrollIntoView(true);
            img_overlay0.style.overflowY = "scroll";
            document.body.style.overflow = 'hidden';
            closebtn0.style.opacity = 1;
        };

        function resetImg0() {
            img_overlay0.style.height = "0%"; 
            img_overlay0.style.width = "0%"; 
            img_overlay0.style.transition = "transform 0.25s ease"; 
            document.body.style.overflow = null;
            closebtn0.style.opacity = 0;
        };

        function enlargeImg1() {
            img_overlay.style.height = "100%"; 
            img_overlay.style.width = "100%";
            img_overlay.style.transition = "transform 0.25s ease";
            img_overlay.scrollIntoView(true);
            document.body.style.overflow = 'hidden';
            closebtn1.style.opacity = 1;
        };

        function resetImg1() {
            img_overlay.style.height = "0%"; 
            img_overlay.style.width = "0%"; 
            img_overlay.style.transition = "transform 0.25s ease"; 
            document.body.style.overflow = null;
            closebtn1.style.opacity = 0;
        };

        function enlargeImg2() {
            img_overlay2.style.height = "100%"; 
            img_overlay2.style.width = "100%";
            img_overlay2.style.transition = "transform 0.25s ease";
            img_overlay2.scrollIntoView(true);
            document.body.style.overflow = 'hidden';
            closebtn2.style.opacity = 1;
        };

        function resetImg2() {
            img_overlay2.style.height = "0%"; 
            img_overlay2.style.width = "0%"; 
            img_overlay2.style.transition = "transform 0.25s ease"; 
            document.body.style.overflow = null;
            closebtn2.style.opacity = 0;
        };

        function enlargeImg3() {
            img_overlay3.style.height = "100%"; 
            img_overlay3.style.width = "100%";
            img_overlay3.style.transition = "transform 0.25s ease";
            img_overlay3.scrollIntoView(true);
            document.body.style.overflow = 'hidden';
            closebtn3.style.opacity = 1;
        };

        function resetImg3() {
            img_overlay3.style.height = "0%"; 
            img_overlay3.style.width = "0%"; 
            img_overlay3.style.transition = "transform 0.25s ease"; 
            document.body.style.overflow = null;
            closebtn3.style.opacity = 0;
        };

        function enlargeImg4() {
            img_overlay4.style.height = "100%"; 
            img_overlay4.style.width = "100%";
            img_overlay4.style.transition = "transform 0.25s ease";
            img_overlay4.scrollIntoView(true);
            img_overlay4.style.overflowY = "scroll";
            document.body.style.overflow = 'hidden';
            closebtn4.style.opacity = 1;
        };

        function resetImg4() {
            img_overlay4.style.height = "0%"; 
            img_overlay4.style.width = "0%"; 
            img_overlay4.style.transition = "transform 0.25s ease"; 
            document.body.style.overflow = null;
            closebtn4.style.opacity = 0;
        };

    }; 
