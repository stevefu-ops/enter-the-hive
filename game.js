/**
 * ENTER THE HIVE / 蜂巢突破 - Tactical Cyber Puzzle Engine
 * Grid: 9 Columns (0..8) x 6 Rows (0..5)
 * Goal: Entire Top Baseline (Row Y=5) - Both operatives must cross over to win!
 * 
 * Features:
 *  1. Bilingual Localization (Chinese Default, One-Click Switch to English)
 *  2. 3D Isometric Platform Extrusion, Multi-Faceted Shading & Cyber Pedestals
 *  3. Dynamic Step Refund on Backtracking & Free Crystal Shifting
 *  4. Permanent Gate & Defuser Elimination
 */

// Synthesized Audio FX via Web Audio API
class SoundFx {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }
  playMove() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playStepBack() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(700, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(420, this.ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }
  playShift() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(360, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playDefuse() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      gain.gain.setValueAtTime(0.15, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.05 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.25);
    });
  }
  playSwitch() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.setValueAtTime(750, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playWin() {
    this.init();
    if (!this.ctx) return;
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.5];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.4);
    });
  }
  playFail() {
    this.init();
    if (!this.ctx) return;
    const notes = [300, 260, 220, 180];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.12 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.12);
      osc.stop(this.ctx.currentTime + i * 0.12 + 0.3);
    });
  }
  playAttack() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(220, now);
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.18);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(700, now + 0.12);
    osc2.frequency.exponentialRampToValueAtTime(140, now + 0.35);
    gain2.gain.setValueAtTime(0.25, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.38);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 0.4);
  }
  playThrust() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(540, now + 0.12);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }
}

const sfx = new SoundFx();

// Complete Bilingual Localization Dictionary
const I18N = {
  zh: {
    brand: "蜂巢突破",
    langBtn: "EN / 中文",
    playbookBtn: "战术手册",
    resetBtn: "重置 (R)",
    goalBanner: "▲ 蜂巢入口底线（主角与守卫必须双双抵达第5行）▲",
    stepsLabel: "当前特工剩余步数:",
    activeCharMc: "主角 (推移者)",
    activeCharGuard: "守卫 (拆弹者)",
    hints: [
      "[点击角色/Tab] 切换特工",
      "[W/A/S/D/点击] 移动 (后退返步)",
      "[E / 点击晶石] 推移晶石 (免费0步)"
    ],
    panelHeader: "参战特工",
    guardRole: "守卫 (拆弹者)",
    guardDescDefault: "解除安全阻挡门",
    guardDescSecured: "✔ 已达蜂巢底线",
    mcRole: "主角 (推移者)",
    mcDescDefault: "推移晶石障碍 (免费0步)",
    mcDescSecured: "✔ 已达蜂巢底线",
    actionTipReady: "就绪：点击棋盘上特工可直接切换控制。双人均须抵达第5行。",
    actionTipCrystal: "✔ 相邻晶石在射程内：直接点击晶石或按 [E] 推移晶石 (免费0步)",
    actionTipDefuser: "⚡ 踩在拆除节点上：对应闸门已永久解除！",
    actionTipGuardWalk: "踩在拆除节点上消灭闸门。两名特工均须到达第5行。",
    legendTitle: "战场情报与装置",
    legendDefuser: "<b>拆除节点 (金字塔)</b>: 守卫触发永久消除对应门",
    legendBlocker: "<b>阻挡门 (闸门)</b>: 无法通行，需守卫拆除",
    legendShifter: "<b>晶石 (推移块)</b>: 主角可推入空位 (免费0步)",
    legendWall: "<b>激光阻隔网</b>: 边界高危防御设施",
    playbookTitle: "⬢ 战术渗透作战手册",
    playbookObjectiveTitle: "🎯 作战目标（双人全员撤离）",
    playbookObjectiveBody: "<b>主角 (MC) 与守卫 (Guard) 两名特工</b>必须全部成功抵达<b>蜂巢入口目标底线（整条第5行）</b>方可判定任务通关。",
    playbookRolesTitle: "👥 特工分工与核心机制",
    playbookRolesList: [
      "<b>点击自由切换</b>: 直接点击棋盘上的特工棋子，即可立即切换当前操作主角或守卫。",
      "<b>永久拆除</b>: 守卫踩上拆除节点后，节点与对应闸门将永久消除。即使后续后退返还步数，已拆除的门也不会复原！",
      "<b>免费推移</b>: 主角推移/推动晶石消耗 <b>0 步（完全免费）</b>。",
      "🔄 <b>后退即刻返步</b>: 沿原路后退一步，立即自动返还 1 步能量计数。"
    ],
    playbookControlsTitle: "🎮 战术操作指令",
    playbookControlsList: [
      "• <b>切换特工</b>: 点击棋盘特工、点击右侧特工卡片，或按 [Tab] / [空格键]。",
      "• <b>移动</b>: 点击相邻高亮地块，或按 [W][A][S][D] / 方向键（绿色圆点标记后退返步位置）。",
      "• <b>推移晶石</b>: 主角与晶石相邻时，直接点击晶石地块或按 [E]（消耗0步）。",
      "• <b>战术重置</b>: 任何时候按 [R] 均可立即重置当前关卡布局。"
    ],
    playbookBtnGotIt: "进入战场 (ENGAGE)",
    winTitle: "防区突破成功！",
    winDesc: (sec, mcSteps, guardSteps) => `两名特工成功突入蜂巢第 ${sec} 防区！（步数消耗: 主角 ${mcSteps} 步 / 守卫 ${guardSteps} 步）`,
    allClearedTitle: "全域攻破！战役达成",
    allClearedDesc: (total) => `恭喜指挥官！您已成功指挥特工突入全部 ${total} 个蜂巢防区，完成了整场战役！<br><br><span style="color:var(--accent-green);font-weight:600;font-size:15px;">是否从第1防区重新发起全局挑战？</span>`,
    energyDepletedTitle: "特工能量耗尽",
    energyDepletedDesc: "两名特工在共同抵达蜂巢底线前耗尽了7步能量储备。后退返步或按 [R] 重新制定战术！",
    btnNextLevel: "下一防区",
    btnReattempt: "重新挑战 (第1防区)",
    btnRetry: "重试当前防区 (R)",
    btnReplayFinal: "重玩第5防区",
    canvasGoal: "▲ 蜂巢入口目标线 ▲",
    canvasSecured: "✔ 已抵达"
  },
  en: {
    brand: "ENTER THE HIVE",
    langBtn: "中文 / EN",
    playbookBtn: "Playbook",
    resetBtn: "Reset (R)",
    goalBanner: "▲ HIVE ENTRANCE BASELINE (BOTH MC & GUARD MUST REACH ROW 5) ▲",
    stepsLabel: "ACTIVE AGENT STEPS:",
    activeCharMc: "MC (Shifter)",
    activeCharGuard: "Guard (Defuser)",
    hints: [
      "[Click Character / Tab] Switch",
      "[W/A/S/D / Click] Move (Step back to refund)",
      "[E / Click Crystal] Shift Crystal (FREE)"
    ],
    panelHeader: "OPERATIVES",
    guardRole: "DEFUSER (Guard)",
    guardDescDefault: "Deactivates Barrier Gates",
    guardDescSecured: "✔ AT HIVE LINE",
    mcRole: "SHIFTER (MC)",
    mcDescDefault: "Shifts Crystals (Free 0-step)",
    mcDescSecured: "✔ AT HIVE LINE",
    actionTipReady: "Ready: Click on operatives on board to switch directly. Both must reach Row 5.",
    actionTipCrystal: "✔ Adjacent Crystal in range: Click crystal directly or press [E] to push (FREE)",
    actionTipDefuser: "⚡ On Defuser Node: Gate permanently destroyed!",
    actionTipGuardWalk: "Step on Defusers to eliminate gates. Both operatives must reach Row 5.",
    legendTitle: "FIELD INTEL & OBJECTS",
    legendDefuser: "<b>Defuser (Pyramid)</b>: Guard eliminates matching gate permanently",
    legendBlocker: "<b>Blocker (Gate)</b>: Impassable barrier, destroyed via Defuser",
    legendShifter: "<b>Shifter (Crystal)</b>: MC pushes into vacant space (FREE)",
    legendWall: "<b>Laser Wall</b>: Impassable perimeter security barrier",
    playbookTitle: "⬢ INFILTRATION PLAYBOOK",
    playbookObjectiveTitle: "🎯 MISSION OBJECTIVE (DUAL EXTRACTION)",
    playbookObjectiveBody: "<b>BOTH MC and Guard</b> must successfully cross to the <b>Hive Entrance Baseline (Entire Row 5)</b> to win the mission.",
    playbookRolesTitle: "👥 OPERATIVE ROLES & RULES",
    playbookRolesList: [
      "<b>Click to Select</b>: Click directly on MC or Guard on the game board to instantly select and switch control.",
      "<b>Permanent Defusal</b>: Once a Defuser is triggered, both the Defuser and its linked Blocker gate are permanently eliminated. Stepping back refunds steps while leaving gates open!",
      "<b>Free Shifting</b>: MC pushing or shifting crystals costs <b>0 steps (FREE)</b>.",
      "🔄 <b>Step Back to Refund</b>: Backtracking to your immediately previous space automatically refunds 1 step."
    ],
    playbookControlsTitle: "🎮 TACTICAL CONTROLS",
    playbookControlsList: [
      "• <b>Switch Operative</b>: Click operative tokens on the board, click right HUD cards, or press [Tab] / [Space].",
      "• <b>Move</b>: Click any adjacent highlighted tile or press [W][A][S][D] / Arrow keys (green dots indicate backtrack refund spots).",
      "• <b>Shift Crystal</b>: As MC adjacent to a crystal, click the crystal tile directly or press [E] (Costs 0 steps).",
      "• <b>Reset</b>: Press [R] anytime to reboot tactical layout."
    ],
    playbookBtnGotIt: "ENGAGE MISSION",
    winTitle: "MISSION ACCOMPLISHED!",
    winDesc: (sec, mcSteps, guardSteps) => `Both MC & Guard crossed into the Hive in Sector ${sec}! (Steps used: MC ${mcSteps} / Guard ${guardSteps})`,
    allClearedTitle: "ALL SECTORS CLEARED!",
    allClearedDesc: (total) => `CONGRATULATIONS! You have successfully guided both operatives through all ${total} defense sectors and fully breached the Hive!<br><br><span style="color:var(--accent-green);font-weight:600;font-size:15px;">Would you like to reattempt the game from Sector 1?</span>`,
    energyDepletedTitle: "ENERGY DEPLETED",
    energyDepletedDesc: "Both operatives exhausted their 7-step energy budgets before reaching the Hive finish line together. Step back or press R to reboot tactics!",
    btnNextLevel: "NEXT LEVEL",
    btnReattempt: "REATTEMPT GAME",
    btnRetry: "RETRY (R)",
    btnReplayFinal: "REPLAY SECTOR 5",
    canvasGoal: "▲ HIVE ENTRANCE BASELINE (GOAL) ▲",
    canvasSecured: "✔ SECURED"
  }
};

