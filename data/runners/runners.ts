import { Runner, RunnerType } from './runners.interface';

export const RUNNERS: Runner[] = [
  {
    type: RunnerType.Destroyer,
    images: {
      icon: 'assets/runners/destroyer-150x230.png',
      large: 'assets/runners/destroyer-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Ex-UESC special operations',
      role: 'Combat specialist',
      tech: 'Assault / Defend',
      description: `War is brutal. Be brutal. Brutal is your nature. Be you. You are unstoppable. Don't stop. They are the enemy. Make friends.`,
    },
    abilities: {
      prime: {
        name: 'Search and Destroy',
        description: `Activate your <b>shoulder-mounted missile pods</b>. <br/><br/>
        Dealing systained damage to targets launches homing missiles, <b>immobilizing</b> and dealing damage upon impact.`,
      },
      tactical: {
        name: 'Riot Barricade',
        description: `Activate an <b>energy barricade</b> that blocks incoming damage, draining tactical ability energy over time.<br/><br/>
        <b>Taking damage</b> drains additional energy.`,
      },
      trait1: {
        name: 'Thruster',
        description: `Activate while airborne to fire <b>boosters</b> that <b>thrust</b> you in the direction you are moving.`,
      },
      trait2: {
        name: 'Tactical Sprint',
        description: `Double-press sprint to move faster at the cost of generating <b>additional heat</b>.`,
      },
    },
    stats: {
      heatCapacity: 15,
      agility: 10,
      lootSpeed: 5,
      meleeDamage: 15,

      primeRecovery: 5,
      tacticalRecovery: 10,
      selfRepairSpeed: 15,
      finisherSiphon: 10,
      reviveSpeed: 10,

      hardware: 25,
      firewall: 20,
      fallResistance: 5,
      pingDuration: 5,
    },
  },
  {
    type: RunnerType.Vandal,
    images: {
      icon: 'assets/runners/vandal-150x230.png',
      large: 'assets/runners/vandal-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Martian freedom fighter',
      role: 'Combat anarchist',
      tech: 'Enhanced movement',
      description: `Break the rhythm. Change the chaos. Own the cycle. Replace the cage. <br/><br/>
      Amplify. Antagonize. Disrupt. Destroy. Survivordie.`,
    },
    abilities: {
      prime: {
        name: 'Amplify',
        description: `Overcharge your <b>movement systems</b>, reducing the heat of buildup of movement abilities. Increases <b>movement speed</b> and <b>weapon dexterity</b>.`,
      },
      tactical: {
        name: 'Disrupt Cannon',
        description: `Press: Transform your arm into a <b>cannon</b> and fire a high-powered energy projectile that deals damage and <b>pushes</b> targets away. <br/><br/>
        Hold: <b>Overcharge</b> your arm cannon, greatly increasing the size and damage of the blast.`,
      },
      trait1: {
        name: 'Microjets',
        description: `Activate in air to perform <b>another jump</b> at the cost of <b>generating additional heat</b>.`,
      },
      trait2: { name: 'Power Slide', description: 'Grants a <b>supercharged</b> slide that generates additional heat.' },
    },
    stats: {
      heatCapacity: 25,
      agility: 30,
      lootSpeed: 5,
      meleeDamage: 5,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 5,
      finisherSiphon: 10,
      reviveSpeed: 5,

      hardware: 10,
      firewall: 5,
      fallResistance: 10,
      pingDuration: 5,
    },
  },
  {
    type: RunnerType.Recon,
    images: {
      icon: 'assets/runners/recon-150x230.png',
      large: 'assets/runners/recon-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Classified',
      role: 'Tactical strategist',
      tech: 'Threat detection',
      description: `Run. See the pattern. <br/>
      Run. Become the pattern. <br/>
      Run. Die. Repeat. <br/>
      Run. Deliver the signal. <br/>
      Run. The pattern repeats. <br/>`,
    },
    abilities: {
      prime: {
        name: 'Echo Pulse',
        description: `Activate your shell's <b>advanced detection systems</b>, releasing a series of <b>sonar pulses</b> that reveal the location of nearby hostiles.`,
      },
      tactical: {
        name: 'Tracker Drone',
        description: `Deploy a mechanized <b>microbot</b> that tracks down nearby hostiles and explodes, <b>overheating</b> any targets caught in the blast.`,
      },
      trait1: {
        name: 'Interrogation',
        description: `When pinged by a hostile Runner, you automatically receive a <b>warning</b> in your shell's HUD. <br/><br/>
        Performing a <b>finisher</b> on a Runner <b>pings</b> their crew.`,
      },
      trait2: {
        name: 'Stalker Protocol',
        description: `After breaking a combatant's shields, they leave behind a <b>lingering holographic trail</b> for a short time.`,
      },
    },
    stats: {
      heatCapacity: 20,
      agility: 15,
      lootSpeed: 10,
      meleeDamage: 5,

      primeRecovery: 5,
      tacticalRecovery: 10,
      selfRepairSpeed: 5,
      finisherSiphon: 25,
      reviveSpeed: 10,

      hardware: 10,
      firewall: 15,
      fallResistance: 5,
      pingDuration: 25,
    },
  },
  {
    type: RunnerType.Assassin,
    images: {
      icon: 'assets/runners/assassin-150x230.png',
      large: 'assets/runners/assassin-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Unknown',
      role: 'Shadow assassin',
      tech: 'Invisibility systems',
      description: `I saw a star fade and the expanse did offer; 'no sympathy, until the last spark shines. <br/><br/>
      These are my memories; us as blades quest past each synthetic pulse, in search of dreams; of peace.'`,
    },
    abilities: {
      prime: {
        name: 'Smoke Screen',
        description: `Throw a smoke disc that emits a <b>line of smoke fields</b> in front of you, disrupting the optics of those who step inside.`,
      },
      tactical: {
        name: 'Active Camo',
        description: `Activate your shell's camouflage systems, pulling a shroud of <b>invisibility</b> over yourself. <br/><br/>
        Performing offensive actions, taking damage, and using abilities or consumables briefly <b>disrupts your invisibility</b>.`,
      },
      trait1: {
        name: 'Shadow Dive',
        description: `Activate while <b>airborne</b> to slam a smoke disc into the ground, deploying a <b>smoke field</b>.`,
      },
      trait2: {
        name: 'Shroud',
        description: `Your shell automatically activates camouflage systems when entering any <b>smoke field</b>, making you <b>invisible</b>. <br/><br/>
        Invisibility persists for a short time after leaving the smoke field.`,
      },
    },
    stats: {
      heatCapacity: 10,
      agility: 20,
      lootSpeed: 15,
      meleeDamage: 10,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 10,
      finisherSiphon: 10,
      reviveSpeed: 15,

      hardware: 10,
      firewall: 20,
      fallResistance: 10,
      pingDuration: 10,
    },
  },
  {
    type: RunnerType.Triage,
    images: {
      icon: 'assets/runners/triage-150x230.png',
      large: 'assets/runners/triage-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Systems security engineer',
      role: 'Field medic',
      tech: 'Damage mitigation',
      description: `Fall down. Get up <br/>
      Get up. Keep going. <br/>
      No other option. No other way. <br/>
      Every run. Every fight. <br/>
      Fall down. Get up`,
    },
    abilities: {
      prime: {
        name: 'Reboot+',
        description: `Lock on to downed crew members or hostile targets and fire your Reboot+ device at them, which revives crew members and + EMPs hostiles.`,
      },
      tactical: {
        name: 'Med-Drone',
        description: `Deploy a floating medical drone that attaches to crew members and restores health or recharges shields, and prevents them from bleeding out while downed.`,
      },
      trait1: {
        name: 'Shareware.exe',
        description: `Benefits from medical consumables are shared between crew members with Med-drone attached to them.`,
      },
      trait2: {
        name: 'Battery Overcharge',
        description: `Divert energy from your cooling systems to boost the performance of your weapons at the cost of generating additional heat. <br/><br/>
      While active, breaking a target's shield with a volt weapon + EMPs them.`,
      },
    },
    stats: {
      heatCapacity: 10,
      agility: 10,
      lootSpeed: 10,
      meleeDamage: 5,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 25,
      finisherSiphon: 5,
      reviveSpeed: 20,

      hardware: 15,
      firewall: 15,
      fallResistance: 5,
      pingDuration: 15,
    },
  },
  {
    type: RunnerType.Thief,
    images: {
      icon: 'assets/runners/thief-150x230.png',
      large: 'assets/runners/thief-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Hired corporate mercenary',
      role: 'Covert acquisitions',
      tech: 'Stealth / Mobility',
      description: `Takers take. <br/>
      Your loot. Your life. <br/>
      Maybe it's not fair. <br/>
      But playing fair never turned a profit.`,
    },
    abilities: {
      prime: {
        name: 'Pickpocket Drone',
        description: `Deploy a remotely piloted flying drone with a limited lifespan.`,
      },
      tactical: {
        name: 'Grapple Device',
        description: `Launch a grapple device in your aim direction, propelling yourself towards it.`,
      },
      trait1: {
        name: 'X-ray Visor',
        description: `Activate your visor, highlighting hostiles and containers in the color of the most valuable item they're storing. Containers are revealed through walls, while hostiles require line of sight.
        <br/>
        While active, aiming at a hostile for a short time Hacks their optics, disrupting their vision until you look away.`,
      },
      trait2: {
        name: 'The Finer Things',
        description: `Gain increased weapon handling and accelerated Grapple Device recharge rate based on the number of items in your backpack.`,
      },
    },
    stats: {
      heatCapacity: 75,
      agility: 80,
      lootSpeed: 85,
      meleeDamage: 50,

      primeRecovery: 10,
      tacticalRecovery: 65,
      selfRepairSpeed: 45,
      finisherSiphon: 55,
      reviveSpeed: 45,

      hardware: 45,
      firewall: 55,
      fallResistance: 80,
      pingDuration: 35,
    },
  },
  {
    type: RunnerType.Rook,
    images: {
      icon: 'assets/runners/rook-150x230.png',
      large: 'assets/runners/rook-300x460.png',
    },
    summary: {
      occupation: null,
      origin: 'Lunar work release',
      role: 'Opportunist',
      tech: 'Limited',
      description: `NOTICE: Solo Deployment Only <br/>
      NOTICE: Expect Hostile Runners <br/>
      NOTICE: No Upgrades Available <br/>
      NOTICE: Contracts Paused`,
    },
    abilities: {
      prime: {
        name: 'Recuperation',
        description: `Activate your prototype frame's emergency repair system to slowly restore health. <br/><br/>
        Interrputed when you take damage.`,
      },
      tactical: {
        name: 'Signal Mask',
        description: `Activate a temporary holodisplay mask to deceive UESC forces, making them unaware of your presence. <br/><br/> 
        Disrupted when you sprint or take damage.`,
      },
      trait1: null,
      trait2: null,
    },
    stats: {
      heatCapacity: 0,
      agility: 0,
      lootSpeed: 0,
      meleeDamage: 0,

      primeRecovery: 0,
      tacticalRecovery: 0,
      selfRepairSpeed: 0,
      finisherSiphon: 0,
      reviveSpeed: 0,

      hardware: 0,
      firewall: 0,
      fallResistance: 0,
      pingDuration: 0,
    },
  },
];
