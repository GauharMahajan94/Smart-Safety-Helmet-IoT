
import * as THREE from "three";
import { Streamlit } from "streamlit-component-lib";

const root = document.getElementById("root");

root.innerHTML = `
<style>
* { box-sizing: border-box; }
body {
    margin: 0;
    background: #101827;
    color: white;
    font-family: Arial, sans-serif;
}
#viewer {
    width: 100%;
    height: 480px;
    cursor: grab;
    touch-action: none;
}
#viewer:active { cursor: grabbing; }
.controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 12px;
}
button {
    background: #26364d;
    color: white;
    border: 1px solid #475569;
    padding: 10px 13px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}
button:hover { background: #385273; }
#alert {
    padding: 13px;
    margin: 8px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    background: #174d45;
}
.hint {
    text-align: center;
    color: #94a3b8;
    font-size: 12px;
}
</style>
<div id="viewer"></div>
<div class="hint">Drag to rotate worker • Scroll to zoom</div>
<div class="controls">
    <button id="wear">Wear Helmet</button>
    <button id="remove">Remove Helmet</button>
    <button id="left">Tilt Left</button>
    <button id="right">Tilt Right</button>
    <button id="fall">Simulate Fall</button>
    <button id="reset">Reset Worker</button>
</div>
<div id="alert">NORMAL: Worker is ready.</div>
`;

const viewer = document.getElementById("viewer");
const alertBox = document.getElementById("alert");

// =====================================================
// SCENE
// =====================================================

const scene = new THREE.Scene();
scene.background = new THREE.Color("#101827");

const camera = new THREE.PerspectiveCamera(
    45,
    viewer.clientWidth / viewer.clientHeight,
    0.1,
    100
);

camera.position.set(0, 2.2, 8);
camera.lookAt(0, 1.4, 0);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(viewer.clientWidth, viewer.clientHeight);
viewer.appendChild(renderer.domElement);

// =====================================================
// LIGHTING
// =====================================================

scene.add(new THREE.AmbientLight(0xffffff, 1.8));

const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
mainLight.position.set(4, 7, 6);
scene.add(mainLight);

// =====================================================
// MATERIALS
// =====================================================

const skin = new THREE.MeshStandardMaterial({
    color: "#c98d68",
    roughness: 0.8
});

const shirt = new THREE.MeshStandardMaterial({
    color: "#f97316"
});

const trousers = new THREE.MeshStandardMaterial({
    color: "#26364d"
});

const yellow = new THREE.MeshStandardMaterial({
    color: "#facc15"
});

const reflective = new THREE.MeshStandardMaterial({
    color: "#fef08a"
});

const bootsMaterial = new THREE.MeshStandardMaterial({
    color: "#111827"
});

const gloveMaterial = new THREE.MeshStandardMaterial({
    color: "#e5e7eb"
});

const dark = new THREE.MeshStandardMaterial({
    color: "#111827"
});

const white = new THREE.MeshStandardMaterial({
    color: "#ffffff"
});

const mouthMaterial = new THREE.MeshStandardMaterial({
    color: "#451a1a"
});

const hairMaterial = new THREE.MeshStandardMaterial({
    color: "#17120f",
    roughness: 0.95
});

// =====================================================
// HELPER FUNCTION
// =====================================================

function addMesh(parent, geometry, material, position, scale = null) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);

    if (scale) {
        mesh.scale.set(...scale);
    }

    parent.add(mesh);
    return mesh;
}

// =====================================================
// WORKER GROUP
// =====================================================

const worker = new THREE.Group();
scene.add(worker);
worker.position.y = 1.4;

// =====================================================
// BODY
// =====================================================

addMesh(
    worker,
    new THREE.CylinderGeometry(0.38, 0.52, 1.05, 32),
    shirt,
    [0, 0.05, 0]
);

addMesh(
    worker,
    new THREE.BoxGeometry(0.78, 0.10, 0.04),
    reflective,
    [0, 0.25, 0.43]
);

