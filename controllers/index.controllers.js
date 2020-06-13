const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const Acronimo = require('../models/stock');

const getIndex = (req, res, next) => {
  res.render('index')
}

const getUserStocks = (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/');
  };
  res.render('users/user-stocks', {
    userInSession: req.session.currentUser
  })
}

const addNewStock = (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/');
  };
  const {
    name
  } = req.body;
  const newAcronimo = new Acronimo({
    name
  })
  newAcronimo.save()
    .then(acronimo => req.session.currentUser.stocks.push(acronimo))
    .then(User.findOneAndUpdate({_id: req.session.currentUser._id}, {stocks: req.session.currentUser.stocks}))
    .then(() => res.redirect('/'))
    .catch(err => console.log("error guardando nuevo acronimo", err))
};

module.exports = {
  getIndex,
  getUserStocks,
  addNewStock
}