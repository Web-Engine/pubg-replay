const mapSizes = {
    Desert_Main: 800000,
    DihorOtok_Main: 600000,
    Erangel_Main: 800000,
    Baltic_Main: 800000,
    Range_Main: 200000,
    Savage_Main: 400000,
};

const mapNames =  {
    "Desert_Main": "Miramar",
    "DihorOtok_Main": "Vikendi",
    "Erangel_Main": "Erangel",
    "Baltic_Main": "Erangel_Remastered",
    "Range_Main": "Camp_Jackal",
    "Savage_Main": "Sanhok"
};

const itemNames = {
    'Item_Ammo_12Guage_C': '12 Gauge Ammo',
    'Item_Ammo_300Magnum_C': '300 Magnum Ammo',
    'Item_Ammo_45ACP_C': '.45 ACP Ammo',
    'Item_Ammo_556mm_C': '5.56mm Ammo',
    'Item_Ammo_762mm_C': '7.62mm Ammo',
    'Item_Ammo_9mm_C': '9mm Ammo',
    'Item_Ammo_Bolt_C': 'Crossbow Bolt',
    'Item_Ammo_Flare_C': 'Flare Gun Ammo',
    'Item_Armor_C_01_Lv3_C': 'Military Vest (Level 3)',
    'Item_Armor_D_01_Lv2_C': 'Police Vest (Level 2)',
    'Item_Armor_E_01_Lv1_C': 'Police Vest (Level 1)',
    'Item_Attach_Weapon_Lower_AngledForeGrip_C': 'Angled Foregrip',
    'Item_Attach_Weapon_Lower_Foregrip_C': 'Vertical Foregrip',
    'Item_Attach_Weapon_Lower_HalfGrip_C': 'Half Grip',
    'Item_Attach_Weapon_Lower_LaserPointer_C': 'Laser Sight',
    'Item_Attach_Weapon_Lower_LightweightForeGrip_C': 'Light Grip',
    'Item_Attach_Weapon_Lower_QuickDraw_Large_Crossbow_C': 'QuickDraw Crossbow Quiver',
    'Item_Attach_Weapon_Lower_ThumbGrip_C': 'Thumb Grip',
    'Item_Attach_Weapon_Magazine_Extended_Large_C': 'Large Extended Mag',
    'Item_Attach_Weapon_Magazine_Extended_Medium_C': 'Medium Extended Mag',
    'Item_Attach_Weapon_Magazine_Extended_Small_C': 'Small Extended Mag',
    'Item_Attach_Weapon_Magazine_Extended_SniperRifle_C': 'Sniper Rifle Extended Mag',
    'Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C': 'Large Extended QuickDraw Mag',
    'Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Medium_C': 'Medium Extended QuickDraw Mag',
    'Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Small_C': 'Small Extended QuickDraw Mag',
    'Item_Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C': 'Sniper Rifle Extended QuickDraw Mag',
    'Item_Attach_Weapon_Magazine_QuickDraw_Large_C': 'Large QuickDraw Mag',
    'Item_Attach_Weapon_Magazine_QuickDraw_Medium_C': 'Medium Quickdraw Mag',
    'Item_Attach_Weapon_Magazine_QuickDraw_Small_C': 'Small Quickdraw Mag',
    'Item_Attach_Weapon_Magazine_QuickDraw_SniperRifle_C': 'Sniper Rifle Quickdraw Mag',
    'Item_Attach_Weapon_Muzzle_Choke_C': 'Choke',
    'Item_Attach_Weapon_Muzzle_Compensator_Large_C': 'Large Compensator',
    'Item_Attach_Weapon_Muzzle_Compensator_Medium_C': 'Medium Compensator',
    'Item_Attach_Weapon_Muzzle_Compensator_SniperRifle_C': 'Sniper Rifle Compensator',
    'Item_Attach_Weapon_Muzzle_Duckbill_C': 'Duckbill',
    'Item_Attach_Weapon_Muzzle_FlashHider_Large_C': 'Large Flash Hider',
    'Item_Attach_Weapon_Muzzle_FlashHider_Medium_C': 'Medium Flash Hider',
    'Item_Attach_Weapon_Muzzle_FlashHider_SniperRifle_C': 'Sniper Rifle Flash Hider',
    'Item_Attach_Weapon_Muzzle_Suppressor_Large_C': 'Large Supressor',
    'Item_Attach_Weapon_Muzzle_Suppressor_Medium_C': 'Medium Supressor',
    'Item_Attach_Weapon_Muzzle_Suppressor_Small_C': 'Small Supressor',
    'Item_Attach_Weapon_Muzzle_Suppressor_SniperRifle_C': 'Sniper Rifle Supressor',
    'Item_Attach_Weapon_SideRail_DotSight_RMR_C': 'Canted Sight',
    'Item_Attach_Weapon_Stock_AR_Composite_C': 'Tactical Stock',
    'Item_Attach_Weapon_Stock_Shotgun_BulletLoops_C': 'Shotgun Bullet Loops',
    'Item_Attach_Weapon_Stock_SniperRifle_BulletLoops_C': 'Sniper Rifle Bullet Loops',
    'Item_Attach_Weapon_Stock_SniperRifle_CheekPad_C': 'Sniper Rifle Cheek Pad',
    'Item_Attach_Weapon_Stock_UZI_C': 'Uzi Stock',
    'Item_Attach_Weapon_Upper_ACOG_01_C': '4x ACOG Scope',
    'Item_Attach_Weapon_Upper_Aimpoint_C': '2x Aimpoint Scope',
    'Item_Attach_Weapon_Upper_CQBSS_C': '8x CQBSS Scope',
    'Item_Attach_Weapon_Upper_DotSight_01_C': 'Red Dot Sight',
    'Item_Attach_Weapon_Upper_Holosight_C': 'Holographic Sight',
    'Item_Attach_Weapon_Upper_PM2_01_C': '15x PM II Scope',
    'Item_Attach_Weapon_Upper_Scope3x_C': '3x Scope',
    'Item_Attach_Weapon_Upper_Scope6x_C': '6x Scope',
    'Item_Back_B_01_StartParachutePack_C': 'Parachute',
    'Item_Back_C_01_Lv3_C': 'Backpack (Level 3)',
    'Item_Back_C_02_Lv3_C': 'Backpack (Level 3)',
    'Item_Back_E_01_Lv1_C': 'Backpack (Level 1)',
    'Item_Back_E_02_Lv1_C': 'Backpack (Level 1)',
    'Item_Back_F_01_Lv2_C': 'Backpack (Level 2)',
    'Item_Back_F_02_Lv2_C': 'Backpack (Level 2)',
    'Item_Boost_AdrenalineSyringe_C': 'Adrenaline Syringe',
    'Item_Boost_EnergyDrink_C': 'Energy Drink',
    'Item_Boost_PainKiller_C': 'Painkiller',
    'Item_Ghillie_01_C': 'Ghillie Suit',
    'Item_Ghillie_02_C': 'Ghillie Suit',
    'Item_Ghillie_03_C': 'Ghillie Suit',
    'Item_Ghillie_04_C': 'Ghillie Suit',
    'Item_Head_E_01_Lv1_C': 'Motorcycle Helmet (Level 1)',
    'Item_Head_E_02_Lv1_C': 'Motorcycle Helmet (Level 1)',
    'Item_Head_F_01_Lv2_C': 'Military Helmet (Level 2)',
    'Item_Head_F_02_Lv2_C': 'Military Helmet (Level 2)',
    'Item_Head_G_01_Lv3_C': 'Spetsnaz Helmet (Level 3)',
    'Item_Heal_Bandage_C': 'Bandage',
    'Item_Heal_FirstAid_C': 'First Aid Kit',
    'Item_Heal_MedKit_C': 'Med kit',
    'Item_JerryCan_C': 'Gas Can',
    'Item_Weapon_AK47_C': 'AKM',
    'Item_Weapon_Apple_C': 'Apple',
    'Item_Weapon_AUG_C': 'AUG A3',
    'Item_Weapon_AWM_C': 'AWM',
    'Item_Weapon_Berreta686_C': 'S686',
    'Item_Weapon_BerylM762_C': 'Beryl',
    'Item_Weapon_BizonPP19_C': 'Bizon',
    'Item_Weapon_Cowbar_C': 'Crowbar',
    'Item_Weapon_Crossbow_C': 'Crossbow',
    'Item_Weapon_DesertEagle_C': 'Deagle',
    'Item_Weapon_DP28_C': 'DP-28',
    'Item_Weapon_FlareGun_C': 'Flare Gun',
    'Item_Weapon_FlashBang_C': 'Flashbang',
    'Item_Weapon_FNFal_C': 'SLR',
    'Item_Weapon_G18_C': 'P18C',
    'Item_Weapon_G36C_C': 'G36C',
    'Item_Weapon_Grenade_C': 'Frag Grenade',
    'Item_Weapon_Grenade_Warmode_C': 'Frag Grenade',
    'Item_Weapon_Groza_C': 'Groza',
    'Item_Weapon_HK416_C': 'M416',
    'Item_Weapon_Kar98k_C': 'Kar98k',
    'Item_Weapon_M16A4_C': 'M16A4',
    'Item_Weapon_M1911_C': 'P1911',
    'Item_Weapon_M249_C': 'M249',
    'Item_Weapon_M24_C': 'M24',
    'Item_Weapon_M9_C': 'P92',
    'Item_Weapon_Machete_C': 'Machete',
    'Item_Weapon_Mini14_C': 'Mini 14',
    'Item_Weapon_Mk14_C': 'Mk14 EBR',
    'Item_Weapon_Mk47Mutant_C': 'Mk47 Mutant',
    'Item_Weapon_Molotov_C': 'Molotov Cocktail',
    'Item_Weapon_MP5K_C': 'MP5K',
    'Item_Weapon_NagantM1895_C': 'R1895',
    'Item_Weapon_Pan_C': 'Pan',
    'Item_Weapon_QBU88_C': 'QBU88',
    'Item_Weapon_QBZ95_C': 'QBZ95',
    'Item_Weapon_Rhino_C': 'R45',
    'Item_Weapon_Saiga12_C': 'S12K',
    'Item_Weapon_Sawnoff_C': 'Sawed-off',
    'Item_Weapon_SCAR-L_C': 'SCAR-L',
    'Item_Weapon_Sickle_C': 'Sickle',
    'Item_Weapon_SKS_C': 'SKS',
    'Item_Weapon_SmokeBomb_C': 'Smoke Grenade',
    'Item_Weapon_Snowball_C': 'Snowball',
    'Item_Weapon_Thompson_C': 'Tommy Gun',
    'Item_Weapon_UMP_C': 'UMP9',
    'Item_Weapon_UZI_C': 'Micro Uzi',
    'Item_Weapon_Vector_C': 'Vector',
    'Item_Weapon_VSS_C': 'VSS',
    'Item_Weapon_vz61Skorpion_C': 'Skorpion',
    'Item_Weapon_Win1894_C': 'Win94',
    'Item_Weapon_Winchester_C': 'S1897',
    'WarModeStartParachutePack_C': 'Parachute',
};