addMesh(
    worker,
    new THREE.BoxGeometry(0.78, 0.10, 0.04),
    reflective,
    [0, -0.18, 0.43]
);

addMesh(
    worker,
    new THREE.BoxGeometry(0.025, 0.85, 0.025),
    dark,
    [0, 0.05, 0.53]
);

// =====================================================
// HEAD AND FACE
// =====================================================

addMesh(
    worker,
    new THREE.CylinderGeometry(0.13, 0.15, 0.25, 24),
    skin,
    [0, 0.68, 0]
);

const head = new THREE.Group();
head.position.set(0, 1.0, 0);
worker.add(head);

addMesh(
    head,
    new THREE.SphereGeometry(0.38, 32, 32),
    skin,
    [0, 0, 0],
    [0.82, 1.08, 0.82]
);

// =====================================================
// SHORT BLACK HAIR
// =====================================================

addMesh(
    head,
    new THREE.SphereGeometry(0.30, 24, 20),
    hairMaterial,
    [0, 0.12, -0.16],
    [1.05, 0.78, 0.78]
);

addMesh(
    head,
    new THREE.BoxGeometry(0.11, 0.34, 0.28),
    hairMaterial,
    [-0.29, 0.02, -0.015]
);

addMesh(
    head,
    new THREE.BoxGeometry(0.11, 0.34, 0.28),
    hairMaterial,
    [0.29, 0.02, -0.015]
);

addMesh(
    head,
    new THREE.SphereGeometry(
        0.20, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2
    ),
    hairMaterial,
    [0, 0.27, 0.015],
    [1.05, 0.50, 0.85]
);

// =====================================================
// EYES
// =====================================================

const leftEye = addMesh(
    head,
    new THREE.SphereGeometry(0.075, 24, 24),
    white,
    [-0.13, 0.07, 0.30]
);

const rightEye = addMesh(
    head,
    new THREE.SphereGeometry(0.075, 24, 24),
    white,
    [0.13, 0.07, 0.30]
);

addMesh(
    head,
    new THREE.SphereGeometry(0.033, 16, 16),
    dark,
    [-0.13, 0.07, 0.365]
);

addMesh(
    head,
    new THREE.SphereGeometry(0.033, 16, 16),
    dark,
    [0.13, 0.07, 0.365]
);

// =====================================================
// EYEBROWS
// =====================================================

const leftEyebrow = addMesh(
    head,
    new THREE.BoxGeometry(0.15, 0.035, 0.025),
    dark,
    [-0.13, 0.19, 0.31]
);

const rightEyebrow = addMesh(
    head,
    new THREE.BoxGeometry(0.15, 0.035, 0.025),
    dark,
    [0.13, 0.19, 0.31]
);

// NOSE
addMesh(
    head,
    new THREE.SphereGeometry(0.055, 16, 16),
    skin,
    [0, -0.04, 0.33]
);

// =====================================================
// MOUTH EXPRESSIONS
// =====================================================

function createMouthCurve(points) {
    const curve = new THREE.CatmullRomCurve3(
        points.map(p => new THREE.Vector3(...p))
    );

    return new THREE.Mesh(
        new THREE.TubeGeometry(curve, 20, 0.018, 8, false),
        mouthMaterial
    );
}

const smile = createMouthCurve([
    [-0.13, -0.17, 0.305],
    [-0.07, -0.21, 0.325],
    [0, -0.22, 0.33],
    [0.07, -0.21, 0.325],
    [0.13, -0.17, 0.305]
]);

head.add(smile);

const worriedMouth = createMouthCurve([
    [-0.12, -0.22, 0.30],
    [-0.06, -0.18, 0.32],
    [0, -0.17, 0.33],
    [0.06, -0.18, 0.32],
    [0.12, -0.22, 0.30]
]);

head.add(worriedMouth);

const openMouth = addMesh(
    head,
    new THREE.SphereGeometry(0.065, 24, 24),
    mouthMaterial,
    [0, -0.21, 0.32],
    [0.85, 1.2, 0.3]
);

