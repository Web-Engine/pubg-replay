const mapNames = {
    Desert_Main: 'Miramar',
    DihorOtok_Main: 'Vikendi',
    Erangel_Main: 'Erangel',
    Range_Main: 'Camp_Jackal',
    Savage_Main: 'Sanhok',
};

const mapSizes = {
    Desert_Main: 800000,
    DihorOtok_Main: 600000,
    Erangel_Main: 800000,
    Range_Main: 200000,
    Savage_Main: 400000,
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

function isCircleEqual(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;

    return isPointEqual(a.location, b.location) && a.radius === b.radius;
}

exports.normalizeData = function(logs) {
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
                    elapsedTime: 0,
                },
            ],
            healths: [
                {
                    health: 100,
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

    function addCharacterHealth(data, health, elapsedTime) {
        let character = getCharacter(data.accountId);

        let lastHealth = last(character.healths);
        if (lastHealth.health === health) return;

        character.healths.push({
            health,
            elapsedTime,
        });
    }

    function addCharacterShape(data, shape, elapsedTime) {
        let character = getCharacter(data.accountId);

        character.shapes.push({
            ...shape,
            elapsedTime,
        });
    }

    function addWhiteCircle({ x, y }, radius, elapsedTime) {
        // let lastWhiteCircle = last(whiteCircle);

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
            elapsedTime,
        });
    }

    function addSafetyZone({ x, y }, radius, elapsedTime) {
        // let beforeLast = back(data.safetyZone, 1);
        //
        // if (beforeLast && beforeLast.radius === radius) {
        //     return;
        // }

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
        // let lastRedZone = last(data.redZone);
        //
        // let circle = {
        //     location: normalizeLocation({ x, y }),
        //     radius: normalizeNumber(radius),
        // };
        //
        // if (isCircleEqual(lastRedZone, circle)) {
        //     return;
        // }

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

    function addPlayerAttack(attacker, victim, elapsedTime) {
        // if (attacker === null) return;
        //
        // attacks.push({
        //     attacker: { location: attacker.location },
        //     victim: { location: victim.location },
        //     elapsedTime,
        // });
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

                // let items = itemPackage.items;
                // for (let item of items) {
                //     item.itemName = itemNames[item.itemId];
                // }

                carePackages.push({
                    locations: [
                        {
                            name: 'CarePackage',
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
                addCharacterHealth(log.character, log.character.health, elapsedTime);
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

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, 0, enums.PlayerState.DEAD, elapsedTime);
                addCharacterHealth(log.victim, 0, elapsedTime);
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
                addCharacterHealth(log.victim, 0, elapsedTime);
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

                // addPlayerHealth(log.victim, log.victim.health, enums.PlayerState.ALIVE, elapsedTime);
                addCharacterHealth(log.victim, log.victim.health, elapsedTime);
                addCharacterShape(log.victim, CharacterAliveShape, elapsedTime);
                break;
            }

            case 'LogPlayerTakeDamage': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, log.victim.health - log.damage, null, elapsedTime);
                addCharacterHealth(log.victim, log.victim.health - log.damage, elapsedTime);
                // addCharacterShape(log.victim, CharacterAliveShape, elapsedTime);
                addPlayerAttack(log.attacker, log.victim, elapsedTime);
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
            background: "assets/maps/Sanhok_Main_Low_Res.png",
            carePackageFlying: "assets/icons/CarePackage_Flying.png",
            carePackageLand: "assets/icons/CarePackage_Normal.png",
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