// 5 Balanced, Solvable & Engaging Levels with Bilingual Metadata
const LEVELS = [
  {
    id: 1,
    name: "Sector 1: Dual Breach",
    nameZh: "第1防区：双核协同",
    goalRow: 5,
    mcStart: { x: 3, y: 0 },
    guardStart: { x: 6, y: 0 },
    walls: [
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 7, y: 3 }, { x: 8, y: 3 }
    ],
    shifters: [
      { id: 's1', x: 6, y: 2 }
    ],
    defusers: [
      { id: 'd1', x: 6, y: 3, linkedBlockerId: 'b1', defused: false }
    ],
    blockers: [
      { id: 'b1', x: 3, y: 4, active: true, defused: false }
    ]
  },
  {
    id: 2,
    name: "Sector 2: Crossed Corridors",
    nameZh: "第2防区：交错走廊",
    goalRow: 5,
    mcStart: { x: 2, y: 0 },
    guardStart: { x: 6, y: 0 },
    walls: [
      { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 7, y: 2 }, { x: 8, y: 2 },
      { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 7, y: 4 }, { x: 8, y: 4 },
      { x: 4, y: 2 }, { x: 4, y: 3 }
    ],
    shifters: [
      { id: 's1', x: 6, y: 1 }
    ],
    defusers: [
      { id: 'd1', x: 6, y: 2, linkedBlockerId: 'b1', defused: false }
    ],
    blockers: [
      { id: 'b1', x: 2, y: 4, active: true, defused: false }
    ]
  },
  {
    id: 3,
    name: "Sector 3: The Switchback",
    nameZh: "第3防区：双翼迂回",
    goalRow: 5,
    mcStart: { x: 4, y: 0 },
    guardStart: { x: 6, y: 0 },
    walls: [
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 7, y: 3 }, { x: 8, y: 3 },
      { x: 3, y: 4 }, { x: 5, y: 4 }
    ],
    shifters: [
      { id: 's1', x: 4, y: 2 }
    ],
    defusers: [
      { id: 'd1', x: 2, y: 2, linkedBlockerId: 'b1', defused: false },
      { id: 'd2', x: 6, y: 2, linkedBlockerId: 'b2', defused: false }
    ],
    blockers: [
      { id: 'b1', x: 4, y: 4, active: true, defused: false },
      { id: 'b2', x: 2, y: 4, active: true, defused: false }
    ]
  },
  {
    id: 4,
    name: "Sector 4: Traffic Jam",
    nameZh: "第4防区：晶石狭道",
    goalRow: 5,
    mcStart: { x: 2, y: 0 },
    guardStart: { x: 5, y: 0 },
    walls: [
      { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 7, y: 2 }, { x: 8, y: 2 },
      { x: 0, y: 3 }, { x: 8, y: 3 },
      { x: 2, y: 4 }, { x: 4, y: 4 }, { x: 6, y: 4 }
    ],
    shifters: [
      { id: 's1', x: 3, y: 1 },
      { id: 's2', x: 5, y: 1 }
    ],
    defusers: [
      { id: 'd1', x: 5, y: 3, linkedBlockerId: 'b1', defused: false }
    ],
    blockers: [
      { id: 'b1', x: 3, y: 3, active: true, defused: false }
    ]
  },
  {
    id: 5,
    name: "Sector 5: Hive Core Breach",
    nameZh: "第5防区：蜂巢核心突破",
    goalRow: 5,
    mcStart: { x: 3, y: 0 },
    guardStart: { x: 5, y: 0 },
    walls: [
      { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 7, y: 2 }, { x: 8, y: 2 },
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 7, y: 3 }, { x: 8, y: 3 },
      { x: 3, y: 4 }, { x: 5, y: 4 }
    ],
    shifters: [
      { id: 's1', x: 3, y: 2 },
      { id: 's2', x: 5, y: 2 }
    ],
    defusers: [
      { id: 'd1', x: 2, y: 3, linkedBlockerId: 'b1', defused: false },
      { id: 'd2', x: 6, y: 3, linkedBlockerId: 'b2', defused: false }
    ],
    blockers: [
      { id: 'b1', x: 4, y: 3, active: true, defused: false },
      { id: 'b2', x: 4, y: 4, active: true, defused: false }
    ]
  }
];

/**
 * High-Definition Tactical Action Monitor for Hive Guard
 * Renders IDLE, WALK, and ATTACK sequences with dynamic cyber lighting, 
 * particle physics, volumetric shadows, wing articulation, and screen shake.
 */
class ActionStageRenderer {
  constructor(canvasId, game) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.game = game;
    this.state = 'idle'; // 'idle' | 'walk' | 'attack'
    this.stateTimer = 0;
    this.stateDuration = 0;
    this.animTime = 0;
    this.attackPhase = 0;
    this.attackElapsed = 0;
    this.shake = { x: 0, y: 0, timer: 0, intensity: 0 };

    // High-resolution sprite
    this.sprite = new Image();
    this.sprite.src = 'assets/hive_guard_front.png';
    this.spriteLoaded = false;
    this.sprite.onload = () => {
      this.spriteLoaded = true;
    };

    // Ambient floating particles
    this.ambientParticles = [];
    for (let i = 0; i < 28; i++) {
      this.ambientParticles.push({
        x: Math.random() * 340,
        y: Math.random() * 340,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.4 - Math.random() * 0.8,
        size: 1.5 + Math.random() * 2.5,
        life: Math.random(),
        decay: 0.006 + Math.random() * 0.008,
        color: Math.random() > 0.4 ? '#00f2fe' : '#ffb800'
      });
    }

    // Dynamic particle bursts for walk/attack
    this.fxParticles = [];

    // Speedlines for walk
    this.speedlines = [];

    // Slash arcs for attack
    this.slashArcs = [];

    // DOM References
    this.badgeEl = document.getElementById('anim-state-badge');
    this.btnIdle = document.getElementById('btn-anim-idle');
    this.btnWalk = document.getElementById('btn-anim-walk');
    this.btnAttack = document.getElementById('btn-anim-attack');
    this.monitorTitleText = document.getElementById('monitor-title-text');
    this.labelIdle = document.getElementById('label-anim-idle');
    this.labelWalk = document.getElementById('label-anim-walk');
    this.labelAttack = document.getElementById('label-anim-attack');