// =====================================================
// EXPRESSION CONTROLS
// =====================================================

let currentExpression = "normal";

function setExpression(type) {
    currentExpression = type;

    smile.visible = false;
    worriedMouth.visible = false;
    openMouth.visible = false;

    leftEye.scale.set(1, 1, 1);
    rightEye.scale.set(1, 1, 1);

    leftEyebrow.rotation.z = 0;
    rightEyebrow.rotation.z = 0;

    if (type === "normal") {
        smile.visible = true;
        leftEyebrow.position.y = 0.19;
        rightEyebrow.position.y = 0.19;

    } else if (type === "warning") {
        worriedMouth.visible = true;
        leftEyebrow.position.y = 0.22;
        rightEyebrow.position.y = 0.22;
        leftEyebrow.rotation.z = -0.25;
        rightEyebrow.rotation.z = 0.25;

    } else if (type === "emergency") {
        openMouth.visible = true;
        leftEye.scale.y = 1.45;
        rightEye.scale.y = 1.45;
        leftEyebrow.position.y = 0.25;
        rightEyebrow.position.y = 0.25;
    }
}

setExpression("normal");

// =====================================================
// HELMET
// =====================================================

const helmet = new THREE.Group();
helmet.position.y = 0.35;
head.add(helmet);

addMesh(
    helmet,
    new THREE.SphereGeometry(
        0.48, 40, 24, 0, Math.PI * 2, 0, Math.PI / 2
    ),
    yellow,
    [0, 0.05, 0],
    [1, 0.85, 0.9]
);

addMesh(
    helmet,
    new THREE.CylinderGeometry(0.57, 0.57, 0.07, 48),
    yellow,
    [0, 0.03, 0],
    [1, 1, 0.9]
);

addMesh(
    helmet,
    new THREE.BoxGeometry(0.65, 0.06, 0.23),
    yellow,
    [0, 0.02, 0.43]
);

addMesh(
    helmet,
    new THREE.BoxGeometry(0.20, 0.12, 0.18),
    dark,
    [0, 0.43, 0]
);

// =====================================================
// ARMS
// =====================================================

function createArm(side) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.48, 0.38, 0);
    worker.add(arm);

    addMesh(
        arm,
        new THREE.CylinderGeometry(0.13, 0.15, 0.55, 20),
        shirt,
        [0, -0.25, 0]
    );

    addMesh(
        arm,
        new THREE.CylinderGeometry(0.145, 0.145, 0.08, 20),
        reflective,
        [0, -0.38, 0]
    );

    addMesh(
        arm,
        new THREE.CylinderGeometry(0.11, 0.13, 0.42, 20),
        shirt,
        [0, -0.72, 0]
    );

    addMesh(
        arm,
        new THREE.SphereGeometry(0.13, 20, 20),
        gloveMaterial,
        [0, -0.99, 0]
    );

    return arm;
}

const leftArm = createArm(-1);
const rightArm = createArm(1);

// =====================================================
// HAMMER IN RIGHT HAND
// =====================================================

const hammer = new THREE.Group();
hammer.position.set(0, -0.99, 0.13);
hammer.rotation.z = -0.12;
rightArm.add(hammer);

const hammerHandleMaterial = new THREE.MeshStandardMaterial({
    color: "#8b5a2b",
    roughness: 0.85
});

const hammerMetalMaterial = new THREE.MeshStandardMaterial({
    color: "#9ca3af",
    metalness: 0.75,
    roughness: 0.3
});

// Wooden handle
addMesh(
    hammer,
    new THREE.CylinderGeometry(0.045, 0.055, 0.78, 16),
    hammerHandleMaterial,
    [0, -0.34, 0]
);

// Metal head
addMesh(
    hammer,
    new THREE.BoxGeometry(0.48, 0.16, 0.19),
    hammerMetalMaterial,
    [0, 0.12, 0]
);

