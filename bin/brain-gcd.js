#!/usr/bin/env node
import { rule, resultAndCorrectAnswer } from '../src/games/brain-gcd-data.js';
import letsPlay from '../src/index.js';

letsPlay(rule, resultAndCorrectAnswer);