    this.setupListeners();
    this.updateHUD();
  }

  setupListeners() {
    if (this.btnIdle) {
      this.btnIdle.addEventListener('click', () => {
        this.setState('idle');
      });
    }
    if (this.btnWalk) {
      this.btnWalk.addEventListener('click', () => {
        this.triggerWalk(1.8);
        sfx.playThrust();
      });
    }
    if (this.btnAttack) {
      this.btnAttack.addEventListener('click', () => {
        this.triggerAttack(1.6);
        sfx.playAttack();
      });
    }
  }

  setState(newState, duration = 0) {
    this.state = newState;
    this.stateDuration = duration;
    this.stateTimer = duration;
    this.updateHUD();
  }

  triggerWalk(duration = 1.3) {
    this.setState('walk', duration);
    this.speedlines = [];
    for (let i = 0; i < 18; i++) {
      this.speedlines.push({
        x: Math.random() * 340,
        y: 40 + Math.random() * 260,
        len: 40 + Math.random() * 90,
        speed: 9 + Math.random() * 15,
        alpha: 0.3 + Math.random() * 0.6
      });
    }
  }

  triggerAttack(duration = 1.6) {
    this.setState('attack', duration);
    this.slashArcs = [];
    this.attackPhase = 0;
    this.attackElapsed = 0;
  }

  updateHUD() {
    if (!this.badgeEl) return;
    const isZh = (!this.game || this.game.lang === 'zh');
    this.badgeEl.className = 'state-badge';

    if (this.state === 'idle') {
      this.badgeEl.classList.add('badge-idle');
      this.badgeEl.innerText = isZh ? '待机警戒 (IDLE)' : 'IDLE';
    } else if (this.state === 'walk') {
      this.badgeEl.classList.add('badge-walk');
      this.badgeEl.innerText = isZh ? '巡航移动 (WALK)' : 'WALK';
    } else if (this.state === 'attack') {
      this.badgeEl.classList.add('badge-attack');
      this.badgeEl.innerText = isZh ? '攻坚突击 (ATTACK)' : 'ATTACK';
    }

    [this.btnIdle, this.btnWalk, this.btnAttack].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    if (this.state === 'idle' && this.btnIdle) this.btnIdle.classList.add('active');
    if (this.state === 'walk' && this.btnWalk) this.btnWalk.classList.add('active');
    if (this.state === 'attack' && this.btnAttack) this.btnAttack.classList.add('active');
  }

  updateLanguage(lang) {
    const isZh = (lang === 'zh');
    if (this.monitorTitleText) {
      this.monitorTitleText.innerText = isZh ? '战术动作监视 · HIVE GUARD' : 'TACTICAL MONITOR · HIVE GUARD';
    }
    if (this.labelIdle) this.labelIdle.innerText = isZh ? '待机' : 'Idle';
    if (this.labelWalk) this.labelWalk.innerText = isZh ? '行走' : 'Walk';
    if (this.labelAttack) this.labelAttack.innerText = isZh ? '攻击' : 'Attack';
    this.updateHUD();
  }

  update(dt = 0.016) {
    this.animTime += dt;

    // Countdown state duration
    if (this.stateTimer > 0) {
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) {
        this.setState('idle');
      }
    }

    // Screen shake decay
    if (this.shake.timer > 0) {
      this.shake.timer -= dt;
      const factor = Math.max(0, this.shake.timer / 0.35);
      const mag = this.shake.intensity * factor;
      this.shake.x = (Math.random() - 0.5) * mag;
      this.shake.y = (Math.random() - 0.5) * mag;
    } else {
      this.shake.x = 0;
      this.shake.y = 0;
    }

    // Ambient floating particles
    this.ambientParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0 || p.y < 10) {
        p.x = 40 + Math.random() * 260;
        p.y = 310 + Math.random() * 25;
        p.life = 1;
      }
    });

    // FX particles update
    for (let i = this.fxParticles.length - 1; i >= 0; i--) {
      const p = this.fxParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) {
        this.fxParticles.splice(i, 1);
      }
    }

    // Slash arcs update
    for (let i = this.slashArcs.length - 1; i >= 0; i--) {
      const s = this.slashArcs[i];
      s.life -= s.decay;
      if (s.life <= 0) {
        this.slashArcs.splice(i, 1);
      }
    }

    // Attack state sequencing
    if (this.state === 'attack') {
      this.attackElapsed = (this.stateDuration - this.stateTimer);
      // Phase 1: Trigger slashes at 0.28s
      if (this.attackElapsed >= 0.28 && this.attackPhase === 0) {
        this.attackPhase = 1;
        this.slashArcs.push({
          startAngle: -Math.PI * 0.75,
          endAngle: Math.PI * 0.25,
          radius: 88,
          color: '#00f2fe',
          glow: '#4facfe',
          life: 1.0,
          decay: 0.045,
          cx: 170,
          cy: 160
        });
        this.slashArcs.push({
          startAngle: Math.PI * 0.2,
          endAngle: Math.PI * 1.15,
          radius: 104,
          color: '#ffb800',
          glow: '#ff8800',
          life: 1.0,
          decay: 0.045,
          cx: 170,
          cy: 160
        });
      }
      // Phase 2: Impact shockwave & particles at 0.45s
      if (this.attackElapsed >= 0.45 && this.attackPhase === 1) {
        this.attackPhase = 2;
        this.shake.timer = 0.35;
        this.shake.intensity = 15;
        for (let k = 0; k < 36; k++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = 3 + Math.random() * 8.5;
          this.fxParticles.push({
            x: 170 + Math.cos(angle) * 15,
            y: 160 + Math.sin(angle) * 15,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            life: 1.0,
            decay: 0.024 + Math.random() * 0.03,
            size: 3 + Math.random() * 4,
            color: Math.random() > 0.45 ? '#00f2fe' : (Math.random() > 0.5 ? '#ffb800' : '#ff3366')
          });
        }
      }
    }

    // Walk state speedlines
    if (this.state === 'walk') {
      this.speedlines.forEach(l => {
        l.x -= l.speed;
        if (l.x + l.len < 0) {
          l.x = 340 + Math.random() * 30;
          l.y = 40 + Math.random() * 260;
        }
      });
      if (Math.random() < 0.6) {
        this.fxParticles.push({
          x: 170 - 25 + (Math.random() - 0.5) * 20,
          y: 205 + (Math.random() - 0.5) * 20,
          vx: -3.5 - Math.random() * 4.5,
          vy: (Math.random() - 0.5) * 2.2,
          life: 1.0,
          decay: 0.055,
          size: 2.5 + Math.random() * 2.5,
          color: '#00f2fe'
        });
      }
    }
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.save();
    ctx.clearRect(0, 0, w, h);

    // Camera shake translation
    if (this.shake.timer > 0) {
      ctx.translate(this.shake.x, this.shake.y);
    }

    const cx = w / 2;
    const cy = h * 0.52;

    // 1. Cyber Hexagonal & Radial Grid Backdrop
    this.drawCyberBackdrop(ctx, cx, cy);

    // 2. Ambient Floating Motes
    this.drawAmbientMotes(ctx);

    // 3. Walk Speedlines
    if (this.state === 'walk') {
      this.drawSpeedlines(ctx);
    }

    // 4. 3D Floating Cyber Pedestal Dais
    this.drawPedestal(ctx, cx, cy + 96);

    // 5. Render Character with Dynamic State Animations
    this.drawCharacter(ctx, cx, cy);

    // 6. Attack Slash Visual Effects & Shockwaves
    if (this.slashArcs.length > 0 || this.attackPhase >= 2) {
      this.drawAttackFX(ctx);
    }

    // 7. Dynamic FX Particles
    this.drawFXParticles(ctx);

    ctx.restore();
  }

  drawCyberBackdrop(ctx, cx, cy) {
    // Holographic concentric rings
    ctx.save();
    ctx.lineWidth = 1;
    [60, 110, 150].forEach((r, idx) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 242, 254, ${0.08 - idx * 0.02})`;
      ctx.stroke();
    });

    // Rotating radial ticks
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.animTime * 0.4);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.18)';
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(135, 0);
      ctx.lineTo(145, 0);
      ctx.stroke();
      ctx.rotate(Math.PI / 4);
    }
    ctx.restore();

    ctx.restore();
  }

  drawAmbientMotes(ctx) {
    ctx.save();
    this.ambientParticles.forEach(p => {
      ctx.globalAlpha = p.life * 0.7;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fill();
    });
    ctx.restore();
  }

  drawSpeedlines(ctx) {
    ctx.save();
    this.speedlines.forEach(l => {
      ctx.globalAlpha = l.alpha;
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + l.len, l.y);
      ctx.stroke();
    });
    ctx.restore();
  }

  drawPedestal(ctx, cx, cy) {
    ctx.save();

    // 1. Lower drop shadow on floor
    ctx.beginPath();
    ctx.ellipse(cx, cy + 18, 95, 26, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.fill();

    // 2. Base platform slab (3D thickness)
    ctx.beginPath();
    ctx.ellipse(cx, cy + 10, 85, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 18, 32, 0.95)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 3. Glowing upper dais
    ctx.beginPath();
    ctx.ellipse(cx, cy + 4, 78, 20, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 242, 254, 0.12)';
    ctx.fill();
    ctx.strokeStyle = this.state === 'attack' ? '#ff3366' : '#00f2fe';
    ctx.lineWidth = 2;
    ctx.shadowColor = this.state === 'attack' ? '#ff3366' : '#00f2fe';
    ctx.shadowBlur = 12;
    ctx.stroke();

    // 4. Rotating inner holographic energy ring
    ctx.save();
    ctx.translate(cx, cy + 4);
    ctx.scale(1, 0.26);
    ctx.rotate(this.animTime * 1.5);
    ctx.setLineDash([12, 10]);
    ctx.beginPath();
    ctx.arc(0, 0, 68, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 184, 0, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  }

  drawCharacter(ctx, cx, cy) {
    if (!this.spriteLoaded || !this.sprite) return;

    ctx.save();

    let hoverY = 0;
    let surgeX = 0;
    let tilt = 0;
    let scaleX = 1;
    let scaleY = 1;

    // Calculate motion variables by state
    if (this.state === 'idle') {
      hoverY = Math.sin(this.animTime * 2.6) * 9;
      scaleX = 1 + Math.sin(this.animTime * 2.6) * 0.025;
      scaleY = 1 - Math.sin(this.animTime * 2.6) * 0.015;
    } else if (this.state === 'walk') {
      hoverY = Math.sin(this.animTime * 8) * 7;
      surgeX = Math.sin(this.animTime * 8) * 8 + 14;
      tilt = 0.18; // ~10.3 degrees forward tilt
      scaleX = 0.97;
    } else if (this.state === 'attack') {
      if (this.attackElapsed < 0.28) {
        // Charging phase: pull back and expand wings
        const p = this.attackElapsed / 0.28;
        surgeX = -18 * p;
        hoverY = -14 * p;
        tilt = -0.12 * p;
        scaleX = 1 + 0.16 * p;
        scaleY = 1 + 0.08 * p;
      } else if (this.attackElapsed < 0.55) {
        // Strike phase: violent forward thrust
        const p = (this.attackElapsed - 0.28) / 0.27;
        surgeX = -18 + 58 * p;
        hoverY = -14 + 18 * p;
        tilt = -0.12 + 0.36 * p;
        scaleX = 1.16 - 0.12 * p;
      } else {
        // Recovery phase: return smoothly to neutral
        const p = Math.min(1, (this.attackElapsed - 0.55) / 1.05);
        const ease = 1 - Math.pow(1 - p, 3);
        surgeX = 40 * (1 - ease);
        hoverY = 4 * (1 - ease);
        tilt = 0.24 * (1 - ease);
        scaleX = 1.04 - 0.04 * ease;
      }
    }

    // Dynamic ground contact shadow scaling with height
    const shadowScale = Math.max(0.5, 1 - (hoverY / 35));
    ctx.beginPath();
    ctx.ellipse(cx + surgeX * 0.4, cy + 96, 55 * shadowScale, 14 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    // Radial Backlight Aura
    const auraGrad = ctx.createRadialGradient(cx + surgeX, cy - 20 + hoverY, 15, cx + surgeX, cy - 20 + hoverY, 120);
    if (this.state === 'attack') {
      auraGrad.addColorStop(0, 'rgba(255, 51, 102, 0.45)');
      auraGrad.addColorStop(0.5, 'rgba(0, 242, 254, 0.25)');
    } else {
      auraGrad.addColorStop(0, 'rgba(0, 242, 254, 0.35)');
      auraGrad.addColorStop(0.5, 'rgba(79, 172, 254, 0.15)');
    }
    auraGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(cx + surgeX, cy - 20 + hoverY, 120, 0, Math.PI * 2);
    ctx.fill();

    const charW = 186;
    const charH = (charW / this.sprite.naturalWidth) * this.sprite.naturalHeight;

    // Ghosting motion trails for Walk
    if (this.state === 'walk') {
      [18, 36].forEach((offset, idx) => {
        ctx.save();
        ctx.globalAlpha = 0.25 - idx * 0.12;
        ctx.translate(cx + surgeX - offset, cy + hoverY);
        ctx.rotate(tilt);
        ctx.drawImage(this.sprite, -charW / 2, -charH / 2 - 10, charW, charH);
        ctx.restore();
      });
    }

    // Main Character Rendering
    ctx.save();
    ctx.translate(cx + surgeX, cy + hoverY);
    ctx.rotate(tilt);
    ctx.scale(scaleX, scaleY);
    ctx.drawImage(this.sprite, -charW / 2, -charH / 2 - 10, charW, charH);

    // Glowing cyan eye dots on the character mask
    ctx.beginPath();
    ctx.arc(-5, -charH / 2 + 38, 2, 0, Math.PI * 2);
    ctx.arc(6, -charH / 2 + 38, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#00f2fe';
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 8;
    ctx.fill();

    // Glowing chest cavity core
    const corePulse = 0.5 + Math.sin(this.animTime * 4) * 0.4;
    ctx.beginPath();
    ctx.arc(0, -charH / 2 + 82, 5, 0, Math.PI * 2);
    ctx.fillStyle = this.state === 'attack' ? '#ff3366' : '#00f2fe';
    ctx.shadowColor = this.state === 'attack' ? '#ff3366' : '#00f2fe';
    ctx.shadowBlur = 12 * corePulse;
    ctx.fill();

    ctx.restore();

    // Scanning laser beam across character in Idle
    if (this.state === 'idle') {
      const scanY = cy - 80 + Math.sin(this.animTime * 2.2) * 90;
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(cx - 70, scanY);
      ctx.lineTo(cx + 70, scanY);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();
  }

  drawAttackFX(ctx) {
    ctx.save();

    // 1. Dual Curved Energy Claw Slash Arcs
    this.slashArcs.forEach(s => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.lineWidth = 7 * s.life;
      ctx.strokeStyle = s.color;
      ctx.shadowColor = s.glow;
      ctx.shadowBlur = 18;

      ctx.beginPath();
      ctx.arc(s.cx + 20, s.cy, s.radius, s.startAngle, s.endAngle);
      ctx.stroke();

      // Sharp blade flare cap
      const capX = (s.cx + 20) + Math.cos(s.endAngle) * s.radius;
      const capY = s.cy + Math.sin(s.endAngle) * s.radius;
      ctx.beginPath();
      ctx.arc(capX, capY, 8 * s.life, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.restore();
    });

    // 2. Expanding shockwave ring at impact
    if (this.attackPhase >= 2 && this.attackElapsed < 0.85) {
      const p = (this.attackElapsed - 0.45) / 0.4;
      const ringRadius = 20 + p * 110;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - p);
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 3.5 * (1 - p);
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(190, 160, ringRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();
  }

  drawFXParticles(ctx) {
    ctx.save();
    this.fxParticles.forEach(p => {
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * Math.max(0.2, p.life), 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
    });
    ctx.restore();
  }
}

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.currentLevelIdx = 0;
    this.activeRole = 'mc';
    this.maxSteps = 7;
    
    // Default language is Chinese ('zh') as requested
    this.lang = localStorage.getItem('hive_lang') || 'zh';
    
    this.hoverCell = null;
    this.particles = [];
    this.animTime = 0;

    // Load Hive Guard transparent sprite for chessboard & side monitor
    this.hiveGuardSprite = new Image();
    this.hiveGuardSprite.src = 'assets/hive_guard_front.png';

    // Initialize side tactical action showcase monitor
    this.actionStage = new ActionStageRenderer('charActionCanvas', this);

    this.initDOM();
    this.applyLanguage();
    this.loadLevel(this.currentLevelIdx);
    this.setupListeners();
    this.loop();
  }

  initDOM() {
    this.btnLang = document.getElementById('btn-lang');
    this.langLabel = document.getElementById('lang-label');
    this.brandTitle = document.getElementById('brand-title');
    this.navPlaybookText = document.getElementById('nav-playbook-text');
    this.navResetText = document.getElementById('nav-reset-text');
    this.levelTitle = document.getElementById('level-title');

    this.goalBannerText = document.getElementById('goal-banner-text');
    this.stepLabelText = document.getElementById('step-label-text');
    this.activeDiamonds = document.getElementById('active-step-diamonds');
    this.activeCharName = document.getElementById('active-char-name');
    this.controlHintsText = document.getElementById('control-hints-text');

    this.panelHeaderText = document.getElementById('panel-header-text');
    this.guardCard = document.getElementById('card-guard');
    this.mcCard = document.getElementById('card-mc');
    this.guardNameText = document.getElementById('guard-name-text');
    this.guardDescText = document.getElementById('guard-desc-text');
    this.mcNameText = document.getElementById('mc-name-text');
    this.mcDescText = document.getElementById('mc-desc-text');
    this.guardDiamonds = document.getElementById('guard-diamonds');
    this.mcDiamonds = document.getElementById('mc-diamonds');

    this.actionTip = document.getElementById('action-tip');

    this.legendTitleText = document.getElementById('legend-title-text');
    this.legendDefuserText = document.getElementById('legend-defuser-text');
    this.legendBlockerText = document.getElementById('legend-blocker-text');
    this.legendShifterText = document.getElementById('legend-shifter-text');
    this.legendWallText = document.getElementById('legend-wall-text');

    this.playbookModal = document.getElementById('playbook-modal');
    this.playbookModalTitle = document.getElementById('playbook-modal-title');
    this.playbookBodyContent = document.getElementById('playbook-body-content');
    this.btnGotIt = document.getElementById('btn-got-it');

    this.gameOverModal = document.getElementById('game-over-modal');
    this.gameOverTitle = document.getElementById('game-over-title');
    this.gameOverDesc = document.getElementById('game-over-desc');
    this.gameOverIcon = document.getElementById('game-over-icon');
    this.btnNextLevel = document.getElementById('btn-next-level');
    this.btnRetryLevel = document.getElementById('btn-retry-level');
  }

  toggleLanguage() {
    this.lang = this.lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('hive_lang', this.lang);
    this.applyLanguage();
    sfx.playSwitch();
  }

  applyLanguage() {
    const t = I18N[this.lang];
    if (this.langLabel) this.langLabel.innerText = t.langBtn;
    if (this.brandTitle) this.brandTitle.innerText = t.brand;
    if (this.navPlaybookText) this.navPlaybookText.innerText = t.playbookBtn;
    if (this.navResetText) this.navResetText.innerText = t.resetBtn;
    if (this.goalBannerText) this.goalBannerText.innerText = t.goalBanner;
    if (this.stepLabelText) this.stepLabelText.innerText = t.stepsLabel;
    if (this.panelHeaderText) this.panelHeaderText.innerText = t.panelHeader;
    if (this.guardNameText) this.guardNameText.innerText = t.guardRole;
    if (this.mcNameText) this.mcNameText.innerText = t.mcRole;

    if (this.controlHintsText) {
      this.controlHintsText.innerHTML = t.hints.map(h => `<span>${h}</span>`).join('');
    }

    if (this.legendTitleText) this.legendTitleText.innerText = t.legendTitle;
    if (this.legendDefuserText) this.legendDefuserText.innerHTML = t.legendDefuser;
    if (this.legendBlockerText) this.legendBlockerText.innerHTML = t.legendBlocker;
    if (this.legendShifterText) this.legendShifterText.innerHTML = t.legendShifter;
    if (this.legendWallText) this.legendWallText.innerHTML = t.legendWall;

    this.renderPlaybookContent();
    this.updateLevelTitle();
    if (this.actionStage) {
      this.actionStage.updateLanguage(this.lang);
    }
    if (this.state) {
      this.updateHUD();
      this.updateActionTip();
    }
  }

  renderPlaybookContent() {
    const t = I18N[this.lang];
    if (this.playbookModalTitle) this.playbookModalTitle.innerText = t.playbookTitle;
    if (this.btnGotIt) this.btnGotIt.innerText = t.playbookBtnGotIt;
    if (this.playbookBodyContent) {
      this.playbookBodyContent.innerHTML = `
        <div class="guide-sec">
          <h3>${t.playbookObjectiveTitle}</h3>
          <p>${t.playbookObjectiveBody}</p>
        </div>
        <div class="guide-sec">
          <h3>${t.playbookRolesTitle}</h3>
          <ul>
            ${t.playbookRolesList.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="guide-sec">
          <h3>${t.playbookControlsTitle}</h3>
          ${t.playbookControlsList.map(item => `<p>${item}</p>`).join('')}
        </div>
      `;
    }
  }

  updateLevelTitle() {
    const lvl = LEVELS[this.currentLevelIdx];
    if (this.levelTitle) {
      if (this.lang === 'zh') {
        this.levelTitle.innerText = lvl.nameZh || `第${lvl.id}防区`;
      } else {
        this.levelTitle.innerText = `Sector ${lvl.id}: ${lvl.name.split(': ')[1] || lvl.name}`;
      }
    }
  }

  loadLevel(idx) {
    const lvl = LEVELS[idx];
    this.currentLevelIdx = idx;
    this.activeRole = 'mc';
    
    this.state = {
      goalRow: lvl.goalRow || 5,
      mc: { 
        x: lvl.mcStart.x, 
        y: lvl.mcStart.y, 
        steps: this.maxSteps,
        atGoal: false,
        history: [{ x: lvl.mcStart.x, y: lvl.mcStart.y }]
      },
      guard: { 
        x: lvl.guardStart.x, 
        y: lvl.guardStart.y, 
        steps: this.maxSteps,
        atGoal: false,
        history: [{ x: lvl.guardStart.x, y: lvl.guardStart.y }]
      },
      walls: JSON.parse(JSON.stringify(lvl.walls || [])),
      shifters: JSON.parse(JSON.stringify(lvl.shifters)),
      defusers: JSON.parse(JSON.stringify(lvl.defusers)),
      blockers: JSON.parse(JSON.stringify(lvl.blockers)),
      isWon: false,
      isLost: false
    };

    this.updateLevelTitle();
    this.updateHUD();
    this.updateActionTip();
  }

  setupListeners() {
    this.btnLang.addEventListener('click', () => this.toggleLanguage());
    this.guardCard.addEventListener('click', () => this.switchRole('guard'));
    this.mcCard.addEventListener('click', () => this.switchRole('mc'));

    document.getElementById('btn-reset').addEventListener('click', () => this.resetLevel());
    document.getElementById('btn-playbook').addEventListener('click', () => this.openPlaybook());
    document.getElementById('btn-close-playbook').addEventListener('click', () => this.closePlaybook());
    document.getElementById('btn-got-it').addEventListener('click', () => this.closePlaybook());
    
    this.btnRetryLevel.addEventListener('click', () => {
      this.closeGameOver();
      this.resetLevel();
    });
    this.btnNextLevel.addEventListener('click', () => {
      this.closeGameOver();
      this.currentLevelIdx = (this.currentLevelIdx + 1) % LEVELS.length;
      this.loadLevel(this.currentLevelIdx);
    });
    document.getElementById('btn-level').addEventListener('click', () => {
      this.currentLevelIdx = (this.currentLevelIdx + 1) % LEVELS.length;
      this.loadLevel(this.currentLevelIdx);
    });

    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => { this.hoverCell = null; });
    this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));

    const getTouchPos = (touch) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const sx = (touch.clientX - rect.left) * scaleX;
      const sy = (touch.clientY - rect.top) * scaleY;
      return this.screenToGrid(sx, sy);
    };

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        this.hoverCell = getTouchPos(e.touches[0]);
      }
    }, { passive: true });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        this.hoverCell = getTouchPos(e.touches[0]);
      }
    }, { passive: true });

    this.canvas.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        this.hoverCell = getTouchPos(e.changedTouches[0]);
        this.handleCanvasClick(e);
      }
      setTimeout(() => { this.hoverCell = null; }, 200);
    }, { passive: true });

    window.addEventListener('keydown', (e) => {
      if (this.state.isWon || this.state.isLost) {
        if (e.key.toLowerCase() === 'r') {
          this.closeGameOver();
          this.resetLevel();
        }
        return;
      }

      if (e.key === 'Tab' || (e.code === 'Space' && e.target === document.body)) {
        e.preventDefault();
        this.switchRole(this.activeRole === 'mc' ? 'guard' : 'mc');
        return;
      }
      if (e.key.toLowerCase() === 'e') {
        this.handleActivation();
        return;
      }
      if (e.key.toLowerCase() === 'r') {
        this.resetLevel();
        return;
      }

      const activeChar = this.state[this.activeRole];
      let dx = 0, dy = 0;
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') dy = 1;
      else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') dy = -1;
      else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') dx = -1;
      else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') dx = 1;

      if (dx !== 0 || dy !== 0) {
        const targetX = activeChar.x + dx;
        const targetY = activeChar.y + dy;
        this.tryMoveOrInteract(targetX, targetY);
      }
    });
  }

  switchRole(role) {
    if (this.activeRole === role) return;
    this.activeRole = role;
    sfx.playSwitch();
    this.updateHUD();
    this.updateActionTip();
  }

  resetLevel() {
    this.loadLevel(this.currentLevelIdx);
  }

  openPlaybook() {
    this.renderPlaybookContent();
    this.playbookModal.classList.remove('hidden');
  }

  closePlaybook() {
    this.playbookModal.classList.add('hidden');
  }

  closeGameOver() {
    this.gameOverModal.classList.add('hidden');
  }

  updateHUD() {
    const t = I18N[this.lang];
    if (this.activeRole === 'mc') {
      this.mcCard.classList.add('active');
      this.guardCard.classList.remove('active');
      this.activeCharName.innerText = t.activeCharMc;
      this.activeCharName.style.color = "var(--accent-cyan)";
      this.activeCharName.style.borderColor = "var(--accent-cyan)";
    } else {
      this.guardCard.classList.add('active');
      this.mcCard.classList.remove('active');
      this.activeCharName.innerText = t.activeCharGuard;
      this.activeCharName.style.color = "var(--accent-gold)";
      this.activeCharName.style.borderColor = "var(--accent-gold)";
    }

    if (this.mcDescText) {
      this.mcDescText.innerHTML = (this.state.mc.y === this.state.goalRow) 
        ? `<span style="color:#00ff88;font-weight:bold;">${t.mcDescSecured}</span>` 
        : t.mcDescDefault;
    }
    if (this.guardDescText) {
      this.guardDescText.innerHTML = (this.state.guard.y === this.state.goalRow) 
        ? `<span style="color:#00ff88;font-weight:bold;">${t.guardDescSecured}</span>` 
        : t.guardDescDefault;
    }

    this.renderDiamonds(this.mcDiamonds, this.state.mc.steps, 'cyan');
    this.renderDiamonds(this.guardDiamonds, this.state.guard.steps, 'gold');
    const activeSteps = this.state[this.activeRole].steps;
    this.renderDiamonds(this.activeDiamonds, activeSteps, this.activeRole === 'mc' ? 'cyan' : 'gold');
  }

  renderDiamonds(container, count, colorClass) {
    container.innerHTML = '';
    for (let i = 0; i < this.maxSteps; i++) {
      const d = document.createElement('div');
      d.className = 'diamond';
      if (i < count) {
        d.classList.add(`active-${colorClass}`);
      } else {
        d.classList.add('spent');
      }
      container.appendChild(d);
    }
  }

  updateActionTip() {
    const t = I18N[this.lang];
    const char = this.state[this.activeRole];
    if (this.activeRole === 'mc') {
      const adjShifter = this.state.shifters.find(s => 
        (Math.abs(s.x - char.x) === 1 && s.y === char.y) || 
        (Math.abs(s.y - char.y) === 1 && s.x === char.x)
      );
      if (adjShifter) {
        this.actionTip.innerHTML = `<span style="color:var(--accent-green)">${t.actionTipCrystal}</span>`;
        return;
      }
      this.actionTip.innerText = t.actionTipReady;
    } else {
      const onDefuser = this.state.defusers.find(d => !d.defused && d.x === char.x && d.y === char.y);
      if (onDefuser) {
        this.actionTip.innerHTML = `<span style="color:var(--accent-red)">${t.actionTipDefuser}</span>`;
      } else {
        this.actionTip.innerText = t.actionTipGuardWalk;
      }
    }
  }

  gridToScreen(gx, gy) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const topW = width * 0.62;
    const botW = width * 0.94;
    const topY = height * 0.18;
    const botY = height * 0.86;

    const t = gy / 5;
    const curY = botY - t * (botY - topY);
    const curW = botW - t * (botW - topW);
    const startX = (width - curW) / 2;
    const cellW = curW / 9;

    const curX = startX + (gx + 0.5) * cellW;
    return { x: curX, y: curY, cellW: cellW };
  }

  screenToGrid(sx, sy) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const topW = width * 0.62;
    const botW = width * 0.94;
    const topY = height * 0.18;
    const botY = height * 0.86;

    if (sy < topY - 20 || sy > botY + 20) return null;

    const t = (botY - sy) / (botY - topY);
    if (t < -0.1 || t > 1.1) return null;
    const gy = Math.round(t * 5);
    if (gy < 0 || gy > 5) return null;

    const curW = botW - (gy / 5) * (botW - topW);
    const startX = (width - curW) / 2;
    const cellW = curW / 9;
    const gx = Math.floor((sx - startX) / cellW);
    if (gx < 0 || gx > 8) return null;

    return { x: gx, y: gy };
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const sx = (e.clientX - rect.left) * scaleX;
    const sy = (e.clientY - rect.top) * scaleY;

    this.hoverCell = this.screenToGrid(sx, sy);
  }

  handleCanvasClick(e) {
    if (this.state.isWon || this.state.isLost) return;

    let targetCell = this.hoverCell;
    if (!targetCell && e) {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null));
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : null));
      if (clientX != null && clientY != null) {
        const sx = (clientX - rect.left) * scaleX;
        const sy = (clientY - rect.top) * scaleY;
        targetCell = this.screenToGrid(sx, sy);
      }
    }
    if (!targetCell) return;

    const hx = targetCell.x;
    const hy = targetCell.y;

    if (this.state.mc.x === hx && this.state.mc.y === hy) {
      if (this.activeRole !== 'mc') {
        this.switchRole('mc');
        return;
      }
    }

    if (this.state.guard.x === hx && this.state.guard.y === hy) {
      if (this.activeRole !== 'guard') {
        this.switchRole('guard');
        return;
      }
    }

    this.tryMoveOrInteract(hx, hy);
  }

  tryMoveOrInteract(tx, ty) {
    if (tx < 0 || tx > 8 || ty < 0 || ty > 5) return;
    const char = this.state[this.activeRole];

    const dist = Math.abs(tx - char.x) + Math.abs(ty - char.y);

    if (this.activeRole === 'mc' && dist === 1) {
      const shifter = this.state.shifters.find(s => s.x === tx && s.y === ty);
      if (shifter) {
        const pushDx = tx - char.x;
        const pushDy = ty - char.y;
        this.pushShifter(shifter, pushDx, pushDy);
        return;
      }
    }

    if (dist === 1) {
      if (this.state.walls.some(w => w.x === tx && w.y === ty)) {
        this.spawnSparks(tx, ty, '#ff3366');
        return;
      }

      const blocker = this.state.blockers.find(b => b.active && !b.defused && b.x === tx && b.y === ty);
      if (blocker) {
        this.spawnSparks(tx, ty, '#4facfe');
        return;
      }

      const shifter = this.state.shifters.find(s => s.x === tx && s.y === ty);
      if (shifter) {
        if (this.activeRole === 'mc') {
          const pushDx = tx - char.x;
          const pushDy = ty - char.y;
          this.pushShifter(shifter, pushDx, pushDy);
        }
        return;
      }

      const otherRole = this.activeRole === 'mc' ? 'guard' : 'mc';
      const otherChar = this.state[otherRole];
      if (otherChar.x === tx && otherChar.y === ty) {
        this.switchRole(otherRole);
        return;
      }

      const isBacktrack = char.history && char.history.length >= 2 && 
                          char.history[char.history.length - 2].x === tx && 
                          char.history[char.history.length - 2].y === ty;

      if (isBacktrack) {
        char.history.pop();
        char.x = tx;
        char.y = ty;
        char.steps = Math.min(this.maxSteps, char.steps + 1);
        sfx.playStepBack();
        this.spawnSparks(tx, ty, '#00ff88');
        if (this.activeRole === 'guard' && this.actionStage) {
          this.actionStage.triggerWalk(1.2);
        }
      } else {
        if (char.steps <= 0) {
          this.checkEndState();
          return;
        }

        char.x = tx;
        char.y = ty;
        char.steps--;
        sfx.playMove();
        this.spawnSparks(tx, ty, this.activeRole === 'mc' ? '#00f2fe' : '#ffb800');

        if (this.activeRole === 'guard') {
          if (this.actionStage) {
            this.actionStage.triggerWalk(1.2);
          }
          const defuser = this.state.defusers.find(d => !d.defused && d.x === tx && d.y === ty);
          if (defuser) {
            defuser.defused = true;
            sfx.playDefuse();
            sfx.playAttack();
            if (this.actionStage) {
              this.actionStage.triggerAttack(1.6);
            }
            const targetBlocker = this.state.blockers.find(b => b.id === defuser.linkedBlockerId);
            if (targetBlocker) {
              targetBlocker.defused = true;
              targetBlocker.active = false;
              this.spawnExplosion(targetBlocker.x, targetBlocker.y, '#4facfe');
            }
          }
        }

        char.history.push({ x: tx, y: ty });
      }

      this.updateHUD();
      this.updateActionTip();
      this.checkEndState();
    }
  }

  handleActivation() {
    const char = this.state[this.activeRole];
    if (this.activeRole === 'mc') {
      const adjShifters = this.state.shifters.filter(s => 
        (Math.abs(s.x - char.x) === 1 && s.y === char.y) || 
        (Math.abs(s.y - char.y) === 1 && s.x === char.x)
      );
      if (adjShifters.length > 0) {
        const s = adjShifters[0];
        const pushDx = s.x - char.x;
        const pushDy = s.y - char.y;
        this.pushShifter(s, pushDx, pushDy);
      }
    }
  }

  pushShifter(shifter, dx, dy) {
    const targetX = shifter.x + dx;
    const targetY = shifter.y + dy;

    if (targetX < 0 || targetX > 8 || targetY < 0 || targetY > 5) return;
    if (this.isOccupied(targetX, targetY)) return;

    shifter.x = targetX;
    shifter.y = targetY;
    sfx.playShift();
    this.spawnSparks(targetX, targetY, '#00ff88');

    this.updateHUD();
    this.updateActionTip();
    this.checkEndState();
  }

  isOccupied(x, y) {
    if (this.state.walls.some(w => w.x === x && w.y === y)) return true;
    if (this.state.mc.x === x && this.state.mc.y === y) return true;
    if (this.state.guard.x === x && this.state.guard.y === y) return true;
    if (this.state.blockers.some(b => b.active && !b.defused && b.x === x && b.y === y)) return true;
    if (this.state.shifters.some(s => s.x === x && s.y === y)) return true;
    return false;
  }

  checkEndState() {
    const mcAtGoal = (this.state.mc.y === this.state.goalRow);
    const guardAtGoal = (this.state.guard.y === this.state.goalRow);
    const t = I18N[this.lang];

    this.state.mc.atGoal = mcAtGoal;
    this.state.guard.atGoal = guardAtGoal;

    if (mcAtGoal && guardAtGoal && !this.state.isWon) {
      this.state.isWon = true;
      sfx.playWin();

      const isFinalSector = (this.currentLevelIdx === LEVELS.length - 1);

      if (isFinalSector) {
        for (let gx = 0; gx < 9; gx++) {
          this.spawnSparks(gx, 5, '#ffb800');
          this.spawnSparks(gx, 5, '#00f2fe');
        }
      }

      setTimeout(() => {
        const tCur = I18N[this.lang];
        if (isFinalSector) {
          this.gameOverIcon.innerText = "👑";
          this.gameOverTitle.innerText = tCur.allClearedTitle;
          this.gameOverDesc.innerHTML = tCur.allClearedDesc(LEVELS.length);
          this.btnNextLevel.style.display = 'inline-block';
          this.btnNextLevel.innerText = tCur.btnReattempt;
          this.btnRetryLevel.innerText = tCur.btnReplayFinal;
        } else {
          this.gameOverIcon.innerText = "🏆";
          this.gameOverTitle.innerText = tCur.winTitle;
          const mcSpent = this.maxSteps - this.state.mc.steps;
          const guardSpent = this.maxSteps - this.state.guard.steps;
          this.gameOverDesc.innerText = tCur.winDesc(LEVELS[this.currentLevelIdx].id, mcSpent, guardSpent);
          this.btnNextLevel.style.display = 'inline-block';
          this.btnNextLevel.innerText = tCur.btnNextLevel;
          this.btnRetryLevel.innerText = tCur.btnRetry;
        }
        this.gameOverModal.classList.remove('hidden');
      }, 400);
      return;
    }

    if (this.state.mc.steps === 0 && this.state.guard.steps === 0 && !(mcAtGoal && guardAtGoal) && !this.state.isWon) {
      this.state.isLost = true;
      sfx.playFail();
      setTimeout(() => {
        const tCur = I18N[this.lang];
        this.gameOverIcon.innerText = "⚠️";
        this.gameOverTitle.innerText = tCur.energyDepletedTitle;
        this.gameOverDesc.innerText = tCur.energyDepletedDesc;
        this.btnNextLevel.style.display = 'none';
        this.btnRetryLevel.innerText = tCur.btnRetry;
        this.gameOverModal.classList.remove('hidden');
      }, 400);
    }
  }

  spawnSparks(gx, gy, color) {
    const pos = this.gridToScreen(gx, gy);
    for (let i = 0; i < 16; i++) {
      this.particles.push({
        x: pos.x,
        y: pos.y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6 - 2,
        life: 1,
        decay: 0.03 + Math.random() * 0.03,
        color: color,
        size: 3 + Math.random() * 4
      });
    }
  }

  spawnExplosion(gx, gy, color) {
    const pos = this.gridToScreen(gx, gy);
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 8;
      this.particles.push({
        x: pos.x,
        y: pos.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.02 + Math.random() * 0.02,
        color: color,
        size: 4 + Math.random() * 5
      });
    }
  }

  loop() {
    this.animTime += 0.03;
    if (this.actionStage) {
      this.actionStage.update(0.03);
      this.actionStage.render();
    }
    this.render();
    requestAnimationFrame(() => this.loop());
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.renderGrid(ctx);
    this.renderBreadcrumbs(ctx);
    this.renderGoalBaseline(ctx);
    this.renderDefuserConnections(ctx);
    this.renderEntities(ctx);
    this.renderParticles(ctx);
  }

  // Enhanced 3D Isometric Platform Extrusion & Depth Grid
  renderGrid(ctx) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const topW = width * 0.62;
    const botW = width * 0.94;
    const topY = height * 0.18;
    const botY = height * 0.86;
    const slabDepth = 26; // Physical 3D thickness of the arena slab

    const pTopLeft = { x: (width - topW) / 2, y: topY };
    const pTopRight = { x: (width + topW) / 2, y: topY };
    const pBotRight = { x: (width + botW) / 2, y: botY };
    const pBotLeft = { x: (width - botW) / 2, y: botY };

    ctx.save();

    // 1. Ambient Drop Shadow under the entire 3D arena slab
    ctx.beginPath();
    ctx.ellipse(width / 2, botY + slabDepth + 8, botW * 0.52, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.shadowBlur = 0;

    // 2. 3D Left Facet Extrusion
    ctx.beginPath();
    ctx.moveTo(pTopLeft.x, pTopLeft.y);
    ctx.lineTo(pTopLeft.x - 2, pTopLeft.y + 12);
    ctx.lineTo(pBotLeft.x, pBotLeft.y + slabDepth);
    ctx.lineTo(pBotLeft.x, pBotLeft.y);
    ctx.closePath();
    const leftGrad = ctx.createLinearGradient(pTopLeft.x, pTopLeft.y, pBotLeft.x, pBotLeft.y);
    leftGrad.addColorStop(0, '#0a1424');
    leftGrad.addColorStop(1, '#050912');
    ctx.fillStyle = leftGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 3. 3D Right Facet Extrusion
    ctx.beginPath();
    ctx.moveTo(pTopRight.x, pTopRight.y);
    ctx.lineTo(pTopRight.x + 2, pTopRight.y + 12);
    ctx.lineTo(pBotRight.x, pBotRight.y + slabDepth);
    ctx.lineTo(pBotRight.x, pBotRight.y);
    ctx.closePath();
    const rightGrad = ctx.createLinearGradient(pTopRight.x, pTopRight.y, pBotRight.x, pBotRight.y);
    rightGrad.addColorStop(0, '#0a1424');
    rightGrad.addColorStop(1, '#050912');
    ctx.fillStyle = rightGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 4. 3D Front Platform Slab
    ctx.beginPath();
    ctx.moveTo(pBotLeft.x, pBotLeft.y);
    ctx.lineTo(pBotRight.x, pBotRight.y);
    ctx.lineTo(pBotRight.x, pBotRight.y + slabDepth);
    ctx.lineTo(pBotLeft.x, pBotLeft.y + slabDepth);
    ctx.closePath();
    const frontGrad = ctx.createLinearGradient(0, botY, 0, botY + slabDepth);
    frontGrad.addColorStop(0, '#101e33');
    frontGrad.addColorStop(0.3, '#0c1728');
    frontGrad.addColorStop(1, '#04070e');
    ctx.fillStyle = frontGrad;
    ctx.fill();

    // Front slab lower neon edge
    ctx.beginPath();
    ctx.moveTo(pBotLeft.x, pBotLeft.y + slabDepth);
    ctx.lineTo(pBotRight.x, pBotRight.y + slabDepth);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.7)';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Front slab column seam grooves (vertical armor plates)
    const botCellW = botW / 9;
    for (let c = 1; c < 9; c++) {
      const cx = (width - botW) / 2 + c * botCellW;
      ctx.beginPath();
      ctx.moveTo(cx, botY + 2);
      ctx.lineTo(cx, botY + slabDepth - 2);
      ctx.strokeStyle = 'rgba(79, 172, 254, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 5. Top Playing Surface
    ctx.beginPath();
    ctx.moveTo(pTopLeft.x, pTopLeft.y);
    ctx.lineTo(pTopRight.x, pTopRight.y);
    ctx.lineTo(pBotRight.x, pBotRight.y);
    ctx.lineTo(pBotLeft.x, pBotLeft.y);
    ctx.closePath();

    const bgGrad = ctx.createLinearGradient(0, topY, 0, botY);
    bgGrad.addColorStop(0, 'rgba(255, 184, 0, 0.07)');
    bgGrad.addColorStop(0.6, 'rgba(10, 24, 45, 0.4)');
    bgGrad.addColorStop(1, 'rgba(0, 242, 254, 0.08)');
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Top surface perimeter rim highlight
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
    ctx.lineWidth = 2;
    ctx.shadowColor = 'rgba(0, 242, 254, 0.5)';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Subtle 3D Checkerboard Contrast
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 9; c++) {
        if ((r + c) % 2 === 0) {
          this.drawCellHighlight(ctx, c, r, 'rgba(0, 242, 254, 0.025)', 'transparent', false);
        }
      }
    }

    // Perspective Horizontal Grid Lines
    for (let r = 0; r <= 6; r++) {
      const t = r / 6;
      const y = botY - t * (botY - topY);
      const w = botW - t * (botW - topW);
      const x1 = (width - w) / 2;
      const x2 = (width + w) / 2;

      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.strokeStyle = r === 6 ? 'rgba(255, 184, 0, 0.9)' : 'rgba(79, 172, 254, 0.28)';
      ctx.lineWidth = r === 6 ? 3 : 1;
      ctx.stroke();
    }

    // Perspective Longitudinal Grid Lines
    for (let c = 0; c <= 9; c++) {
      const topCellW = topW / 9;
      const botCellW = botW / 9;
      const x1 = (width - botW) / 2 + c * botCellW;
      const x2 = (width - topW) / 2 + c * topCellW;

      ctx.beginPath();
      ctx.moveTo(x1, botY);
      ctx.lineTo(x2, topY);
      ctx.strokeStyle = 'rgba(79, 172, 254, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Hover Highlight
    if (this.hoverCell) {
      this.drawCellHighlight(ctx, this.hoverCell.x, this.hoverCell.y, 'rgba(0, 242, 254, 0.28)', 'rgba(0, 242, 254, 0.95)', true);
    }

    // Reachable Steps Highlight
    const activeChar = this.state[this.activeRole];
    if (activeChar) {
      const neighbors = [
        { x: activeChar.x + 1, y: activeChar.y },
        { x: activeChar.x - 1, y: activeChar.y },
        { x: activeChar.x, y: activeChar.y + 1 },
        { x: activeChar.x, y: activeChar.y - 1 }
      ];
      neighbors.forEach(n => {
        if (n.x >= 0 && n.x <= 8 && n.y >= 0 && n.y <= 5) {
          const isBack = activeChar.history && activeChar.history.length >= 2 && 
                         activeChar.history[activeChar.history.length - 2].x === n.x && 
                         activeChar.history[activeChar.history.length - 2].y === n.y;

          if (isBack) {
            this.drawCellHighlight(ctx, n.x, n.y, 'rgba(0, 255, 136, 0.25)', 'rgba(0, 255, 136, 0.95)', true);
          } else if (activeChar.steps > 0) {
            const color = this.activeRole === 'mc' ? 'rgba(0, 242, 254, 0.18)' : 'rgba(255, 184, 0, 0.18)';
            const border = this.activeRole === 'mc' ? 'rgba(0, 242, 254, 0.5)' : 'rgba(255, 184, 0, 0.5)';
            this.drawCellHighlight(ctx, n.x, n.y, color, border, false);
          }
        }
      });
    }

    ctx.restore();
  }

  // 3D Elevated Cell Pad with drop bevel
  drawCellHighlight(ctx, gx, gy, fill, stroke, isElevated = false) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const topW = width * 0.62;
    const botW = width * 0.94;
    const topY = height * 0.18;
    const botY = height * 0.86;

    const yBot = botY - (gy / 6) * (botY - topY);
    const yTop = botY - ((gy + 1) / 6) * (botY - topY);

    const wBot = botW - (gy / 6) * (botW - topW);
    const wTop = botW - ((gy + 1) / 6) * (botW - topW);

    const cellWBot = wBot / 9;
    const cellWTop = wTop / 9;

    const startXBot = (width - wBot) / 2;
    const startXTop = (width - wTop) / 2;

    const p1 = { x: startXBot + gx * cellWBot, y: yBot };
    const p2 = { x: startXBot + (gx + 1) * cellWBot, y: yBot };
    const p3 = { x: startXTop + (gx + 1) * cellWTop, y: yTop };
    const p4 = { x: startXTop + gx * cellWTop, y: yTop };

    ctx.save();

    // 3D elevation lip for hovered / active backtrack tiles
    if (isElevated) {
      const elevateH = 4;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineTo(p2.x, p2.y + elevateH);
      ctx.lineTo(p1.x, p1.y + elevateH);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fill();
    }

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();

    if (stroke !== 'transparent') {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = isElevated ? 2 : 1.5;
      if (isElevated) {
        ctx.shadowColor = stroke;
        ctx.shadowBlur = 10;
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  renderGoalBaseline(ctx) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const topY = height * 0.18;
    const t = I18N[this.lang];

    for (let c = 0; c < 9; c++) {
      const pulse = 0.12 + Math.sin(this.animTime * 3 + c * 0.3) * 0.06;
      this.drawCellHighlight(ctx, c, 5, `rgba(255, 184, 0, ${pulse})`, 'rgba(255, 184, 0, 0.45)', false);
    }

    ctx.save();
    const centerX = width / 2;
    const centerY = topY - 14;
    ctx.font = 'bold 13px Orbitron, "Noto Sans SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffb800';
    ctx.shadowColor = '#ffb800';
    ctx.shadowBlur = 12;
    ctx.fillText(t.canvasGoal, centerX, centerY);
    ctx.restore();
  }

  renderBreadcrumbs(ctx) {
    ['mc', 'guard'].forEach(role => {
      const char = this.state[role];
      if (char.history && char.history.length > 1) {
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < char.history.length; i++) {
          const pos = this.gridToScreen(char.history[i].x, char.history[i].y);
          if (i === 0) ctx.moveTo(pos.x, pos.y);
          else ctx.lineTo(pos.x, pos.y);
        }
        ctx.strokeStyle = role === 'mc' ? 'rgba(0, 242, 254, 0.4)' : 'rgba(255, 184, 0, 0.4)';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.stroke();

        const prev = char.history[char.history.length - 2];
        if (prev && role === this.activeRole) {
          const prevPos = this.gridToScreen(prev.x, prev.y);
          ctx.beginPath();
          ctx.arc(prevPos.x, prevPos.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#00ff88';
          ctx.shadowColor = '#00ff88';
          ctx.shadowBlur = 12;
          ctx.fill();
        }
        ctx.restore();
      }
    });
  }

  renderDefuserConnections(ctx) {
    this.state.defusers.filter(d => !d.defused).forEach(def => {
      const blocker = this.state.blockers.find(b => b.id === def.linkedBlockerId && !b.defused);
      if (blocker && blocker.active) {
        const p1 = this.gridToScreen(def.x, def.y);
        const p2 = this.gridToScreen(blocker.x, blocker.y);

        ctx.save();
        ctx.setLineDash([6, 6]);
        ctx.lineDashOffset = -this.animTime * 15;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y - 12);
        ctx.quadraticCurveTo((p1.x + p2.x) / 2, Math.min(p1.y, p2.y) - 32, p2.x, p2.y - 12);
        ctx.strokeStyle = 'rgba(255, 51, 102, 0.5)';
        ctx.lineWidth = 2.2;
        ctx.shadowColor = '#ff3366';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }
    });
  }

  renderEntities(ctx) {
    const entities = [];

    this.state.walls.forEach(w => {
      entities.push({ type: 'wall', obj: w, y: w.y, x: w.x });
    });
    this.state.defusers.filter(d => !d.defused).forEach(d => {
      entities.push({ type: 'defuser', obj: d, y: d.y, x: d.x });
    });
    this.state.blockers.filter(b => b.active && !b.defused).forEach(b => {
      entities.push({ type: 'blocker', obj: b, y: b.y, x: b.x });
    });
    this.state.shifters.forEach(s => {
      entities.push({ type: 'shifter', obj: s, y: s.y, x: s.x });
    });
    entities.push({ type: 'character', role: 'mc', obj: this.state.mc, y: this.state.mc.y, x: this.state.mc.x });
    entities.push({ type: 'character', role: 'guard', obj: this.state.guard, y: this.state.guard.y, x: this.state.guard.x });

    // Isometric depth sorting from back (Y=5) to front (Y=0)
    entities.sort((a, b) => b.y - a.y);

    entities.forEach(ent => {
      const pos = this.gridToScreen(ent.x, ent.y);
      if (ent.type === 'wall') this.drawLaserWall(ctx, pos.x, pos.y);
      else if (ent.type === 'defuser') this.drawDefuser(ctx, pos.x, pos.y, ent.obj);
      else if (ent.type === 'blocker') this.drawBlocker(ctx, pos.x, pos.y, ent.obj);
      else if (ent.type === 'shifter') this.drawShifter(ctx, pos.x, pos.y, ent.obj);
      else if (ent.type === 'character') this.drawCharacter(ctx, pos.x, pos.y, ent.role, ent.obj);
    });
  }

  // 3D Perimeter Laser Defense Pylons
  drawLaserWall(ctx, x, y) {
    ctx.save();
    const size = 18;
    const py = y - 12;

    // Ground anchor plate
    ctx.beginPath();
    ctx.ellipse(x, y + 2, size * 0.9, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    // 3D Emitter post
    ctx.beginPath();
    ctx.rect(x - size * 0.6, py - 14, size * 1.2, 28);
    const postGrad = ctx.createLinearGradient(x - size, 0, x + size, 0);
    postGrad.addColorStop(0, '#101e33');
    postGrad.addColorStop(0.5, '#1e3352');
    postGrad.addColorStop(1, '#0c1524');
    ctx.fillStyle = postGrad;
    ctx.fill();
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // High-voltage laser arc
    ctx.beginPath();
    ctx.moveTo(x - size, py);
    ctx.lineTo(x + size, py);
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = '#ff3366';
    ctx.shadowBlur = 15;
    ctx.stroke();

    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ff3366';
    ctx.fillText('⚡', x, py);

    ctx.restore();
  }

  // 3D Multi-Faceted Pyramid Defuser
  drawDefuser(ctx, x, y, def) {
    ctx.save();
    const floatOffset = Math.sin(this.animTime * 3 + x) * 5;
    const py = y - 12 + floatOffset;
    const size = 24;

    // Dynamic ground shadow that scales with float height
    const shadowScale = 1 - (floatOffset / 20);
    ctx.beginPath();
    ctx.ellipse(x, y + 3, size * 0.85 * shadowScale, size * 0.4 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    const apex = { x: x, y: py - size };
    const left = { x: x - size, y: py + size * 0.35 };
    const right = { x: x + size, y: py + size * 0.35 };
    const center = { x: x, y: py + size * 0.7 };

    // Left shadow facet
    ctx.beginPath();
    ctx.moveTo(apex.x, apex.y);
    ctx.lineTo(left.x, left.y);
    ctx.lineTo(center.x, center.y);
    ctx.closePath();
    const gradLeft = ctx.createLinearGradient(left.x, apex.y, center.x, center.y);
    gradLeft.addColorStop(0, '#9e0930');
    gradLeft.addColorStop(1, '#570318');
    ctx.fillStyle = gradLeft;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 153, 179, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Right specular lit facet
    ctx.beginPath();
    ctx.moveTo(apex.x, apex.y);
    ctx.lineTo(center.x, center.y);
    ctx.lineTo(right.x, right.y);
    ctx.closePath();
    const gradRight = ctx.createLinearGradient(center.x, apex.y, right.x, center.y);
    gradRight.addColorStop(0, '#ff4d79');
    gradRight.addColorStop(0.6, '#ff1a53');
    gradRight.addColorStop(1, '#bf0033');
    ctx.fillStyle = gradRight;
    ctx.fill();
    ctx.strokeStyle = '#ff99b3';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Glowing energy sphere at apex
    ctx.beginPath();
    ctx.arc(apex.x, apex.y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ff3366';
    ctx.shadowBlur = 12;
    ctx.fill();

    ctx.restore();
  }

  // 3D Heavy Security Gate with Dual Pylons & Holographic Forcefield
  drawBlocker(ctx, x, y, blocker) {
    ctx.save();
    const pylonW = 8;
    const gateW = 24;
    const gateH = 34;
    const py = y - gateH * 0.5;

    // Ground anchor shadow
    ctx.beginPath();
    ctx.ellipse(x, y + 2, gateW + 6, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fill();

    // Left 3D Pylon
    const pLeftX = x - gateW;
    ctx.fillStyle = '#172842';
    ctx.fillRect(pLeftX - pylonW / 2, py - gateH, pylonW, gateH * 1.4);
    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(pLeftX - pylonW / 2, py - gateH, pylonW, gateH * 1.4);

    // Right 3D Pylon
    const pRightX = x + gateW;
    ctx.fillStyle = '#172842';
    ctx.fillRect(pRightX - pylonW / 2, py - gateH, pylonW, gateH * 1.4);
    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(pRightX - pylonW / 2, py - gateH, pylonW, gateH * 1.4);

    // Holographic Energy Forcefield Mesh
    const fTop = py - gateH + 4;
    const fBot = py + gateH * 0.4 - 4;
    const fLeft = pLeftX + pylonW / 2;
    const fRight = pRightX - pylonW / 2;

    const fieldGrad = ctx.createLinearGradient(0, fTop, 0, fBot);
    fieldGrad.addColorStop(0, 'rgba(79, 172, 254, 0.35)');
    fieldGrad.addColorStop(0.5, 'rgba(0, 242, 254, 0.2)');
    fieldGrad.addColorStop(1, 'rgba(79, 172, 254, 0.35)');
    ctx.fillStyle = fieldGrad;
    ctx.fillRect(fLeft, fTop, fRight - fLeft, fBot - fTop);

    // Animated Hazard Cross Laser
    ctx.beginPath();
    ctx.moveTo(fLeft, fTop);
    ctx.lineTo(fRight, fBot);
    ctx.moveTo(fRight, fTop);
    ctx.lineTo(fLeft, fBot);
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#ff3366';
    ctx.shadowBlur = 10;
    ctx.stroke();

    // Pylon Beacon Caps
    [pLeftX, pRightX].forEach(px => {
      ctx.beginPath();
      ctx.arc(px, py - gateH, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00f2fe';
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 8;
      ctx.fill();
    });

    ctx.restore();
  }

  // 3D Faceted Emerald Crystal Bipyramid
  drawShifter(ctx, x, y, shifter) {
    ctx.save();
    const floatOffset = Math.sin(this.animTime * 2.5 + x * 2) * 5;
    const py = y - 16 + floatOffset;
    const sizeW = 17;
    const sizeH = 28;

    // Ground contact shadow
    const shadowScale = 1 - (floatOffset / 20);
    ctx.beginPath();
    ctx.ellipse(x, y + 2, sizeW * 0.9 * shadowScale, 6 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    const top = { x: x, y: py - sizeH };
    const bottom = { x: x, y: py + sizeH };
    const left = { x: x - sizeW, y: py };
    const right = { x: x + sizeW, y: py };
    const center = { x: x, y: py - 2 }; // Subtle forward perspective tilt

    // Top-Left Facet
    ctx.beginPath();
    ctx.moveTo(top.x, top.y);
    ctx.lineTo(left.x, left.y);
    ctx.lineTo(center.x, center.y);
    ctx.closePath();
    const gradTL = ctx.createLinearGradient(left.x, top.y, center.x, center.y);
    gradTL.addColorStop(0, '#00cc6a');
    gradTL.addColorStop(1, '#008844');
    ctx.fillStyle = gradTL;
    ctx.fill();

    // Top-Right Facet (Specular Highlight)
    ctx.beginPath();
    ctx.moveTo(top.x, top.y);
    ctx.lineTo(center.x, center.y);
    ctx.lineTo(right.x, right.y);
    ctx.closePath();
    const gradTR = ctx.createLinearGradient(center.x, top.y, right.x, center.y);
    gradTR.addColorStop(0, '#88ffcc');
    gradTR.addColorStop(0.5, '#00ff88');
    gradTR.addColorStop(1, '#00aa55');
    ctx.fillStyle = gradTR;
    ctx.fill();

    // Bottom-Left Facet
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(left.x, left.y);
    ctx.lineTo(bottom.x, bottom.y);
    ctx.closePath();
    const gradBL = ctx.createLinearGradient(left.x, center.y, bottom.x, bottom.y);
    gradBL.addColorStop(0, '#006633');
    gradBL.addColorStop(1, '#003319');
    ctx.fillStyle = gradBL;
    ctx.fill();

    // Bottom-Right Facet
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(bottom.x, bottom.y);
    ctx.lineTo(right.x, right.y);
    ctx.closePath();
    const gradBR = ctx.createLinearGradient(center.x, center.y, right.x, bottom.y);
    gradBR.addColorStop(0, '#00994d');
    gradBR.addColorStop(1, '#004d26');
    ctx.fillStyle = gradBR;
    ctx.fill();

    // Specular Ridge Lines
    ctx.beginPath();
    ctx.moveTo(top.x, top.y);
    ctx.lineTo(right.x, right.y);
    ctx.lineTo(bottom.x, bottom.y);
    ctx.lineTo(left.x, left.y);
    ctx.closePath();
    ctx.strokeStyle = '#a6ffdb';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 12;
    ctx.stroke();

    // Internal Energy Core
    ctx.beginPath();
    ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 14;
    ctx.fill();

    ctx.restore();
  }

  // 3D Floating Operative Cyber-Pedestal with Spherical Insignia & Holographic HUD
  drawCharacter(ctx, x, y, role, char) {
    ctx.save();
    const isSelected = this.activeRole === role;
    const floatY = Math.sin(this.animTime * 3 + (role === 'mc' ? 0 : Math.PI)) * 4;
    const py = y - 14 + floatY;
    const radius = 18;
    const primaryColor = role === 'mc' ? '#00f2fe' : '#ffb800';
    const darkColor = role === 'mc' ? '#005577' : '#885500';
    const t = I18N[this.lang];

    // 1. Dynamic Ground Contact Shadow on Tile
    const shadowScale = 1 - (floatY / 18);
    ctx.beginPath();
    ctx.ellipse(x, y + 4, radius * 1.35 * shadowScale, radius * 0.6 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fill();

    // 2. 3D Floating Cyber-Pedestal Base
    const pedestalY = py + radius * 0.75;
    ctx.beginPath();
    ctx.ellipse(x, pedestalY + 3, radius * 1.3, radius * 0.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(12, 22, 38, 0.9)';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x, pedestalY, radius * 1.2, radius * 0.45, 0, 0, Math.PI * 2);
    ctx.fillStyle = role === 'mc' ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 184, 0, 0.2)';
    ctx.fill();
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = isSelected ? 2.5 : 1.5;
    if (isSelected) {
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 14;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 3. Rotating Tactical Compass Ring for Active Operative
    if (isSelected) {
      ctx.save();
      ctx.translate(x, pedestalY);
      ctx.rotate(this.animTime * 1.5);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      for (let a = 0; a < 4; a++) {
        ctx.beginPath();
        ctx.moveTo(radius * 1.35, 0);
        ctx.lineTo(radius * 1.55, 0);
        ctx.stroke();
        ctx.rotate(Math.PI / 2);
      }
      ctx.restore();
    }

    if (role === 'guard' && this.hiveGuardSprite && this.hiveGuardSprite.complete && this.hiveGuardSprite.naturalWidth > 0) {
      // 3D Hive Guard Figurine on Isometric Board
      const spriteW = 46;
      const spriteH = (spriteW / this.hiveGuardSprite.naturalWidth) * this.hiveGuardSprite.naturalHeight;
      const spriteX = x - spriteW / 2;
      const spriteY = py - spriteH + 18;

      ctx.save();
      // Backlight aura
      const auraGrad = ctx.createRadialGradient(x, py - 18, 4, x, py - 18, 28);
      auraGrad.addColorStop(0, 'rgba(0, 242, 254, 0.4)');
      auraGrad.addColorStop(0.6, 'rgba(255, 184, 0, 0.25)');
      auraGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(x, py - 18, 28, 0, Math.PI * 2);
      ctx.fill();

      // Wing breathing subtle scale
      const breathScale = 1 + Math.sin(this.animTime * 3) * 0.03;
      ctx.translate(x, py - 18);
      ctx.scale(breathScale, 1);
      ctx.translate(-x, -(py - 18));

      ctx.drawImage(this.hiveGuardSprite, spriteX, spriteY, spriteW, spriteH);
      ctx.restore();

      // Glowing cyan eye dots on mini sprite
      ctx.beginPath();
      ctx.arc(x - 2, spriteY + 12, 1.2, 0, Math.PI * 2);
      ctx.arc(x + 2, spriteY + 12, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = '#00f2fe';
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 5;
      ctx.fill();
    } else {
      // 4. 3D Volumetric Operative Sphere
      ctx.beginPath();
      ctx.arc(x, py, radius, 0, Math.PI * 2);
      const sphereGrad = ctx.createRadialGradient(x - radius * 0.35, py - radius * 0.35, 2, x, py, radius);
      sphereGrad.addColorStop(0, '#ffffff');
      sphereGrad.addColorStop(0.25, primaryColor);
      sphereGrad.addColorStop(0.8, darkColor);
      sphereGrad.addColorStop(1, '#050c18');
      ctx.fillStyle = sphereGrad;
      ctx.fill();
      ctx.strokeStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = isSelected ? 2.2 : 1.5;
      ctx.stroke();

      // 5. Operative Avatar Emoji Icon
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(role === 'mc' ? '👤' : '🛡️', x, py);
    }

    // 6. Holographic Step Count Floating Badge
    ctx.beginPath();
    ctx.arc(x + 15, py - 16, 8, 0, Math.PI * 2);
    ctx.fillStyle = primaryColor;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.font = 'bold 10px Orbitron, sans-serif';
    ctx.fillStyle = '#05080e';
    ctx.fillText(char.steps.toString(), x + 15, py - 15);

    // 7. Goal Secured Overhead Tag
    if (char.y === this.state.goalRow) {
      ctx.font = 'bold 10px Orbitron, "Noto Sans SC", sans-serif';
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 8;
      ctx.fillText(t.canvasSecured, x, py - 30);
    }

    ctx.restore();
  }

  renderParticles(ctx) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new Game();
});