// Striking face
addMesh(
    hammer,
    new THREE.BoxGeometry(0.12, 0.20, 0.21),
    hammerMetalMaterial,
    [-0.23, 0.12, 0]
);

// =====================================================
// LEGS
// =====================================================

function createLeg(side) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.23, -0.48, 0);
    worker.add(leg);

    addMesh(
        leg,
        new THREE.CylinderGeometry(0.18, 0.16, 0.65, 20),
        trousers,
        [0, -0.30, 0]
    );

    addMesh(
        leg,
        new THREE.CylinderGeometry(0.14, 0.13, 0.55, 20),
        trousers,
        [0, -0.87, 0]
    );

    addMesh(
        leg,
        new THREE.BoxGeometry(0.30, 0.20, 0.48),
        bootsMaterial,
        [0, -1.22, 0.10]
    );

    return leg;
}

const leftLeg = createLeg(-1);
const rightLeg = createLeg(1);

// =====================================================
// CONSTRUCTION SITE FLOOR
// =====================================================

const floorY = -0.42;

const floorMaterial = new THREE.MeshStandardMaterial({
    color: "#77736b",
    roughness: 1
});

const floor = addMesh(
    scene,
    new THREE.PlaneGeometry(14, 10),
    floorMaterial,
    [0, floorY - 0.025, 0]
);

floor.rotation.x = -Math.PI / 2;

// Floor grid
const grid = new THREE.GridHelper(
    14,
    28,
    "#475569",
    "#334155"
);

grid.position.y = floorY;
scene.add(grid);

// =====================================================
// CONSTRUCTION OBJECT MATERIALS
// =====================================================

const coneOrange = new THREE.MeshStandardMaterial({
    color: "#f97316",
    roughness: 0.8
});

const coneWhite = new THREE.MeshStandardMaterial({
    color: "#f8fafc",
    roughness: 0.8
});

const brickMaterial = new THREE.MeshStandardMaterial({
    color: "#9a4934",
    roughness: 1
});

const woodMaterial = new THREE.MeshStandardMaterial({
    color: "#9a6a3a",
    roughness: 1
});

const toolboxMaterial = new THREE.MeshStandardMaterial({
    color: "#2563eb",
    roughness: 0.65
});

const toolboxDark = new THREE.MeshStandardMaterial({
    color: "#1e293b",
    metalness: 0.35,
    roughness: 0.6
});

// =====================================================
// SAFETY CONES
// =====================================================

function createSafetyCone(x, z) {
    const cone = new THREE.Group();

    addMesh(
        cone,
        new THREE.CylinderGeometry(0.22, 0.22, 0.07, 24),
        coneOrange,
        [0, 0.035, 0]
    );

    addMesh(
        cone,
        new THREE.CylinderGeometry(0.045, 0.16, 0.43, 24),
        coneOrange,
        [0, 0.285, 0]
    );

    addMesh(
        cone,
        new THREE.CylinderGeometry(0.075, 0.095, 0.075, 24),
        coneWhite,
        [0, 0.28, 0]
    );

    cone.position.set(x, floorY, z);
    scene.add(cone);
}

createSafetyCone(-2.15, 0.9);
createSafetyCone(2.15, -0.8);

// =====================================================
// STACKED BRICKS
// =====================================================

const brickPositions = [
    [-2.15, 0.13, -0.55],
    [-1.62, 0.13, -0.55],
    [-2.15, 0.13, -0.25],
    [-1.62, 0.13, -0.25],
    [-1.88, 0.39, -0.40]
];

brickPositions.forEach((position, index) => {
    const brick = addMesh(
        scene,
        new THREE.BoxGeometry(0.48, 0.24, 0.26),
        brickMaterial,
        position
    );

    brick.rotation.y = index % 2 === 0 ? 0.04 : -0.04;
});

// =====================================================
// WOODEN PLANKS
// =====================================================

const plank1 = addMesh(
    scene,
    new THREE.BoxGeometry(1.35, 0.09, 0.22),
    woodMaterial,
    [2.05, floorY + 0.045, 0.35]
);

