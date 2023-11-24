import Discord from "discord.js";
import { Button, Command, Modal, SelectMenu, SlashCommand } from "../types/discord";

import { sleep } from "./utiles";

export const slashCommands: SlashCommand[] = [];
export const commands: { [commandName: string]: Command } = {};
export const buttons: Button[] = [];
export const selectMenus: SelectMenu[] = [];
export const modals: Modal[] = [];

export const autoDeleteMessage = async (message: Discord.Message, msec: number = 10000) => {
    if (!message.guild) return;
    await sleep(msec);
    message.delete();
}
