//immediate invoke function expression
//will create local scope so does not pollute global scope


(function(){
    const hexvalue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');

    btn.addEventListener('click',createhex)
    function createhex(){
        const values=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i = 0;i<6;i++){
            let random = Math.floor(Math.random() * values.length);
            //console.log(random);
            hexColor += values[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexvalue.textContent = hexColor;

    }
})();



