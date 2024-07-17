document.addEventListener("DOMContentLoaded", function () {
    let startIntro = setInterval(intro,300);
    
    setTimeout(function(){
        clearInterval(startIntro);
        startIntro = null;

        document.querySelector('.intro-txt').classList.add('show')
    },900);

    setTimeout(function(){
        document.getElementById('intro').classList.add('hide')
    },3000);

    blossom()
});

let leafNum = 1;
function intro(){
    let leaf = document.getElementById("leaf");
    let newLeaf = leaf.cloneNode(true);

    newLeaf.id = 'leaf' + leafNum;
    newLeaf.style.transform = "rotate(" + 90*leafNum+ "deg)"
    document.getElementById('loading').append(newLeaf)
    leafNum++
}

function blossom(){
    let background = document.getElementById("clover")
    
    for(var i=0;i<20;i++) {
        var s=Math.floor(Math.random()*10);
        var t=Math.floor(Math.random()*4000+1000);
        var x=Math.random()*100;
        var y=Math.random()*80;
        let clover = `
            <svg width="172px" height="172px" viewBox="0 0 172 172" style="top: ${x}%;left: ${y}%;animation-name:blossom-${s}; animation-duration:${t}ms;" class="animate">
                <g transform="translate(36.000000, 0.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#00731B" opacity="0.6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                
                <g id="Group" transform="translate(86.000000, 129.000000) scale(1, -1) translate(-86.000000, -129.000000) translate(36.000000, 86.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#00731B" opacity="0.6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                <g id="Group" transform="translate(129.000000, 86.000000) rotate(90.000000) translate(-129.000000, -86.000000) translate(79.000000, 43.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#00731B" opacity=".6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
                <g id="Group" transform="translate(43.000000, 86.000000) scale(1, -1) rotate(-90.000000) translate(-43.000000, -86.000000) translate(-7.000000, 43.000000)">
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86 C37.2000343,68.2812276 19.3468421,57.3786136 6.38351434,39.6288395 C-15.7380586,9.33932356 24.7463294,-13.4843611 50,9.16532067 Z" fill="#00731B" opacity=".6"></path>
                    <path d="M50,9.16532067 C75.2536706,-13.4843611 115.738059,9.33932356 93.6164857,39.6288395 C80.6531579,57.3786136 62.7999657,68.2812276 50,86" fill="#FFFFFF" opacity="0.1"></path>
                </g>
            </svg>
            `
        background.insertAdjacentHTML("afterbegin",clover)
    }
};