export class PresetManager {
  constructor() {
    this.customPresets = this.loadCustomPresets();
  }

  // Loadd presets from localStorage
  loadCustomPresets() {
    const stored = localStorage.getItem("ambientMixerPresets");
    return stored ? JSON.parse(stored) : {};
  }

  // Load custome preset by ID
  loadPreset(presetId) {
    return this.customPresets[presetId] || nul;
  }

  // Save custom presets to localStorage
  saveCustomPresets() {
    localStorage.setItem(
      "ambientMixerPresets",
      JSON.stringify(this.customPresets)
    );
  }

  // Save current mix as preset
  savePreset(name, soundState) {
    const presetId = `custom-${Date.now()}`;

    // Create preset object with only active sounds
    const preset = {
      name,
      sounds: {},
    };

    for (const [soundId, volume] of Object.entries(soundState)) {
      if (volume > 0) {
        preset.sounds[soundId] = volume;
      }
    }

    this.customPresets[presetId] = preset;
    this.saveCustomPresets();

    return presetId;
  }

  // Check if preset name already exists
  presetNameExists(name) {
    return Object.values(this.customPresets).some(
      (preset) => preset.name === name
    );
  }

  // Delete a custom preset
  deletePreset(presetId) {
    if (this.customPresets[presetId]) {
      delete this.customPresets[presetId];
      this.saveCustomPresets();
      return true;
    }
    return false;
  }
}
