const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] } // Don't send passwords
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

// GET user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
});

// POST create new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const userWithoutPassword = {
            ...newUser.toJSON(),
            password: undefined
        };
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
});

// PUT update user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        await user.update(req.body);
        const userWithoutPassword = {
            ...user.toJSON(),
            password: undefined
        };
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
});

// DELETE user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

// PATCH update specific user fields
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        await user.update(req.body);
        const userWithoutPassword = {
            ...user.toJSON(),
            password: undefined
        };
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
});

// GET user's profile (example of a custom route)
router.get('/:id/profile', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] },
            // You can add includes here for related models
            // include: [{ model: SomeOtherModel }]
        });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
});

module.exports = router;
