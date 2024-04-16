let text1Quote;
let text1ToFree;
let text1ToVacation;
let textUsesE;
let textUsesD;

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    scroll(delta)
});

let i;
i = 0;
let nd;
nd = false;
function scroll(delta) {
    if (quotesBool) {
        if (delta == 1)
        {
            if (text1Quote == "")
            {
                document.getElementById('usesE').textContent = textUsesE.slice(0, i);
                if (document.getElementById('usesE').textContent = textUsesE)
                {
                    if (!nd) {i = 0; nd = true;}
                    document.getElementById('usesD').textContent = textUsesD.slice(0, i); 
                }
            }
            else
            {
                text1Quote = text1Quote.slice(0, -1);
                document.getElementById('quote').textContent = text1Quote;
            }
        }
        if (delta == -1)
        {
            if (text1Quote == "")
            {
                document.getElementById('usesE').textContent = textUsesE.slice(0, -1);
                if (document.getElementById('usesE').textContent = " ")
                {
                    document.getElementById('usesD').textContent = textUsesD.slice(0, -1); 
                }
            }
            else
            {

            }
        }
    }
}