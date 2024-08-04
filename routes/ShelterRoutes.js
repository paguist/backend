const express = require('express');
const {
    createPet,
    getAllPets,
    getPetById,
    updatePet,
    deletePet,
    likePet
} = require('../controllers/ShelterController');

const router = express.Router();

router.post('/', createPet);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);
router.patch('/:id/like', likePet);

module.exports = router;

