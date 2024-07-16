export const stateProp = {
    playerHp: "playerHp",
    isDoubleJumpUnlocked: "isDoubleJumpUnlocked",
    playerInBossFight: "playerInBossFight",
    isBossDefated: "isBossDefated",
};

function stateManager()
{
    const state = {
        playerHp: 4,
        maxPlayerHp: 4,
        isDoubleJumpUnlocked: false,
        playerInBossFight: false,
        isBossDefated: false
    };

    return {
        current() {
            return {...state};
        },
        set(property, value) {
            state[property] = value;
        }
    }
};

export const state = stateManager();