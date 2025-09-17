import Slot from "../model/slotSchema.js";
import AppError from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createSlot = catchAsync(async (req, res, next) => {
  const { dates } = req.body;
  const { slots } = req.body;
  const { dateIso } = req.body;

  if (!Array.isArray(dates) || dates.length === 0) {
    return res
      .status(400)
      .json({ status: "fail", message: "No dates provided" });
  }

  const docs = dates.map((doc, i) => ({
    date: doc,
    slots: slots,
    dateIso: dateIso[i],
  }));
  console.log(docs);
  await Slot.insertMany(docs);

  res.status(200).json({
    status: "success",
    message: "Slots created",
    count: docs.length,
  });
});

export const getSlots = catchAsync(async (req, res, next) => {
  try {
    const data = await Slot.find();
    res.status(200).json({
      status: "succes",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
});

export const deleteAllSlots = catchAsync(async (req, res, next) => {
  await Slot.deleteMany({});
  res.status(200).json({
    status: "succes",
    message: "Összes időpont törölve!",
  });
});

export const deleteSlot = catchAsync(async (req, res, next) => {
  await Slot.deleteMany({ _id });
  res.status(200).json({
    status: "succes",
    message: "Összes időpont törölve!",
  });
});
