/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';
import { PlayerData } from '../../tr-core/server/player';

let Drops = {}
let Trunks = {}
let Glovebox = {}
let Stashes = {}
let ShopItems = {}

export function LoadInventory(player: PlayerData, citzenid: string) {
	let inventory // = MYSQL Func
	let loadedInventory
}