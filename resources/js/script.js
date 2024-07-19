document.addEventListener("DOMContentLoaded", function () {
    //배경 실행
    blossom();

    //마우스 커서 실행
    cursorPointer();
});

// 배경 네잎클로버
function blossom() {
    let background = document.getElementById("clover");

    for (var i = 0; i < 20; i++) {
        var s = Math.floor(Math.random() * 10);
        var t = Math.floor(Math.random() * 4000 + 1000);
        var x = Math.random() * 100;
        var y = Math.random() * 80;
        let clover = `
            <svg width="172px" height="172px" viewBox="0 0 172 172" style="top: ${x}%;left: ${y}%;animation-name:blossom-${s}; animation-duration:${t}ms;" class="animate">
                <g transform="translate(36.000000, 0.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#59c095" opacity="0.6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                
                <g id="Group" transform="translate(86.000000, 129.000000) scale(1, -1) translate(-86.000000, -129.000000) translate(36.000000, 86.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#59c095" opacity="0.6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                <g id="Group" transform="translate(129.000000, 86.000000) rotate(90.000000) translate(-129.000000, -86.000000) translate(79.000000, 43.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#59c095" opacity=".6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                <g id="Group" transform="translate(43.000000, 86.000000) scale(1, -1) rotate(-90.000000) translate(-43.000000, -86.000000) translate(-7.000000, 43.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#59c095" opacity=".6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
            </svg>
            `;
        background.insertAdjacentHTML("afterbegin", clover);
    }
}

// 마우스 커서
function cursorPointer() {
    if (document.querySelector(".mouse-cursor")) {
        if (document.querySelector("body")) {
            const e = document.querySelector(".mouse-cursor");
            let n,
                i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX), (e.style.visibility = "visible");
            };
        }
    }
}
