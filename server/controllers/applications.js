const Application = require("../models/application");

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, course, message, consent } = req.body;

    if (!firstName || !lastName || !email || !phone || !course || consent !== true) {
      return res.status(400).json({
        error: "Vyplňte prosím všechna povinná pole a potvrďte souhlas.",
      });
    }

    const application = new Application({
      firstName,
      lastName,
      email,
      phone,
      course,
      message,
      consent,
    });

    const savedApplication = await application.save();

    return res.status(201).json({
      message: "Přihláška byla úspěšně odeslána.",
      application: savedApplication,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Přihlášku se nepodařilo uložit. Zkuste to prosím znovu.",
    });
  }
};

exports.list = async (_req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    return res.json(applications);
  } catch (error) {
    return res.status(500).json({
      error: "Přihlášky se nepodařilo načíst.",
    });
  }
};
