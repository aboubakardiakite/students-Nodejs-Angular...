var express = require('express');
var router = express.Router();

const controller = require('../controllers/groupe');

router.get('/', controller.groupeHome);
router.get('/:numeroGroupe', controller.groupeNum);
router.put('/:numeroGroupe/:etudiantId', controller.addEtudiant);
router.delete('/:etudiantId', controller.removeEtudiant);

module.exports = router;