function back(array, index) {
    if (array.length <= index) return null;

    return array[array.length - index - 1];
}

function last(array) {
    return back(array, 0);
}

function isPointEqual(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;

    return a.x === b.x && a.y === b.y;
}

module.exports = function(logs) {
    function isCharacter(character) {
        return character && character.accountId;
    }

    function getCharacter(accountId) {
        if (accountId in charactersById) {
            return charactersById[accountId];
        }

        charactersById[accountId] = {
            id: accountId,
            name: null,
            team: 0,
            locations: [],
            shapes: [
                {
                    ...CharacterAliveShape,
                    transition: false,
                    elapsedTime: 0,
                },
            ],
        };

        return charactersById[accountId];
    }

    function addCharacterLocation(data, elapsedTime) {
        let character = getCharacter(data.accountId);
        let lastLocation = last(character.locations);

        if (isPointEqual(lastLocation, data.location)) return;

        let { x, y } = data.location;

        character.locations.push({
            x, y,
            elapsedTime,
            transition: true,
        });
    }

    function addCharacterShape(data, shape, elapsedTime) {
        let character = getCharacter(data.accountId);

        character.shapes.push({
            ...shape,
            transition: false,
            elapsedTime,
        });
    }

    function addWhiteCircle({ x, y }, radius, elapsedTime) {
        whiteCircle.locations.push({
            x, y,
            elapsedTime,
        });

        whiteCircle.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0x000000,
            fillAlpha: 0,
            lineColor: 0xFFFFFF,
            lineWidth: 1,
            lineAlpha: 1,
            transition: false,
            elapsedTime,
        });
    }

    function addSafetyZone({ x, y }, radius, elapsedTime) {
        safetyZone.locations.push({
            x, y,
            elapsedTime,
            transition: true,
        });

        safetyZone.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0x000000,
            fillAlpha: 0,
            lineColor: 0x0000FF,
            lineWidth: 1,
            lineAlpha: 1,
            transition: true,
            elapsedTime,
        });
    }

    function addRedZone({ x, y }, radius, elapsedTime) {
        redZone.locations.push({
            x, y,
            elapsedTime,
        });

        redZone.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0xFF0000,
            fillAlpha: 0.3,
            lineColor: 0,
            lineWidth: 0,
            lineAlpha: 0,
            transition: false,
            elapsedTime,
        });
    }

    function addAlivePlayers(numAlivePlayers, elapsedTime) {
        if (alivePlayersUI.texts[alivePlayersUI.texts.length - 1].text === String(numAlivePlayers)) return;

        alivePlayersUI.texts.push({
            text: String(numAlivePlayers),
            textColor: 0xFFFFFF,
            textAlpha: 1,
            textSize: 30,
            elapsedTime,
        });
    }

    function addPlayerAttack(attacker, target, elapsedTime) {
        if (attacker === null) return;

        attacks.push({
            type: 'bullet',
            attacker: {
                x: attacker.location.x,
                y: attacker.location.y,
            },
            target: {
                x: target.location.x,
                y: target.location.y,
            },
            shape: {
                type: 'ellipse',
                width: 5,
                height: 5,
                fixSize: true,
                fillColor: 0xffffff,
                fillAlpha: 1,
                lineColor: 0xffffff,
                lineAlpha: 0,
                lineWidth: 0,
            },
            duration: 300,
            fixDuration: true,
            elapsedTime: elapsedTime,
        });
    }

    if (!Array.isArray(logs)) {
        throw 'Invalid replay file format: replay file should be json array';
    }

    let startIndex = logs.findIndex(log => log._T === 'LogMatchStart');
    if (startIndex === -1) {
        throw 'Cannot found match start data';
    }

    logs.splice(0, startIndex);

    let matchStart = logs.shift();
    let mapSize = mapSizes[matchStart.mapName];
    let mapName = mapNames[matchStart.mapName];

    let startTime = getTime(matchStart._D);

    let game = {
        background: {
            image: 'background',
        },
        duration: 0,
        width: mapSize,
        height: mapSize,
    };

    let charactersById = {};

    const CharacterAliveShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFFFFFF,
        fillAlpha: 1,
    };

    const CharacterGroggyShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFFFF00,
        fillAlpha: 1,
    };

    const CharacterDeadShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFF0000,
        fillAlpha: 1,
    };

    let attacks = [];
    let alivePlayersUI = {
        positions: [{
            x: 30,
            y: 30,
            elapsedTime: 0,
        }],
        shapes: [{
            type: 'rectangle',
            width: 70,
            height: 70,
            fillColor: 0x000000,
            fillAlpha: 0.8,
            lineWidth: 0,
            lineAlpha: 0,
            lineColor: 0x000000,
            elapsedTime: 0,
        }],
        texts: [
            {
                text: String(matchStart.characters.length),
                textColor: 0xFFFFFF,
                textAlpha: 1,
                textSize: 30,
                elapsedTime: 0,
            },
        ],
    };

    let whiteCircle = {
        locations: [],
        shapes: [],
    };

    let safetyZone = {
        locations: [],
        shapes: [],
    };

    let redZone = {
        locations: [],
        shapes: [],
    };

    let carePackages = [];
    let carePackageLandIndex = 0;

    for (let character of matchStart.characters) {
        addCharacterLocation(character, 0);
    }

    for (let log of logs) {
        let type = log._T;
        let logTime = getTime(log._D);
        let elapsedTime = logTime - startTime;

        switch (type) {
            case 'LogArmorDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                break;
            }

            case 'LogCarePackageLand': {
                let itemPackage = log.itemPackage;
                let { x, y } = itemPackage.location;

                let carePackage = carePackages[carePackageLandIndex];

                carePackage.locations.push({
                    x, y,
                    elapsedTime
                });

                carePackage.shapes.push({
                    type: 'image',
                    image: 'carePackageLand',
                    width: 20,
                    height: 20,
                    fixSize: true,
                    elapsedTime,
                });

                carePackageLandIndex++;
                break;
            }

            case 'LogCarePackageSpawn': {
                let itemPackage = log.itemPackage;

                let { x, y } = itemPackage.location;

                let items = itemPackage.items;
                for (let item of items) {
                    item.itemName = itemNames[item.itemId];
                }

                let tooltipText = 'CarePackage Items:\n' + items.map(item => {
                    if (item.stackCount === 1) return item.itemName;

                    return `(${item.stackCount}) ${item.itemName}`;
                }).join('\n');


                carePackages.push({
                    locations: [
                        {
                            x, y,
                            elapsedTime,
                        },
                    ],
                    shapes: [
                        {
                            type: 'image',
                            image: 'carePackageFlying',
                            width: 30,
                            height: 40,
                            fixSize: true,
                            elapsedTime,
                        },
                    ],
                    tooltips: [
                        {
                            text: tooltipText,
                            elapsedTime: 0,
                        },
                    ],
                });

                break;
            }

            case 'LogGameStatePeriodic': {
                let gameState = log.gameState;

                addWhiteCircle(gameState.poisonGasWarningPosition, gameState.poisonGasWarningRadius, elapsedTime);
                addSafetyZone(gameState.safetyZonePosition, gameState.safetyZoneRadius, elapsedTime);
                addRedZone(gameState.redZonePosition, gameState.redZoneRadius, elapsedTime);
                addAlivePlayers(gameState.numAlivePlayers, elapsedTime);
                break;
            }

            case 'LogHeal': {
                addCharacterLocation(log.character, elapsedTime);
                // addPlayerHealth(log.character, log.character.health, enums.PlayerState.ALIVE, elapsedTime);
                // addCharacterHealth(log.character, log.character.health, elapsedTime);
                addCharacterShape(log.character, CharacterAliveShape, elapsedTime);
                break;
            }

            case 'LogItemAttach': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemDetach': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemDrop': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemEquip': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickup': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickupFromCarepackage': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickupFromLootbox': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemUnequip': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemUse': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogMatchDefinition': {
                break;
            }

            case 'LogMatchEnd': {
                for (let data of log.characters) {
                    let character = getCharacter(data.accountId);

                    character.name = data.name;
                    character.team = String(data.teamId);
                }

                game.duration = elapsedTime;
                break;
            }

            case 'LogObjectDestroy': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogParachuteLanding': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogPlayerAttack': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }

            case 'LogPlayerCreate': {
                break;
            }

            case 'LogPlayerKill': {
                // if (isCharacter(log.killer)) {
                //     addCharacterLocation(log.killer, elapsedTime);
                // }

                if (log.attackId !== -1) {
                    addCharacterLocation(log.victim, elapsedTime);
                }

                // addPlayerHealth(log.victim, 0, enums.PlayerState.DEAD, elapsedTime);
                // addCharacterHealth(log.victim, 0, elapsedTime);
                addCharacterShape(log.victim, CharacterDeadShape, elapsedTime);

                // if (isCharacter(log.assistant)) {
                //     addCharacterLocation(log.assistant, elapsedTime);
                // }
                break;
            }

            case 'LogPlayerLogin': {
                break;
            }

            case 'LogPlayerLogout': {
                break;
            }

            case 'LogPlayerMakeGroggy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, 0, enums.PlayerState.GROGGY, elapsedTime);
                // addCharacterHealth(log.victim, 0, elapsedTime);
                addCharacterShape(log.victim, CharacterGroggyShape, elapsedTime);
                break;
            }

            case 'LogPlayerPosition': {
                addCharacterLocation(log.character, elapsedTime);
                addAlivePlayers(log.numAlivePlayers, elapsedTime);
                break;
            }

            case 'LogPlayerRevive': {
                addCharacterLocation(log.reviver, elapsedTime);
                addCharacterLocation(log.victim, elapsedTime);

                addCharacterShape(log.victim, CharacterAliveShape, elapsedTime);
                break;
            }

            case 'LogPlayerTakeDamage': {
                if (log.attackId === -1) break;

                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);

                    addPlayerAttack(log.attacker, log.victim, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                break;
            }

            case 'LogRedZoneEnded': {
                for (let driver of log.drivers) {
                    addCharacterLocation(driver, elapsedTime);
                }
                break;
            }

            case 'LogSwimEnd': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogSwimStart': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVaultStart': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVehicleDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }

            case 'LogVehicleLeave': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVehicleRide': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogWeaponFireCount': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogWheelDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }
        }
    }

    return {
        assets: {
            background: `assets/maps/${mapName}_Main_Low_Res.png`,
            carePackageFlying: "assets/icons/CarePackage_Flying.png",
            carePackageLand: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACICAYAAAAIw2JOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZmQzNmZkMS00YWMzLWVlNDItODhmMC0yNGJhMDFkZDY4MzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODhFOTBEN0UzM0Q5MTFFOEI5MTJCQUU3RDM2QzdEOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODhFOTBEN0QzM0Q5MTFFOEI5MTJCQUU3RDM2QzdEOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0MTNlMzBiLTA2MTYtOGQ0NC1iNDMzLTQ4YjM5MDQ2ZDVjNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY1MjUwYjczLTUxYWItMjE0Ny1iYTc5LTkwN2NjNjY4ZTE4OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp4gmdYAABXDSURBVHja7F1vjFzVdb/3vTez3vXOer322saGhCjhj0NkY0yN2YaQNgpSEtE0tdtIIYrkIqzyrR+MUNNESK1E1ULUSlWE6pbyoVL6xYuIUBTFJMguKlYdGnALUQkEYWwSjPF6/3lmZ3Zmbu99e+7MeXfum3n/587su/LRezveefvOub/7O+fce987dHFxkeQtb1GblZsgbzmA8pYDKG+D2RyTbmZiYoLyA0UfUSRE+T+1MXRk6Gf3Mx7rsVyP5Bs1IYjmBrcQI1pgYBuOFjp2Y8wmCEPHBvpZCOH6NnM9hgRAGoM7YHAHiY0EdwQesdjQUupI5M+pdMCw6DFQAAKjU2RUYeQClxEuRTgW4LyAfs/yGbXS4KtcanCswnkVfq6j32NJGH9Y9BgoAClGd8C4Qka5jKHjBhDV+OrIVY2+AlLmUkHHGkg9CeMPix6ZAShmcKh+Bxt9Axh7nEsJRJxvBNkAhi9oYghJ56sgwuDXQJa5LIEsg/FXVOMrgWpg2w24HokE606IkRY2OKRdDG8pVL8RDL2JyySIOJ+Az8eQK7DR32SI9iXVl8HIYmQscJkHWYDPrymuoBkDQIOmBwsarPM+DxRjORkEhzrDy2uMoBErjD3FZQsS8dkEpXQ08LBirAJGF8a+gmQOPpMjuKqM3igAGkQ9QgXrHAOkG5CcEP7dQcFgEQWJkpIdhYVoD9ovAKVvhBEqjL6VyzYu04cOHbpxZmZm/MCBA+N79+4dD2r4c+fOLZ89e3b55ZdfXp6dnX2Xf3SZy4dcPgLjL8LoXYHRG4X+B1UPprBPHbnMGgrWa4jZXEAJPOhApI2BFPAUEGBGkcjgcKRLcEh9Zr9tFGxKyhdGnxby5JNP7jp69OiOuAHe8ePHPzh27Nj7YPzLYPwFNHprYPgoAeig6cG6BOtVJVivIHarYYCqIHK6BMo28u2jyL+XkGxEQCoqLES7sJCjGH4SqN5Oyuiiyetw4xPEDPOK4esxXNgg6cGUycg6yvTKwGZLSArwGe5DwUQUB9gdDATsI12WzCpKMLo2gwKTcL4JDDfqExx2Y6ARBDy3cbrf9Mwzz3wq6VTzyJEjb3M3sIA+koarJsBAg6IH8wnWKwBEcd2rAMw5OF8AMMmsz3VpmIUcH/axkG+XI2saZDs6nwobHHZrIlZIY65CXPfZZ5/Fhi/iDk/j7w2KHihYn0MuUk43UAQ8CVCKWcjDQIh9iuCaSgASERDu5LILZCcfZTdHCQ7zZlZTgvVf8Y9+w+V9kN9A4D4HTFSW7lKykA5AReS2JoFxBHg+zuVGceT+/dNJ+fe8mdMgWP8lPz3P5V04ChBdAtcm3VlNAsjR+HXVfcnMQgDm+pMnT9558ODBidzcw9cEKezZs2fsvvvuaygz4XK6QMZbloy3LE3842gAJDKLHY8//vhtOXiGu4n+Ff0MhLEFJUob0HwfBbx0rAirk2NjeHLsgQcemM5NPPwN+nmrTJLQVE1BmefrWLuylPkfGUhP3nbbbZt5K+TmHf4m+ln0N8TAJeK/htc1BiqiCcTSvffeW9L9sef/p07++ke1VBU6+xdjgX/3wN+Uje0YE/X47leK5P49nStaor/feOMNOVk8StqrDZ5Fc0fjwhyUyrdmobdu3apdN5svJ7lFl4mJCf6vQVhjlTRr10izKgL/zwS+QqN8hdDCKKFWgQsfLNRvPjPtxvVorunB6hXQY3fgb9evXSZWYYxQu5iqHn79t2XLFgeBRy5XSWx0dWHqFgV3Nnp6eloLoLkUBwqllishv9TWpm/gIe5AaK8s8HsIqQfFenhPEm1+/bdt2za5EoE3wqlLVR0AwnGQBJHr96ampjJgIM0oDrtMxRh0Xp+A04VZw6kRdZ9buLZQYX5xkLoDwyGaZapeAJIXEJSmDaCvpgUg15WxqNSlYYF+NBoJPN7vIxCmwUDX9NflIYvs7wLx7v3qCiALCWYhicjsAMRB4NJ4aOOjXQv9dGGte5HuiyUAxuSbX/+h/i4o4PF1YWoqj58y8AVQ4i6MmuR64upBU2WPNIPoyclJByVaGA+WXxCtYyFJXcQvBvKjwHjBJzpGBhTtrwtjLGHwZOvCIAsjCAMd7NMCkLKNA7sv91gqlaxisdiRRqysElKtpzeCGYsTPxgSPBNqtA6i/0Q/qk30t+h34t0Hj92Yu5zhF0RjN+bs2rVLG0BfuZauYWgsd2ZCDJSkW05PD79+hH53FPelDaJ1j+e0XBjMCWSTwnsyqIjGNyGNb4GXxWSw/sVB0O9+Lsw9qm7J0gXRmQKIJZitGBEDJcUgrJ8AsjUsRLrNA+EAWgBI68Lm0pxEVJko9HcNSuMjA4Bm4sLm/AGE54CcXi5MG/+IeQAUkWfnwuJ0mglBaxJ69NmFQb93jYMsjftSAWT5ubA018FaM9GhO4Kakca37iXq0grNzIX1WA+zfABkqQxEfFJ530lEv3WURGIHORMdefQzQxZTaby5rAxcWI/1MKJL4eVN9XJhQvC6SKBJqP7PveQtFAP1Xg+ze7kwNY3Hi6nZr4MNXaNGAzvAephuMbUjjfddB0PrIukH0bHTepNioCRZMfs0Psh6WLfV+BYD+WVh6bkwmkA2Y0Iaj+M4mpxNMnJhQdbDLOPWwWjcPTSGuAoADmNNYnqLsx7Wcx5o586d2QbQic1EU8Nmos1ODqKuh1lEvw7WCqJ9lzEqLIM+YPE2lBmTGMYAckZq+KXysBfedz1MN5GI6aqwfft2fQaWVQofZ0bXiNX4qBkYU0KfdPXw60/of9/1sG4uzP2i39MYaW5lbZ8O8O5EitbAqEXiz0SnPBcUcT1Mt4XDw0K+62CVlGOg2LO3JsRASW4rSVcPPxc2NTVlk84XqnqCaN3TGK11ME5hPpvJsugDNuCb6uPEQCxTRvLrT+h/2wdAVq/HerJdB8PME+dRmKHYUJbt7HWA9TDfpzLU2McDIJ7GFzMNolXgxImD8g1lwWOgYOthHc+GqUE0VaJtsm/fPu3r6/7rnUbqIzjac2HEvA1lNCqbZLMa78a0vZczbA3heGKgjmBadKBt29o7r7P0gGPySI02hWB+NhlgQRV7p47tHEQDJNsI6h/UVN7jPpnxIAqwHqZuZ3XF8Qmie3N/SA+2+9R3yI2v/6DNg8JFacanNHudd4D7ImPREX93KfDf+fI/HyAFwZyBlOjuPOR3w6xmMeXcfSEz18F9g9LffhD4Ol/6l7vWcmdhJ8Y8L3h237fLP2vVIYDzN//oB2Tp+plI+lZ9+lOsh9G1Z/Q6nsggxPt+IOpjv9htx9s/Jre88e+uMRwFQLrXB8hXqQujh30l2ji/rpt3ouvrtrXTAADq5hCZD/jxuaxo4hafCBnLefSAhyw9ACLeYhZCPv7z75PXIwIoxJjy7GJ1OmffkgXQ6OJFcuepb7tvKZIAapX1wbPO6DvyPfxOBD86xq9ZBMNbPkzipxyLCSBlFmqNgXjHO8CIoewGejgwEBiyiwRRQQHRde+fIRd++99k4br9aQKI6ACkG3yxAUSbDXLnyT8npeqiaxD35YvIvXg21yIwYQDRiIYvaFwki6kYC5ArYfBIxnBI+PrqQo8RZIOmYCG4nnDvDf6zAE9BuHp+Xge3dvMr3yc/v/9f0wZQS+VUy35/+uzfk+svveoaYwwYQQKoY3c2CpglgOwIOZUsH+QAC3kABG4kzBpbkHcU6a7XRC6nFiERaBUfgYGgK/CF2UeW07nxvf8gb19+nVyd/gzJojk+zMuCxo5fu8MhP3y1zg3m/Xznxf8ke37xT2REjCThzwE4rZkohdYtJQYiaPSGaQWIHQrIhcXK6CJmgYx/Tw6EZgQ9pLuXejQBzHUYGMI2Iri24P8tAVj4/K7Tj5FLuw52dPRdf/lt93xphZB/O7Pa0WcBCLhjr4zTxX2zIJx25HcL/IYY+ekv22H85o2UfPFnj/CLM1LkSklWsFFs4nm4iHgn7pvoGDaILhBvUdJ+zcIwRY96DD1aFU9g0Im4qoEGoQMuTTLeDR+ecwVPIIh++NbMY63rf2IrJX/1fC0MiHCJzBZeHB/X3QzCQLt3WmTHJkr+9LMF8jMOIHmzj/1BkZz/3kekDqMIMxBeM6FKpsQQ87CIDGTD35FAJRHij7DTkn4BeQNZPgoDFXAQjVJ5zDo2xEcytW8orCn7xFGY9Mt7HLLKf/nxH9WChgkNFNa18OFoYj557DlovrB7zQl9aptFPneLTU6/2SDfvLtAZj5puxU6LMVtyeBZBx41vD88Px+pw78J3/vh5s3EIv3dyi7+/h9G1ONb8L3nuB4U7NWK4aQAkAQjWQAky2faUsfkX93nuPuhv/eTQCDC9VRbxXodNEiYAp7VXlf8/C3tcfUgZ6HLS4z82efXblWwjlDMRqm7hdJ3SvxLPCf1Np3+P5ORzDUsFFdJNsKsbSMGKkAnqva0fWK5P/kdh9T5F/7hhZ4vi5flLzGQGGYgXL0X5r4Yeeuttyo33XRTR0G5m7db5Iap9k3dep1F/vEbI6QAkbGNgGIrrGOR9FeJqELhg9rU3Lkpsz5gI6yfDak+0wComxv/xl2ciVb1HCTqiXEcyDLkaq36pkX0ZRBlKcTKK6+8sqS78O/d2jk1VtpAPVG/ZxNthuBJYs7HVCBhFtdtIbU1trcDxIFHPqtPV0QxOuIt8CuZyBdANfhFtwirqGSnu/Dv7+4+t4r3QWYNnmFrKgt5QARAUl/s7SgSdWUc+l/UT10i7bphrSK/eB5Ixj2yiq/4wvypU6e0APrE1u6Y9lumyFs8IDEUoDfRRKbKuEnY/MSJEx/Nzs7+mqyVGZdVosuIgRoWStEapF0FuFXF9/z581dOnz49H3XU0D4FtOa/oTn+dIK6daKXhGnvvPNO5aGHHnqTn/6WrBXilSzkKTNuoSC6rrivBUDepaeffvpylBRWV0CeZmxwalinxx0QVHNuBZQwzLN///7/bTQaF0hn4V0MoKYjyjdPTEw0EQNVpPsC5JWee+65N5966qnxhx9++LqkjLBeXE4/3FvY+zh8+PCv7rnnnvGXXnpp+cUXX1yu1+sCC6Lg7ntkrXpzR9FdGUQ7ysTpKmkXoheUJctebnj00UeLZ86cWX7wwQen77jjjvFSqeQsLS3VxdEkQw5bGk9C6BFVzxdeeGHp5MmTS2hO8F2QC8iFzYNnqpL2Ep9nhr2J0vgyuDBc6sfhTGRxceuE33777aPnzp2rLCws7DfV4Pk9RGoXkWDwqO6roWZhOJUvE/3r7qRMvPbaa5Vu2yLijvrZyck1JDNGvn7xYuDvPX/DDWvl9ZStHP1yYc9yPWqgxx9H0KPgo0dKegmv8wHIhwCeOSATWfJ7VbKPCH8cecLjIOzGcKyGXzZVBLe2kfRr032IOROTXFgSz5pkoIcAyxVInuYQ85QV5mlyzHS4MJWF5GcWAs8YgEfUEt9hqsFZ+iM1807PQI8qMM0ikmXSnjyUUz1Mgofg7E6wEErncUq/DBebR6i8anL8YMorLSnJ8nXhsVsFmOYaHPHal9z86AGPykDSlREUZTfAVZUBSEsAJklrY6ZZIel3YgxaOh+j1Uh7HbRKvDtmG0AwHa1jfgkxURMxURXQWAFZATF+/iV/R2vghh/4wNL0A08HA2lAJIrR4W0ecr2sBmLcqE3qCYwkY6AkXCrN9rYD364V8IJNQjqea2umCZ4Bf0frILmuWM0y8aaG6f33UZmQDUipT2tYR4ZJq/GRXuyiTNKyHEDZ0r9pMVDo7yoMRHMArT83FusFdwPyWpvchZmW1vgwUO7C1rELS+I+che2jl1YFFeWu7A+M5dpe6LpkA6ooY2BTHoujBkAwBxAAzxSk0jjcxfWp+B1YF1xHgP1b7Sbtho/zElFnsZnxIQDtBq/vtN4kzaUUTJ8L3lYNy4sr2ifu7BEXFc/gRSHCfOlDENc4DC9HygHUAYxkEkz0diVxl3KyBloSEZcVi4sj4H6mIWZ4sJojKww31CWN60ri+rCcgbqkwsc1NX4PAvrUwxk4nNhkfRQGCh3YRnHQCa5riS2tOYubJ3HQGEZJI+B+uz6Bn1TvcnMOtQxEDEwBqIG2COPgQY8BgqtRx4D5S2PgQbQfVGS7EaupFioX4ycx0AR4w5TVuPzGMg/qUhtUMS5uGlZWDOh+8hAj0j9aoW8f5ZgZpoaA5mUCAzQajzz6efEGAhfNNU3lLW0gdrrcSxBDeiVZgRgN7NfjddWZe7VnAh/ABfmTbR97r33Yl/j/gsXhiJz+2qPt9q/9LGPJf0ntVWZk2AgPIjkOxJXSYCivHkbqCb7tPVC8SDkGdSFNTXgWcltPlRtRQOiniwUxIXhqs64pmqFxyhlUdV379694+qX7knAHeXNvyVlX6jKXCbtd4DXEIh6JkthXBguidmqqQpVffM2oA36DxdVkeUNGkm5MFxDQ7ouWVN17syZMwt5Nwxug/6TJZ2WkSurB2GgoFmYfFN9FbGPKLhy+cSJE/938ODBTUePHk28es/x48c/eOSRR95f7538xBNP7ErLvqL/iLeobpm0qxL2zLSDAkgtyrsMqC1x2Xjs2LFX+XFfkkoK5fh1MXhqyuhoDCFWZPl3USlS1GUTJbaItEMK9hX9hovqLhOlKnOv69DFxcWuvzAxMUFBMVlsToBmM5dpLqII7/UgOw8fPnzr3XffvenAgQPjusA6SEAnfLIodj87O7tA2vWrpGK46H1zCAGEa7MJW49yEXYUJZQ2HTp0aNPMzMx4XPsKtwXMI8CjlreUTNSKhboVW+kJIACRVGwElJIg2splG5ftcBSgmuIySSkNXQqKZwM1AIusUSZLS10DAFVRhhBlgtfkJit428BA0tYbwd4TIAI449y+xQj2LZN23bfLwDyX4PgR8daGd92YWh8sqguTc0HSjZVRAN4AtC7BjYlqhiV+s6MwigpgFFxCnpHOCok1lEouI8HFz7D7GmYAYTc2BjKOZBTsWwxhX1muawmY/Sr011WQBeItbRmI4QMBSKAQCtHJVJ4qoKqSdqnwcVB4FJQrkHYBX6qZHlDrklXQVEEZ/SwDuzrJYC2ujy4M16gdQa5MAkn+PELaFbV72VdOEMqqhLJ44DLxFhD0pPC92CcsAxElcGVKdiZvZgMKAOXosIl3pwVTroFnuGXFvBUEnNqQs083FioiIG2A8xE0OMPYt4bsWkaAkoFzLWyCEhhAwEIWujgGUA0hu6ABj4WUwwAkCgvVkSKr6LiK/hZbBwCi0Dc2AkoRHYuIpawA9lVBtIoGZlUZnB2FdRNjIASiuubGHCS2MjJUelVpFo8UXB2xjn5uua2gyg1iA/uq7sw21b6BsrCAilKNQnh0+I0QzEKqwmy9AGdQ7RsZQMo8EVWUoCRcnRF1pyNWnnWbh1gHQDLavrEBlLf13fLnwvKWAyhv/Wv/L8AAbPlZvhiwgFUAAAAASUVORK5CYII=",
        },
        canvas: {
            width: 800,
            height: 800,
        },
        game,
        characters: [
            ...Object.values(charactersById),
        ],
        objects: [
            whiteCircle,
            redZone,
            safetyZone,
            ...carePackages,
        ],
        ui: [
            alivePlayersUI,
        ],
        attacks: [
            ...attacks,
        ],
    };
};

function getTime(str) {
    return new Date(str).getTime();
}
