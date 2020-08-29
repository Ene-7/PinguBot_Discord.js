CRATE DTATABASE DiscordDB;

-- Table of all Guilds the Bot is part of.
CREATE TABLE GUILDS(
    guildID VARCHAR(100) NOT NULL PRIMARY KEY,
    guildOwnerID VARCHAR(100) NOT NULL
);

-- Guild Configurations.
CREATE TABLE GUILDCONFIG(
    guildID VARCHAR(100) NOT NULL PRIMARY KEY,
    commandPrefix CHAR DEFAULT '>',
    triggerWordCommands BOOLEAN DEFAULT TRUE
);