/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';
import {  } from '../../tr-core/server/player';

let Drops = {}
let Trunks = {}
let Glovebox = {}
let Stashes = {}
let ShopItems = {}

export function LoadDrops(player: alt.Player, charid: string) {
	let drops; // = MYSQL Func

	drops = player.getMeta('drops');

	let loadedDrops:string = JSON.stringify(drops);
}

export interface InventoryItem {
	name: string;
	label: string;
	amount: number;
	type: string;
	description: string;
	image: string;
	data: any;
}

export function LoadInventory(player: alt.Player, charid: string) {
    let inventory = player.getMeta('inventory') as string;

    if (inventory !== undefined && inventory !== null) {
        let loadedInventory: InventoryItem[] = JSON.parse(inventory);
    }
}

export function GetItemSlot(player: alt.Player, item: InventoryItem, Sitem: string) {
    let slot = player.getMeta('inventory') as InventoryItem[];

    /* if (slot!== undefined && slot!== null) {
        let loadedInventory: InventoryItem[] = JSON.parse();
    }
	*/

	
	slot.filter(item => item.name == Sitem);

	return slot;
}
