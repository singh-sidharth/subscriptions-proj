import express from "express";
import { get, merge } from "lodash";

import { getUserBySessionToken } from "../services/users.db.service";
