const t={BtnStart:document.querySelector("button[data-start]"),BtnStop:document.querySelector("button[data-stop]")};t.BtnStart.addEventListener("click",(function(){n=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log("start"),t.BtnStart.disabled=!0})),t.BtnStop.addEventListener("click",(function(){clearInterval(n),console.log("stop"),t.BtnStart.disabled=!1}));let n=null;
//# sourceMappingURL=01-color-switcher.3c9d2dba.js.map
