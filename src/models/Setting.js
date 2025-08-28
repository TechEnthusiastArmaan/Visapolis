// src/models/Setting.js
import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: mongoose.Schema.Types.Mixed, default: true },
});

export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);