"use strict";
//var uuid = require('uuid')
//uso o require para importar biblioteca//
//var {v4} = require('uuid')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const dotenv_1 = __importDefault(require("dotenv"));
const nomeApp = ["Tigrinhos FIec"];
nomeApp.push("2024");
dotenv_1.default.config();
console.log(`${nomeApp} - ${(0, uuid_1.v4)()} vai rodar na porta ${process.env.PORT}`);