plank1.rotation.y = -0.18;

const plank2 = addMesh(
    scene,
    new THREE.BoxGeometry(1.15, 0.09, 0.20),
    woodMaterial,
    [2.0, floorY + 0.14, 0.35]
);

plank2.rotation.y = -0.12;

// =====================================================
// TOOLBOX
// =====================================================

const toolbox = new THREE.Group();

addMesh(
    toolbox,
    new THREE.BoxGeometry(0.72, 0.42, 0.42),
    toolboxMaterial,
    [0, 0.21, 0]
);

addMesh(
    toolbox,
    new THREE.BoxGeometry(0.76, 0.07, 0.46),
    toolboxDark,
    [0, 0.43, 0]
);

// Handle
addMesh(
    toolbox,
    new THREE.BoxGeometry(0.25, 0.07, 0.08),
    toolboxDark,
    [0, 0.51, 0]
);

// Front latch
addMesh(
    toolbox,
    new THREE.BoxGeometry(0.10, 0.12, 0.035),
    yellow,
    [0, 0.30, 0.22]
);

toolbox.position.set(1.65, floorY, 1.45);
scene.add(toolbox);

// =====================================================
// ALERT SYSTEM
// =====================================================

function showAlert(message, type) {
    alertBox.textContent = message;

    if (type === "danger") {
        alertBox.style.background = "#7f1d1d";
        alertBox.style.color = "#fee2e2";

    } else if (type === "warning") {
        alertBox.style.background = "#713f12";
        alertBox.style.color = "#fef3c7";

    } else {
        alertBox.style.background = "#174d45";
        alertBox.style.color = "#d1fae5";
    }
}

// =====================================================
// PYTHON COMMUNICATION
// =====================================================

function sendAction(action, extra = {}) {
    Streamlit.setComponentValue({
        action,
        ...extra,
        timestamp: Date.now()
    });
}

// =====================================================
// ANIMATION STATE
// =====================================================

let targetRotationZ = 0;
let targetPositionY = 1.4;
let targetHeadRotation = 0;

function resetPose() {
    targetRotationZ = 0;
    targetPositionY = 1.4;
    targetHeadRotation = 0;

    worker.rotation.x = 0;

    leftArm.rotation.z = 0;
    rightArm.rotation.z = 0;

    leftLeg.rotation.z = 0;
    rightLeg.rotation.z = 0;

    setExpression("normal");
}

// =====================================================
// HELMET CONTROLS
// =====================================================

document.getElementById("remove").onclick = () => {
    helmet.visible = false;
    setExpression("warning");
    showAlert("ALERT: HELMET REMOVED!", "warning");
    sendAction("remove");
};

document.getElementById("wear").onclick = () => {
    helmet.visible = true;
    setExpression("normal");
    showAlert("NORMAL: HELMET WORN.", "normal");
    sendAction("wear");
};

// =====================================================
// TILT CONTROLS
// =====================================================

document.getElementById("left").onclick = () => {
    targetRotationZ = 0.45;
    targetHeadRotation = 0.2;

    setExpression("warning");
    showAlert("CAUTION: WORKER TILTED LEFT.", "warning");
    sendAction("left", { tilt: 25 });
};

document.getElementById("right").onclick = () => {
    targetRotationZ = -0.45;
    targetHeadRotation = -0.2;

    setExpression("warning");
    showAlert("CAUTION: WORKER TILTED RIGHT.", "warning");
    sendAction("right", { tilt: -25 });
};

// =====================================================
// FALL ANIMATION
// =====================================================

document.getElementById("fall").onclick = () => {
    targetRotationZ = Math.PI / 2;
    targetPositionY = 0.1;

    leftArm.rotation.z = 0.5;
    rightArm.rotation.z = -0.5;

    leftLeg.rotation.z = 0.3;
    rightLeg.rotation.z = -0.3;

    setExpression("emergency");

    showAlert(
        "EMERGENCY: POSSIBLE WORKER FALL!",
        "danger"
    );

    sendAction("fall", { tilt: 90 });
};

