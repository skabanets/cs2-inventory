const weapons = [
  {
    id: 1,
    title: 'AK-47 | Neon Rider',
    Exterior: 'Factory New',
    price: 151.44,
    description:
      'Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. A deadly biker can be seen in the foreground of various neon, blended patterns. Two parts Trapper Keeper, three parts synthesizer',
    collection: 'The Horizon Collection',
    image: '/images/AK-47-Neon Rider.png',
  },
  {
    id: 2,
    title: 'USP-S | Kill Confirmed',
    Exterior: 'Minimal Wear',
    price: 49.58,
    description:
      'A fan favorite from Counter-Strike Source, the Silenced USP Pistol has a detachable silencer that gives shots less recoil while suppressing attention-getting noise. It has been custom painted with the image of a bullet shattering a skull. 2 in the chest, 1 in the head',
    collection: 'The Shadow Collection',
    image: '/images/USP-S-Kill-Confirmed.png',
  },
  {
    id: 3,
    title: 'Desert Eagle | Printstream',
    Exterior: 'Well-Worn',
    price: 35.11,
    description:
      'As expensive as it is powerful, the Desert Eagle is an iconic pistol that is difficult to master but surprisingly accurate at long range. It has been custom painted with a stark black and white design and finished with pearlescent highlights. WHITE_1; BLACK_1; PEARLESCENT_1;',
    collection: 'The Fracture Collection',
    image: '/images/Desert-Eagle-Printstream.png',
  },
  {
    id: 4,
    title: 'AWP | Hyper Beast',
    Exterior: 'Field-Tested',
    price: 35.11,
    description:
      'High risk and high reward, the infamous AWP is recognizable by its signature report and one-shot, one-kill policy. It has been custom painted with a beastly creature in psychedelic colors. You really want to impress me Booth? Make this black light sensitive - Rona Sabri, Rising Star',
    collection: 'The Falchion Collection',
    image: '/images/AWP-Hyper-Beast.png',
  },
  {
    id: 5,
    title: 'Glock-18 | Wasteland Rebel',
    Exterior: 'Factory New',
    price: 5.81,
    description:
      'The Glock 18 is a serviceable first-round pistol that works best against unarmored opponents and is capable of firing three-round bursts. It has been distressed, block printed, and painted with graffiti. Pay tribute',
    collection: 'The Gamma Collection',
    image: '/images/Glock-18-Wasteland-Rebel.png',
  },
  {
    id: 6,
    title: 'M4A1-S | Golden Coil',
    Exterior: 'Minimal Wear',
    price: 103.26,
    description:
      'With a smaller magazine than its unmuffled counterpart, the silenced M4A1 provides quieter shots with less recoil and better accuracy. It has been painted with a hydrographic of an attacking snake. The viper can strike from anywhere',
    collection: 'The Shadow Collection',
    image: '/images/M4A1-S-Golden-Coil.png',
  },
  {
    id: 7,
    title: 'AK-47 | Bloodsport',
    Exterior: 'Well-Worn',
    price: 104.99,
    description:
      'Powerful and reliable, the AK-47 is one of the most popular assault rifles in the world. It is most deadly in short, controlled bursts of fire. It has been covered in white logo decals over a red and black hydrographic. Co-driver wanted',
    collection: 'The Spectrum Collection',
    image: '/images/AK-47-Bloodsport.png',
  },
  {
    id: 8,
    title: 'AWP | Redline',
    Exterior: 'Minimal Wear',
    price: 78.56,
    description:
      'High risk and high reward, the infamous AWP is recognizable by its signature report and one-shot, one-kill policy. It has been painted using a carbon fiber hydrographic and a dry-transfer decal of a red pinstripe. Never be afraid to push it to the limit',
    collection: 'The Winter Offensive Collection',
    image: '/images/AWP-Redline.png',
  },
  {
    id: 9,
    title: 'M4A4 | Hellfire',
    Exterior: 'Factory New',
    price: 72.97,
    description:
      'More accurate but less damaging than its AK-47 counterpart, the M4A4 is the full-auto assault rifle of choice for CTs. A devil-like creature has been hand painted among fire and chains. And brim pebbles',
    collection: 'The Operation Hydra Collection',
    image: '/images/M4A4-Hellfire.png',
  },
  {
    id: 10,
    title: 'AUG | Akihabara Accept',
    Exterior: 'Well-Worn',
    price: 472.59,
    description:
      'Powerful and accurate, the AUG scoped assault rifle compensates for its long reload times with low spread and a high rate of fire. It has been decorated with a heat transfer vinyl of an anime magazine cover. Yatta!',
    collection: 'The Rising Sun Collection',
    image: '/images/AUG-Akihabara-Accept.png',
  },
  {
    id: 11,
    title: 'MAC-10 | Nuclear Garden',
    Exterior: 'Factory New',
    price: 12.04,
    description:
      'Essentially a box that bullets come out of, the MAC-10 SMG boasts a high rate of fire, with poor spread accuracy and high recoil as trade-offs. It has been chromed then overlayed with a semi transparent hydrographic pattern of nuclear skulls and bones.',
    collection: 'The Cache Collection',
    image: '/images/MAC-10-Nuclear-Garden.png',
  },
  {
    id: 12,
    title: 'Bayonet | Doppler',
    Exterior: 'Factory New',
    price: 802.65,
    description:
      'Relatively unchanged in its design since World War II, the bayonet still retains a place in modern military strategy. Bayonet charges have continued to be effective as recently as the second Gulf War and the war in Afghanistan. It has been painted with black and silver metallic paints using a marbleizing medium, then candy coated. Getting lost in its color can prove fatal',
    collection: '',
    image: '/images/Bayonet-Doppler.png',
  },
  {
    id: 13,
    title: 'Tec-9 | Fuel Injector',
    Exterior: 'Minimal Wear',
    price: 6.35,
    description:
      'An ideal pistol for the Terrorist on the move, the Tec-9 is lethal in close quarters and features a high magazine capacity. The body has been painted yellow and the magazine has been given a belt engine hydrographic. A hand-stitched leather grip completes this Seattle classic. Pit crew not included',
    collection: 'The Gamma 2 Collection',
    image: '/images/Tec-9-Fuel-Injector.png',
  },
  {
    id: 14,
    title: 'Galil AR | Chromatic Aberration',
    Exterior: 'Well-Worn',
    price: 1.41,
    description:
      'A less expensive option among the terrorist-exclusive assault rifles, the Galil AR is a serviceable weapon in medium to long-range combat. The colors in this custom paint job were applied in offset positions, leading to an eye-popping look. (Not so) easy on the eyes...',
    collection: 'The Snakebite Collection',
    image: '/images/Galil-AR-Chromatic-Aberration.png',
  },
  {
    id: 15,
    title: 'USP-S | Cortex',
    Exterior: 'Field-Tested',
    price: 2.21,
    description:
      'A fan favorite from Counter-Strike Source, the Silenced USP Pistol has a detachable silencer that gives shots less recoil while suppressing attention-getting noise. It has been custom painted with pink accents over a silver and black base. Keep your head',
    collection: 'The Clutch Collection',
    image: '/images/USP-S-Cortex.png',
  },
  {
    id: 16,
    title: 'FAMAS | Afterimage',
    Exterior: 'Minimal Wear',
    price: 37.91,
    description:
      'A cheap option for cash-strapped players, the FAMAS effectively fills the niche between more expensive rifles and the less-effective SMGs. It has been custom-painted with broken ribbon trails.',
    collection: '',
    image: '/images/FAMAS-Afterimage.png',
  },
  {
    id: 17,
    title: 'UMP-45 | Caramel',
    Exterior: 'Field-Tested',
    price: 12.17,
    description:
      "The misunderstood middle child of the SMG family, the UMP45's small magazine is the only drawback to an otherwise versatile close-quarters automatic. It has individual parts spray-painted solid colors in a caramel and black color scheme.",
    collection: 'The Assault Collection',
    image: '/images/UMP-45-Caramel.png',
  },
  {
    id: 18,
    title: 'MAG-7 | Bulldozer',
    Exterior: 'Well-Worn',
    price: 5.63,
    description:
      'The CT-exclusive Mag-7 delivers a devastating amount of damage at close range. Its rapid magazine-style reloads make it a great tactical choice. It has individual parts spray-painted solid colors in a production line yellow color scheme. This bone crusher is a devastator',
    collection: 'The Mirage Collection',
    image: '/images/MAG-7-Bulldozer.png',
  },
  {
    id: 19,
    title: 'Nova | Interlock',
    Exterior: 'Field-Tested',
    price: 22.09,
    description:
      "The Nova's rock-bottom price tag makes it a great ambush weapon for a cash-strapped team. A yellow and blue optical illusion hydrographic pattern has been applied. Did you get a good look?",
    collection: 'The 2021 Vertigo Collection',
    image: '/images/Nova-Interlock.png',
  },
  {
    id: 20,
    title: 'CZ75-Auto | Emerald Quartz',
    Exterior: 'Battle-Scarred',
    price: 141.79,
    description:
      'A fully automatic variant of the CZ75, the CZ75-Auto is the ideal short-term choice for turning the tables and gaining your opponents weapon. But with very little ammo in the magazine, strong trigger discipline is required. It has been painted with green metallic paint and uses a crystallizing mask to create a pattern. Everyone wants to make an impact',
    collection: 'The Norse Collection',
    image: '/images/CZ75-Auto-Emerald-Quartz.png',
  },
];

export default weapons;