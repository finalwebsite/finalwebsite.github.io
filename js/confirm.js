function xpopup() {
        document.getElementById("x").onclick= function(){
            var overlay = document.getElementById("overLay");
            var popup = document.getElementById("xPopup");
            overlay.style.display = "block";
            popup.style.display = "block";
        }
    }

    