// =====================================================
// RESET
// =====================================================

document.getElementById("reset").onclick = () => {
    helmet.visible = true;
    resetPose();

    showAlert("NORMAL: WORKER RESET.", "normal");
    sendAction("reset", { tilt: 0 });
};

// =====================================================
// MOUSE ROTATION AND TILT
// =====================================================

let dragging = false;
let previousX = 0;
let previousY = 0;

let lastTiltSent = -999;
let lastTiltSentAt = 0;

viewer.addEventListener("pointerdown", event => {
    dragging = true;

    previousX = event.clientX;
    previousY = event.clientY;

    viewer.setPointerCapture(event.pointerId);
});

viewer.addEventListener("pointermove", event => {
    if (!dragging) return;

    const dx = event.clientX - previousX;
    const dy = event.clientY - previousY;

    worker.rotation.y += dx * 0.01;
    worker.rotation.x += dy * 0.01;

    worker.rotation.x = THREE.MathUtils.clamp(
        worker.rotation.x,
        -0.8,
        0.8
    );

    previousX = event.clientX;
    previousY = event.clientY;

    const tilt = THREE.MathUtils.radToDeg(
        worker.rotation.x
    );

    const now = Date.now();

    if (
        Math.abs(tilt - lastTiltSent) >= 3 &&
        now - lastTiltSentAt >= 300
    ) {
        lastTiltSent = tilt;
        lastTiltSentAt = now;

        if (Math.abs(tilt) >= 20) {
            setExpression("warning");
        } else {
            setExpression("normal");
        }

        sendAction("mouse_tilt", {
            tilt: Number(tilt.toFixed(1))
        });
    }
});

viewer.addEventListener("pointerup", () => {
    dragging = false;
});

viewer.addEventListener("pointercancel", () => {
    dragging = false;
});

// =====================================================
// ZOOM
// =====================================================

viewer.addEventListener("wheel", event => {
    camera.position.z += event.deltaY * 0.005;

    camera.position.z = THREE.MathUtils.clamp(
        camera.position.z,
        4,
        12
    );
});

// =====================================================
// ANIMATION LOOP
// =====================================================

let blinkTimer = 0;
let nextBlink = 2.5;
let blinking = false;

function animate() {
    requestAnimationFrame(animate);

    worker.rotation.z = THREE.MathUtils.lerp(
        worker.rotation.z,
        targetRotationZ,
        0.08
    );

    worker.position.y = THREE.MathUtils.lerp(
        worker.position.y,
        targetPositionY,
        0.08
    );

    head.rotation.y = THREE.MathUtils.lerp(
        head.rotation.y,
        targetHeadRotation,
        0.08
    );

    // Natural blinking
    blinkTimer += 1 / 60;

    if (!blinking && blinkTimer >= nextBlink) {
        blinking = true;
        leftEye.scale.y = 0.08;
        rightEye.scale.y = 0.08;
    }

    if (blinking && blinkTimer >= nextBlink + 0.15) {
        blinking = false;

        leftEye.scale.y =
            currentExpression === "emergency" ? 1.45 : 1;

        rightEye.scale.y =
            currentExpression === "emergency" ? 1.45 : 1;

        nextBlink = blinkTimer + 2 + Math.random() * 3;
    }

    renderer.render(scene, camera);
}

animate();

// =====================================================
// RESPONSIVE VIEWER
// =====================================================

const resizeObserver = new ResizeObserver(() => {
    const width = viewer.clientWidth;
    const height = viewer.clientHeight;

    if (width === 0 || height === 0) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

resizeObserver.observe(viewer);

// =====================================================
// STREAMLIT CONNECTION
// =====================================================

Streamlit.events.addEventListener(
    Streamlit.RENDER_EVENT,
    () => {
        Streamlit.setFrameHeight(600);
    }
);

Streamlit.setComponentReady();
Streamlit.setFrameHeight(600);
