#!/usr/bin/env node
import { rule, resultAndCorrectAnswer } from '../src/games/brain-calc-data.js';
import letsPlay from '../src/index.js';

letsPlay(rule, resultAndCorrectAnswer);
