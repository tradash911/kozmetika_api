import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    contact: {
      address: { type: String },
      phone: { type: String },
      email: { type: String },
    },
    openingHours: {
      hétfő: { type: String },
      kedd: { type: String },
      szerda: { type: String },
      csütörtök: { type: String },
      péntek: { type: String },
      szombat: { type: String },
      vasárnap: { type: String },
    },
    socialLinks: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      tiktok: { type: String },
      google: { type: String },
    },
    backgroundImage: { type: String },
    welcomeMessage: { type: String },
  },
  { collection: "settings" }
);

const Setting = mongoose.model("Setting", settingsSchema);

export default Setting;
