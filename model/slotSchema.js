import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  dateIso: { type: Date },
  date: { type: String, unique: [true, "Ez a dátum már foglalt!"] },
  slots: [
    {
      time: { type: String, required: true },
      booked: { type: Boolean, default: false },
    },
  ],
});

const Slot = mongoose.model("Slot", slotSchema);

export default Slot;
