import { Injectable } from "@nestjs/common";
import { CreateCarreraDto } from "./dto/create-carrera.input";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from "./entities/carrera.entity";
import { Socket } from "socket.io-client";

