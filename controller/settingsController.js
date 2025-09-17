import Setting from "../model/settingsSchema.js";
import { catchAsync } from "../utils/catchAsync.js";

/* export const getOpeningHours = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne(); // csak egy dokumentum
    res.status(200).json({
      status: "success",
      openingHours: settings?.openingHours || {},
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching opening hours" });
  }
}); */

export const getSettings = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne(); // csak egy dokumentumot tartunk

    if (!settings) {
      return res.status(404).json({
        status: "fail",
        message: "Settings not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: settings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: "Error fetching settings",
    });
  }
});

export const getOpeningHours = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne();

    const orderedDays = [
      "hétfő",
      "kedd",
      "szerda",
      "csütörtök",
      "péntek",
      "szombat",
      "vasárnap",
    ];

    const openingHours = orderedDays.map((day) => ({
      day,
      value: settings.openingHours[day] || "",
    }));

    res.status(200).json({
      status: "success",
      openingHours,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching opening hours" });
  }
});

export const setOpeningHours = catchAsync(async (req, res, next) => {
  try {
    const { day, value } = req.body;
    const settings = await Setting.findOne();
    settings.openingHours[day] = value;
    await settings.save();
    res.json(settings.openingHours);
  } catch (error) {
    console.log(error);
  }
});
/// SOCIAL LINKS
export const getSocialLinks = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne();
    res.status(200).json({
      status: "success",
      socialLinks: settings?.socialLinks || {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", message: "Error social links" });
  }
});

export const setSocialLinks = catchAsync(async (req, res, next) => {
  try {
    const { data, value } = req.body;
    const settings = await Setting.findOne();
    settings.socialLinks[data] = value;
    await settings.save();
    res.json(settings.socialLinks);
  } catch (error) {
    console.log(error);
  }
});
///BACKGROUND IMAGE
export const getBackgroundImage = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne(); // csak egy dokumentum
    res.status(200).json({
      status: "success",
      image: settings?.backgroundImage || {},
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching opening hours" });
  }
});

export const setBackground = catchAsync(async (req, res, next) => {
  try {
    const { value } = req.body;
    const settings = await Setting.findOne();
    settings.backgroundImage = value;
    await settings.save();
    res.json(settings.backgroundImage);
  } catch (error) {
    console.log(error);
  }
});
///WELCOME MESSAGE

export const getWelcomeMessage = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne(); // csak egy dokumentum
    res.status(200).json({
      status: "success",
      openingHours: settings?.welcomeMessage || {},
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching opening hours" });
  }
});

export const setWelcomeMessage = catchAsync(async (req, res, next) => {
  try {
    const { value } = req.body;
    const settings = await Setting.findOne();
    settings.welcomeMessage = value;
    await settings.save();
    res.json(settings.welcomeMessage);
  } catch (error) {
    console.log(error);
  }
});

///CONTACTS

export const getContacts = catchAsync(async (req, res, next) => {
  try {
    const settings = await Setting.findOne(); // csak egy dokumentum
    res.status(200).json({
      status: "success",
      contacts: settings?.contact || {},
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", message: "Error fetching opening hours" });
  }
});

export const setContacts = catchAsync(async (req, res, next) => {
  try {
    const { data, value } = req.body;
    const settings = await Setting.findOne();
    settings.contact[data] = value;
    await settings.save();
    res.json(settings.contact);
  } catch (error) {
    console.log(error);
  }
});
