const canvas = document.getElementById('fractal-tree-canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth * 0.8;
const height = window.innerHeight * 0.8;
canvas.width = width;
canvas.height = height;

/**
 * Recursively draws a fractal tree branch structure on the canvas.
 * 
 * @param {number} x - The starting x-coordinate of the branch.
 * @param {number} y - The starting y-coordinate of the branch.
 * @param {number} angle - The angle (in radians) at which the branch is drawn.
 * @param {number} length - The length of the current branch.
 * @param {number} branchWidth - The width of the current branch.
 */
function drawTree(x, y, angle, length, branchWidth) {
    if (length < 5) {
        return;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);

    const x2 = x + Math.cos(angle) * length;
    const y2 = y + Math.sin(angle) * length;

    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = branchWidth;
    ctx.stroke();

    const newLength = length * 0.75;
    const newBranchWidth = branchWidth * 0.7;
    const angleOffset = Math.PI / 6; // 30 degrees

    drawTree(x2, y2, angle - angleOffset, newLength, newBranchWidth);
    drawTree(x2, y2, angle + angleOffset, newLength, newBranchWidth);
}

const startX = width / 2;
const startY = height;
const startAngle = -Math.PI / 2; // Pointing straight up
const startLength = height / 4;
const startBranchWidth = 10;

drawTree(startX, startY, startAngle, startLength, startBranchWidth);
