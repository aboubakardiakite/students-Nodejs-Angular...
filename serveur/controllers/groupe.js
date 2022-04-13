const Etudiant = require("../models/etudiant").model;

const groupeHome = async (req, res) => {
  const allGroupes = await Groupe.find();
  res.json(allGroupes);
};

const groupeNum = async (req, res) => {
  let groupeNumber = await Etudiant.find({groupe_number: req.params.numeroGroupe});
  res.json(groupeNumber);
};

const addEtudiant = async (req, res) => {
    try{
      const etudiant = await Etudiant.findById(req.params.etudiantId);
      etudiant.groupe_number= req.params.groupeNumber;
      await Etudiant.findByIdAndUpdate(req.params.etudiantId,{groupe_number : req.params.numeroGroupe});
      res.status(200).json(null);
    }catch(e){
      res.status(404).json(e);
    }
  };
  
  const removeEtudiant = async (req, res) => {
    try {
      await Etudiant.findByIdAndUpdate(req.params.etudiantId,{groupe_number : 0});
      res.status(200).json(null);
    } catch (e) {
      res.status(404).json(e);
    }
  };

module.exports.groupeHome = groupeHome;
module.exports.groupeNum = groupeNum;
module.exports.addEtudiant = addEtudiant;
module.exports.removeEtudiant = removeEtudiant;
