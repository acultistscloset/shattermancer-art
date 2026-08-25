import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require(path.join(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES, 'sharp'));

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const out = path.join(root, 'implementation_preview.png');
const W = 856;
const H = 1856;

const layers = [];

async function place(rel, left, top, width, height, opacity = 1) {
  const input = path.join(root, rel);
  const buf = await sharp(input)
    .resize({
      width,
      height,
      fit: 'contain',
      withoutEnlargement: false,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
  layers.push({ input: buf, left, top, blend: 'over', opacity });
}

function textLayer(text, left, top, width, height, size = 24, anchor = 'middle') {
  const x = anchor === 'middle' ? width / 2 : 0;
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <text x="${x}" y="${Math.round(height * 0.72)}" text-anchor="${anchor}" font-family="Georgia, serif"
      font-size="${size}" fill="#dfc99c" opacity="0.92">${text}</text>
  </svg>`;
  layers.push({ input: Buffer.from(svg), left, top, blend: 'over' });
}

// Battle viewport: deliberately empty for future player/enemy artwork.
await place('02_enemy/006_enemy_stat_frame.png', 16, 18, 385, 145);
await place('02_enemy/007_enemy_name_field.png', 39, 35, 330, 35);
await place('02_enemy/008_enemy_health_track_empty.png', 43, 75, 320, 24);
await place('02_enemy/009_enemy_health_fill_full.png', 47, 79, 186, 16);
const wardIcons = ['012_ward_icon_fire.png', '013_ward_icon_ice.png', '014_ward_icon_plant.png',
  '015_ward_icon_electricity.png', '016_ward_icon_frost.png', '017_ward_icon_shadow.png'];
for (let i = 0; i < wardIcons.length; i++) {
  await place(`02_enemy/${wardIcons[i]}`, 45 + i * 52, 106, 34, 34);
}

await place('01_global/001_currency_counter_backplate.png', 642, 18, 135, 50);
await place('01_global/002_aurel_coin.png', 646, 23, 38, 38);
textLayer('123', 689, 21, 80, 38, 22, 'start');
await place('01_global/003_settings_button_default.png', 790, 17, 50, 50);
await place('01_global/005_cog_icon.png', 800, 27, 30, 30);

await place('04_banners/027_damage_banner_backplate.png', 506, 558, 330, 55);
await place('04_banners/028_sword_icon.png', 522, 566, 28, 38);
await place('04_banners/029_ability_banner_backplate.png', 506, 616, 330, 55);
await place('04_banners/030_enemy_ability_icon.png', 520, 625, 30, 30);

await place('03_player/019_player_stat_frame.png', 476, 680, 364, 142);
await place('03_player/020_discipline_name_field.png', 505, 694, 270, 30);
await place('03_player/021_player_health_track_empty.png', 511, 735, 225, 22);
await place('03_player/022_player_health_fill_full.png', 515, 739, 130, 14);
await place('03_player/024_shield_icon_no_number.png', 755, 718, 56, 70);
await place('03_player/025_relic_tray_backplate.png', 510, 773, 265, 34);
for (let i = 0; i < 8; i++) await place('03_player/026_empty_relic_socket.png', 519 + i * 30, 779, 24, 24);

// Grimoire and incantation input.
await place('05_grimoire/031_open_grimoire_with_title.png', 12, 820, 832, 520);
await place('05_grimoire/032_full_width_parchment_strip.png', 72, 1218, 714, 84);
await place('05_grimoire/034_parchment_focus_overlay.png', 78, 1224, 700, 72, 0.7);
await place('05_grimoire/033_staff_casting_wax_seal.png', 65, 1194, 96, 96);

// Six selectable elements.
await place('06_elements/038_element_selection_harness.png', 74, 1340, 708, 76);
const elementIcons = ['043_selection_icon_fire.png', '044_selection_icon_ice.png', '045_selection_icon_plant.png',
  '046_selection_icon_electricity.png', '047_selection_icon_frost.png', '048_selection_icon_shadow.png'];
for (let i = 0; i < 6; i++) {
  const x = 103 + i * 111;
  await place('06_elements/039_element_button_default.png', x, 1328, 70, 70);
  if (i === 0) await place('06_elements/040_element_button_selected_overlay.png', x, 1328, 70, 70);
  await place(`06_elements/${elementIcons[i]}`, x + 13, 1341, 44, 44);
}

// Six mana meters.
await place('07_mana/049_mana_row_harness.png', 74, 1410, 708, 55);
const mana = ['051_mana_fill_fire_full.png', '052_mana_fill_ice_full.png', '053_mana_fill_plant_full.png',
  '054_mana_fill_electricity_full.png', '055_mana_fill_frost_full.png', '056_mana_fill_shadow_full.png'];
for (let i = 0; i < 6; i++) {
  const x = 99 + i * 112;
  await place('07_mana/050_mana_meter_track_empty.png', x, 1430, 72, 13);
  await place(`07_mana/${mana[i]}`, x + 3, 1433, 45 - i * 3, 7);
}

// Cast control and six empty potion sockets.
await place('08_cast_potions/058_cast_button_default.png', 262, 1490, 332, 92);
await place('08_cast_potions/061_cast_ready_overlay.png', 270, 1498, 316, 76, 0.55);
await place('08_cast_potions/062_cast_label.png', 337, 1512, 182, 50);
for (let i = 0; i < 3; i++) await place('08_cast_potions/063_empty_potion_socket_default.png', 28 + i * 72, 1502, 60, 60);
for (let i = 0; i < 3; i++) await place('08_cast_potions/063_empty_potion_socket_default.png', 624 + i * 72, 1502, 60, 60);

// Exactly four spell slots.
await place('09_spells/066_four_slot_spell_harness.png', 20, 1640, 816, 196);
for (let i = 0; i < 4; i++) await place('09_spells/067_blank_spell_slot.png', 39 + i * 202, 1646, 174, 184);

await sharp({
  create: { width: W, height: H, channels: 4, background: { r: 17, g: 15, b: 14, alpha: 1 } }
})
  .composite(layers)
  .png()
  .toFile(out);

console.log(out);
