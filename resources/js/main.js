document.addEventListener("DOMContentLoaded", function () {
    //인트로 실행
    let startIntro = setInterval(intro, 300);
    setTimeout(function () {
        clearInterval(startIntro);
        startIntro = null;

        document.querySelector(".intro-txt").classList.add("show");
    }, 900);
    setTimeout(function () {
        document.getElementById("intro").classList.add("hide");
        showMember();
    }, 3000);

    // 멤버카드 순차등장
    window.addEventListener("scroll", function () {
        showMember();
    });
});

// 인트로
let leafNum = 1;
function intro() {
    let leaf = document.getElementById("leaf");
    let newLeaf = leaf.cloneNode(true);

    newLeaf.id = "leaf" + leafNum;
    newLeaf.style.transform = "rotate(" + 90 * leafNum + "deg)";
    document.getElementById("loading").append(newLeaf);
    leafNum++;
}

// 멤버카드 순차등장
function showMember() {
    let scrollTop = document.documentElement.scrollTop;
    document.querySelectorAll(".mem-box").forEach(function (e) {
        if (scrollTop + window.innerHeight >= e.offsetTop + e.offsetHeight / 2) {
            e.classList.add("now");
        }
    });
}
