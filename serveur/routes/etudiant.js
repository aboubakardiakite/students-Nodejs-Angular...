var express = require('express');
var router = express.Router();

const controller = require('../controllers/etudiant');
/* GET home page. */
router.get('/', controller.etudiantHome);
router.get('/:etudiantId', controller.etudiantById);
router.post('/', controller.addEtudiant);
router.put('/:etudiantId', controller.updateEtudiant);
router.delete('/:etudiantId', controller.deleteEtudiant);

module.exports = router;
