function draw() {

    const stock = document.getElementById("stock");
    const canvas = document.getElementById("clock");
    const rectangular = document.getElementById("rectangular");
    const tri = document.getElementById("tri");
    const smile = document.getElementById("smile");
    const cut = document.getElementById("cut");
    const arcs = document.getElementById("arcs");
    const says = document.getElementById("says");
    const loves = document.getElementById("loves");
    const pack = document.getElementById("pack");
    const path2d = document.getElementById("path2d");


    const clr = document.getElementById("colors").getContext("2d");

    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 6; j++) {
            clr.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(
                255 - 42.5 * j,
            )}, 0)`;
            clr.fillRect(j * 25, i * 25, 25, 25);
        }
    }


    if(path2d.getContext){
        const path2 = path2d.getContext("2d");

        const reactangle = new Path2D();
        reactangle.rect(10, 10, 50, 50);

        const circle = new Path2D();
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        path2.stroke(reactangle);
        path2.fillStyle = "green"
        path2.fill(circle);

    }

    if(pack.getContext){
        const pck = pack.getContext("2d");

        roundedRect(pck, 12, 12, 150, 150, 15);
        roundedRect(pck, 19, 19, 150, 150, 9);
        roundedRect(pck, 53, 53, 49, 33, 10);
        roundedRect(pck, 53, 119, 49, 16, 6);
        roundedRect(pck, 135, 53, 49, 33, 10);
        roundedRect(pck, 135, 119, 25, 49, 10);

        pck.beginPath();
        pck.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        pck.lineTo(31, 37);
        pck.fillStyle = "blue";
        pck.fill();

        for (let i = 0; i < 8; i++) {
            pck.fillRect(51 + i * 16, 35, 4, 4);
        }

        for(let i = 0; i < 6; i++) {
            pck.fillRect(115, 51 + i * 16, 4, 4);
        }

        for(let i = 0; i < 8; i++) {
            pck.fillRect(51 + i * 16, 99, 4, 4);
        }

        pck.beginPath();
        pck.moveTo(83, 116);
        pck.lineTo(83, 102);
        pck.bezierCurveTo(83, 94, 89, 88, 97, 88);
        pck.bezierCurveTo(105, 88, 111, 94, 111, 102);
        pck.lineTo(111, 116);
        pck.lineTo(106.333, 111.333);
        pck.lineTo(101.666, 116);
        pck.lineTo(97, 111.333);
        pck.lineTo(92.333, 116);
        pck.lineTo(87.666, 111.333);
        pck.lineTo(83, 116);
        pck.fillStyle = "green";
        pck.fill();

        pck.fillStyle = "White";
        pck.beginPath();
        pck.moveTo(91, 96);
        pck.bezierCurveTo(88, 96, 87, 99, 87, 101);
        pck.bezierCurveTo(87, 103, 88, 106, 91, 106);
        pck.bezierCurveTo(94, 106, 95, 103, 95, 101);
        pck.bezierCurveTo(95, 99, 94, 96, 91, 96);
        pck.moveTo(103, 96);
        pck.bezierCurveTo(100, 96, 99, 99, 99, 101);
        pck.bezierCurveTo(99, 103, 100, 106, 103, 106);
        pck.bezierCurveTo(106, 106, 107, 103, 107, 101);
        pck.bezierCurveTo(107, 99, 106, 96, 103, 96);
        pck.fill();

        pck.fillStyle = "black";
        pck.beginPath();
        pck.arc(101, 102, 2, 0, Math.PI * 2, true);
        pck.fill();

    }

    if(loves.getContext){
        const lvs = loves.getContext("2d");

        //Cubic curves examples
        lvs.beginPath();
        lvs.moveTo(75, 40);
        lvs.bezierCurveTo(75, 37, 70, 25, 50, 25);
        lvs.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        lvs.bezierCurveTo(20, 80, 40, 102, 75, 120);
        lvs.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        lvs.bezierCurveTo(130,62.5, 130, 25, 100, 25);
        lvs.bezierCurveTo(85, 25, 75, 37, 75, 40);
        lvs.fillStyle = "red";
        lvs.fill();
    }

    if(says.getContext){
        const sys = says.getContext("2d");

        //Quadratic curves examples
        sys.beginPath();
        sys.moveTo(75, 25);
        sys.quadraticCurveTo(25, 25, 25, 62.5);
        sys.quadraticCurveTo(25, 100, 50, 100);
        sys.quadraticCurveTo(50, 120, 30, 125);
        sys.quadraticCurveTo(60, 120, 65, 100);
        sys.quadraticCurveTo(125,100, 125, 62.5);
        sys.quadraticCurveTo(125, 25, 75, 25);
        sys.stroke();
    }

    if(arcs.getContext) {
        const ark = arcs.getContext("2d");

        for (let i = 0; i < 4; i++) {
            for(let j = 0; j < 3; j++) {
                ark.beginPath();
                const x = 25 + j * 50; //x xoordinate
                const y = 25 + i * 50; // y coordinate
                const radius = 20; // Arc radius
                const startAngle = 0; //Starting Point on circle
                const endAngle = Math.PI + (Math.PI * j) / 2; //Endpoint on circle
                const counterclockwise = i % 2 !== 0; //clockwise or counterclockwise

                ark.arc(x, y, radius, startAngle, endAngle, counterclockwise);

                if (i > 1) {
                    ark.fill();
                } else {
                    ark.stroke()
                }
            }
        }
    }

    if(cut.getContext) {
        const ct = cut.getContext("2d");

        ct.beginPath()
        ct.moveTo(25, 25);
        ct.lineTo(105, 25);
        ct.lineTo(25, 105);
        ct.fill();

        //Stroked Triangle

        ct.beginPath();
        ct.moveTo(125, 125);
        ct.lineTo(125, 45);
        ct.lineTo(45, 125);
        ct.closePath();
        ct.stroke();
    }

    if(smile.getContext) {
        const sml = smile.getContext("2d");

        sml.beginPath()
        sml.arc(75, 75, 50, 0, Math.PI * 2, true); //Outer Cicle
        sml.moveTo(110, 75);
        sml.arc(75, 75, 35, 0, Math.PI, false) //Mounth Clockwise
        sml.moveTo(65, 65);
        sml.arc(60, 65, 5, 0, Math.PI * 2, true); //Left Eye
        sml.moveTo(95, 65);
        sml.arc(90, 65, 5, 0, Math.PI * 2, true); //Right Eye
        sml.stroke();
    }

    if(tri.getContext) {
        const tr = tri.getContext("2d");

        tr.beginPath()
        tr.moveTo(75, 50)
        tr.lineTo(100, 75)
        tr.lineTo(100, 25)
        tr.fill()
    }

    if(rectangular.getContext) {
        const rctngl = rectangular.getContext("2d");

        rctngl.strokeStyle = "green"
        rctngl.fillRect(25, 25, 100, 100)
        rctngl.clearRect(45, 45, 60, 60)
        rctngl.strokeRect(50, 50, 50, 50)

    }

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");
        const stk = stock.getContext("2d");

        console.log(ctx)

        stk.strokeStyle = "green"
        stk.strokeRect(10, 10, 50, 50);

        stk.strokeStyle = "blue";
        stk.strokeRect(30, 40, 50, 50);

        //Second 
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50)

        ctx.fillStyle = "rgb(0, 0, 200, 0.5)";
        ctx.fillRect(30, 40, 50, 50)

    } 
}

function roundedRect(pck, x, y, width, height, radius) {
    pck.beginPath();
    pck.moveTo(x, y + radius);
    pck.arcTo(x, y + height, x + radius, y + height, radius);
    pck.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    pck.arcTo(x + width, y, x + width - radius, y, radius);
    pck.arcTo(x, y, x, y + radius, radius);
    pck.stroke();
}

window.addEventListener("load", draw)