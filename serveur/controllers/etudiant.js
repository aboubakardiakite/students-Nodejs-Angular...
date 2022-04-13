const Etudiant = require("../models/etudiant").model;

const etudiantHome = async (_, res) => {
  const allEtudiants = await Etudiant.find();
  res.json(allEtudiants);
};

const etudiantById = async (req, res) => {
  const etudiantId = await Etudiant.findById(req.params.etudiantId);
  res.json({ etudiantId });
};

const addEtudiant = async (req, res) => {
  try {
    const newEtudiantData = { ...req.body };
    const newEtudiant = await Etudiant.create(newEtudiantData);
    res.status(200).json(newEtudiant);
  } catch (e) {
      res.status(404).json(e);
    
  }
};

const updateEtudiant = async (req, res) => {
  const updatedEtudiantData = { ...req.body };
  const updateEtudiant = await Etudiant.findByIdAndUpdate(
    req.params.etudiantId,
    updatedEtudiantData,
    { new: true }
  );
  res.status(200).json(updateEtudiant);
};

const deleteEtudiant = async (req, res) => {
  const id = req.params.etudiantId;
  const removed = await Etudiant.findByIdAndDelete(id);
  res.status(200).json(removed);
};

module.exports.etudiantHome = etudiantHome;
module.exports.etudiantById = etudiantById;
module.exports.addEtudiant = addEtudiant;
module.exports.updateEtudiant = updateEtudiant;
module.exports.deleteEtudiant = deleteEtudiant;
